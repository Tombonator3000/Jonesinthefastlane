// SPDX-License-Identifier: GPL-3.0-or-later
import { parseGameInput, type ClientMessage, type Credentials, type GameInput, type PlayerCount, type RoomInfo, type Serializable, type ServerMessage } from './types.js';

export class NetworkError extends Error {
  constructor(public readonly code: string, message: string) { super(message); this.name = 'NetworkError'; }
}
export interface ClientTransport {
  readonly open: boolean;
  send(message: ClientMessage): void;
  close(code?: number, reason?: string): void;
}
export interface ClientTransportEvents {
  open(): void;
  message(message: unknown): void;
  error(error: Error): void;
  close(code: number, reason: string): void;
}
/** Factories must defer callbacks until after returning their transport. */
export type ClientTransportFactory = (events: ClientTransportEvents) => ClientTransport;
export interface BrowserNetworkOptions {
  url?: string;
  /** A real alternate transport; all seat/input/protocol checks remain shared. */
  transportFactory?: ClientTransportFactory;
  credentials?: Credentials;
  /** Credentials contain a private reconnect token; never put them in invites. */
  onCredentials?: (credentials: Credentials | null) => void;
  onRoom?: (room: RoomInfo) => void;
  onFrame?: (frame: Serializable, tick: number, revision: number) => void;
  onState?: (state: Serializable, inputOwner: number | null, tick: number) => void;
  onStatus?: (status: 'connecting' | 'connected' | 'reconnecting' | 'disconnected') => void;
  onError?: (error: NetworkError) => void;
  autoReconnect?: boolean;
}
function webSocketTransport(url:string,events:ClientTransportEvents):ClientTransport {
  const socket=new WebSocket(url);
  socket.addEventListener('open',()=>events.open());
  socket.addEventListener('message',event=>{
    try{events.message(JSON.parse(String(event.data)));}
    catch{events.error(new NetworkError('invalid_server_message','The server returned an invalid message.'));socket.close(1002,'Invalid server message.');}
  });
  socket.addEventListener('error',()=>events.error(new NetworkError('connection_failed','Unable to connect to the game server.')));
  socket.addEventListener('close',event=>events.close(event.code,event.reason));
  return {get open(){return socket.readyState===1;},send:message=>socket.send(JSON.stringify(message)),close:(code=1000,reason='Disconnected.')=>socket.close(code,reason)};
}
const integer=(v:unknown)=>Number.isSafeInteger(v)&&Number(v)>=0;
const owner=(v:unknown)=>v===null||Number.isInteger(v)&&Number(v)>=0&&Number(v)<4;
function validRoom(value:any):value is RoomInfo {
  return value&&typeof value==='object'&&typeof value.roomId==='string'&&[1,2,3,4].includes(value.playerCount)&&['waiting','starting','running'].includes(value.status)&&owner(value.inputOwner)&&Array.isArray(value.seats)&&value.seats.length<=4&&value.seats.every((s:any)=>s&&integer(s.seat)&&s.seat<4&&typeof s.connected==='boolean');
}
function validMessage(value:any):value is ServerMessage {
  if(!value||typeof value!=='object'||Array.isArray(value)||typeof value.type!=='string')return false;
  if(value.requestId!==undefined&&typeof value.requestId!=='string')return false;
  switch(value.type){
    case 'welcome':return value.protocol===1;
    case 'joined':return validRoom(value.room)&&typeof value.roomId==='string'&&integer(value.seat)&&value.seat<4&&typeof value.sessionToken==='string'&&typeof value.joinToken==='string'&&integer(value.lastInputSeq);
    case 'room':return validRoom(value.room);
    case 'snapshot':return integer(value.tick)&&integer(value.revision)&&owner(value.inputOwner)&&'frame'in value&&'state'in value;
    case 'frame':return integer(value.tick)&&integer(value.revision)&&'frame'in value;
    case 'state':return integer(value.tick)&&integer(value.revision)&&owner(value.inputOwner)&&'state'in value;
    case 'started':return true;
    case 'ack':return integer(value.seq)&&integer(value.tick);
    case 'error':return typeof value.code==='string'&&typeof value.message==='string';
    default:return false;
  }
}

/** Shares one room protocol across WebSocket, WebRTC and the host loopback. */
export class BrowserNetworkClient {
  private transport: ClientTransport | null = null;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private retry=0;
  private stopped=false;
  private authenticated=false;
  private connection:Promise<void>|null=null;
  private requestNumber=0;
  private inputSequence=0;
  private lastRevision=-1;
  private pending=new Map<string,{resolve:(message:ServerMessage)=>void;reject:(failure:Error)=>void;timer:ReturnType<typeof setTimeout>}>();
  credentials:Credentials|null;
  room:RoomInfo|null=null;
  inputOwner:number|null=null;

  constructor(private readonly options:BrowserNetworkOptions){
    if(!options.transportFactory){const url=new URL(options.url??'');if(!['ws:','wss:'].includes(url.protocol))throw new Error('A ws:// or wss:// server address is required.');}
    this.credentials=options.credentials??null;this.inputSequence=this.credentials?.lastInputSeq??0;
  }
  get canInput(){return this.authenticated&&!!this.transport?.open&&this.room?.status==='running'&&this.credentials?.seat===this.inputOwner;}
  connect():Promise<void>{
    if(this.connection)return this.connection;
    if(this.transport?.open&&(!this.credentials||this.authenticated))return Promise.resolve();
    this.stopped=false;
    if(this.reconnectTimer){clearTimeout(this.reconnectTimer);this.reconnectTimer=null;}
    this.options.onStatus?.(this.retry?'reconnecting':'connecting');
    this.connection=new Promise<void>((resolve,reject)=>{
      let opened=false;
      const events:ClientTransportEvents={
        open:()=>{
          if(this.transport!==transport)return;
          opened=true;
          const resumed=this.credentials?this.request({type:'resume',roomId:this.credentials.roomId,sessionToken:this.credentials.sessionToken}):Promise.resolve(null);
          void resumed.then(()=>{if(this.transport!==transport)return;this.retry=0;this.connection=null;this.options.onStatus?.('connected');resolve();}).catch(failure=>{
            this.connection=null;
            if(failure instanceof NetworkError&&['invalid_session','room_unavailable'].includes(failure.code)){this.credentials=null;this.authenticated=false;this.room=null;this.options.onCredentials?.(null);}
            reject(failure);
          });
        },
        message:message=>{if(this.transport===transport)this.receive(message);},
        error:failure=>{
          if(this.transport!==transport)return;
          const error=failure instanceof NetworkError?failure:new NetworkError('connection_failed',failure.message);
          if(!opened)reject(error);
          this.options.onError?.(error);
        },
        close:(code,reason)=>{
          if(this.transport!==transport)return;
          this.transport=null;this.connection=null;this.authenticated=false;
          const failure=new NetworkError(code===4002?'host_closed':![1000,1001,1006].includes(code)?'connection_closed':'disconnected',reason||'The game connection closed.');
          if(!opened)reject(failure);
          for(const p of this.pending.values()){clearTimeout(p.timer);p.reject(failure);}this.pending.clear();
          this.options.onStatus?.('disconnected');
          if(failure.code==='host_closed'||failure.code==='connection_closed')this.options.onError?.(failure);
          if(!this.stopped&&this.credentials&&this.options.autoReconnect!==false&&![4001,4002,1002,1008].includes(code)){
            const delay=Math.min(10000,500*2**this.retry++);
            this.reconnectTimer=setTimeout(()=>{this.reconnectTimer=null;void this.connect().catch(error=>this.options.onError?.(error));},delay);
          }
        }
      };
      let transport:ClientTransport;
      try{transport=(this.options.transportFactory??(events=>webSocketTransport(this.options.url!,events)))(events);this.transport=transport;}
      catch(error){queueMicrotask(()=>{this.connection=null;reject(error);});}
    });
    return this.connection;
  }
  private receive(message:unknown){
    if(!validMessage(message)){this.options.onError?.(new NetworkError('invalid_server_message','The host returned an invalid game message.'));this.transport?.close(1002,'Invalid game message.');return;}
    if(message.type==='joined'){
      this.credentials={roomId:message.roomId,seat:message.seat,sessionToken:message.sessionToken,joinToken:message.joinToken,lastInputSeq:message.lastInputSeq};
      this.inputSequence=Math.max(this.inputSequence,message.lastInputSeq);this.lastRevision=-1;this.authenticated=true;this.room=message.room;this.inputOwner=message.room.inputOwner;
      this.options.onCredentials?.(this.credentials);this.options.onRoom?.(message.room);
    }else if(message.type==='room'){this.room=message.room;this.inputOwner=message.room.inputOwner;this.options.onRoom?.(message.room);
    }else if(message.type==='snapshot'){
      if(message.revision<this.lastRevision)return;
      this.lastRevision=message.revision;this.inputOwner=message.inputOwner;
      this.options.onFrame?.(message.frame,message.tick,message.revision);this.options.onState?.(message.state,message.inputOwner,message.tick);
    }else if(message.type==='frame'){
      if(message.revision<this.lastRevision)return;this.lastRevision=message.revision;this.options.onFrame?.(message.frame,message.tick,message.revision);
    }else if(message.type==='state'){
      if(message.revision<this.lastRevision)return;this.lastRevision=message.revision;this.inputOwner=message.inputOwner;this.options.onState?.(message.state,message.inputOwner,message.tick);
    }
    const failure=message.type==='error'?new NetworkError(message.code,message.message):null;
    if('requestId'in message&&message.requestId){const p=this.pending.get(message.requestId);if(p){this.pending.delete(message.requestId);clearTimeout(p.timer);if(failure)p.reject(failure);else p.resolve(message);}}
    if(failure)this.options.onError?.(failure);
  }
  private request(message:ClientMessage):Promise<ServerMessage>{
    if(!this.transport?.open)return Promise.reject(new NetworkError('disconnected','Connect to the game first.'));
    if(this.pending.size>=256)return Promise.reject(new NetworkError('input_queue_full','Wait for the host to process pending input.'));
    const requestId=String(++this.requestNumber);
    return new Promise((resolve,reject)=>{
      const timer=setTimeout(()=>{this.pending.delete(requestId);reject(new NetworkError('timeout','The game host did not respond.'));},15000);
      this.pending.set(requestId,{resolve,reject,timer});
      try{this.transport!.send({...message,requestId});}catch(error){clearTimeout(timer);this.pending.delete(requestId);reject(error);}
    });
  }
  async createRoom(playerCount:PlayerCount):Promise<Credentials>{await this.connect();await this.request({type:'create',playerCount});return this.credentials!;}
  async joinRoom(roomId:string,joinToken:string):Promise<Credentials>{await this.connect();await this.request({type:'join',roomId,joinToken});return this.credentials!;}
  async start():Promise<void>{await this.request({type:'start'});}
  async sendInput(input:GameInput):Promise<void>{
    if(!this.canInput)throw new NetworkError('not_your_turn','Wait until you control the current original game screen.');
    if(!parseGameInput(input))throw new NetworkError('invalid_input','Invalid game input.');
    const seq=++this.inputSequence;await this.request({type:'input',seq,input});
    if(this.credentials){this.credentials.lastInputSeq=Math.max(this.credentials.lastInputSeq,seq);this.options.onCredentials?.(this.credentials);}
  }
  disconnect(){this.stopped=true;if(this.reconnectTimer){clearTimeout(this.reconnectTimer);this.reconnectTimer=null;}this.transport?.close(1000,'Disconnected.');}
}
export const createBrowserNetworkClient=(options:BrowserNetworkOptions)=>new BrowserNetworkClient(options);
