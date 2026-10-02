// SPDX-License-Identifier: GPL-3.0-or-later
import { Peer, type DataConnection, type PeerOptions } from 'peerjs';
import { BrowserNetworkClient, NetworkError, type BrowserNetworkOptions, type ClientTransport, type ClientTransportEvents } from './client.js';
import { createRoomAuthority, type RoomAuthority } from './authority.js';
import { PeerWire } from './peer-wire.js';
import type { Serializable, SessionFactory } from './types.js';

export interface BrowserPeerOptions extends Omit<BrowserNetworkOptions,'url'|'transportFactory'> {
  /** The public signaling ID from an invitation. Absent means this browser hosts. */
  hostPeerId?: string;
  createSession?: SessionFactory;
  assetManifest?: Serializable;
  /** Actual custom signaling/ICE configuration, e.g. a LAN server or your TURN. */
  peerOptions?: PeerOptions;
}
const LABEL='jones-native-v1',CONNECT_TIMEOUT=20000;
const HOST_CLOSED='The host closed this game. Ask the host to create a new room and share its invitation.';
const control=(code:number,reason:string)=>JSON.stringify({jonesPeerControl:1,type:'close',code,reason:reason.slice(0,250)});
function closeNotice(raw:unknown):{code:number;reason:string}|null {
  if(typeof raw!=='string'||raw.length>512)return null;
  try{const v=JSON.parse(raw);return v&&v.jonesPeerControl===1&&v.type==='close'&&Number.isInteger(v.code)&&v.code>=1000&&v.code<=4999&&typeof v.reason==='string'&&v.reason.length<=250?{code:v.code,reason:v.reason}:null;}catch{return null;}
}
// Separate from gameplay traffic: a static original screen can be silent.
function heartbeat(connection:DataConnection,onStale:()=>void){
  let lastReceived=Date.now(),timer:ReturnType<typeof setInterval>|null=null;
  const send=(type:'ping'|'pong')=>{try{if(connection.open)connection.send(JSON.stringify({jonesPeerControl:1,type}));}catch{onStale();}};
  return {
    start(){lastReceived=Date.now();timer=setInterval(()=>{if(Date.now()-lastReceived>35000)onStale();else send('ping');},5000);},
    receive(data:unknown){
      lastReceived=Date.now();
      if(typeof data!=='string'||data.length>128)return false;
      try{const v=JSON.parse(data);if(v?.jonesPeerControl===1&&(v.type==='ping'||v.type==='pong')){if(v.type==='ping')send('pong');return true;}}catch{/* Wire decoder reports invalid messages. */}
      return false;
    },
    stop(){if(timer)clearInterval(timer);timer=null;}
  };
}
interface Link {close(code:number,reason:string,notify?:boolean):void}
/** One browser owns the actual native runtime; all seats use the room protocol. */
export class BrowserPeerClient extends BrowserNetworkClient {
  readonly peerRole:'host'|'guest';
  private peer:Peer|null=null;
  private authority:RoomAuthority|null=null;
  private peerReady:Promise<void>|null=null;
  private peerReject:((error:Error)=>void)|null=null;
  private signalTimer:ReturnType<typeof setTimeout>|null=null;
  private signalRetry=0;
  private closed=false;
  private serial=0;
  private links=new Set<Link>();
  private guestFailure:((error:NetworkError)=>void)|null=null;
  private loopback:Link|null=null;
  private readonly leave=()=>this.disconnect();
  private hostId:string;
  constructor(private readonly peerSettings:BrowserPeerOptions){
    let owner:BrowserPeerClient;
    super({...peerSettings,transportFactory:events=>owner.makeTransport(events)});
    owner=this;
    this.peerRole=peerSettings.hostPeerId?'guest':'host';this.hostId=peerSettings.hostPeerId??'';
    if(this.peerRole==='host'){
      if(!peerSettings.createSession)throw new Error('A native session factory is required to host a game.');
      this.authority=createRoomAuthority({createSession:peerSettings.createSession,assetManifest:peerSettings.assetManifest,maxRooms:1,onRuntimeError:error=>peerSettings.onError?.(new NetworkError('runtime_failed',error instanceof Error?error.message:'The original game runtime stopped.'))});
    }
    if(typeof window!=='undefined')window.addEventListener('pagehide',this.leave);
  }
  get hostPeerId(){return this.hostId;}
  private signalReconnect(){
    if(this.closed||this.signalTimer||!this.peer||this.peer.destroyed)return;
    this.signalTimer=setTimeout(()=>{
      this.signalTimer=null;
      if(this.closed||!this.peer||this.peer.destroyed)return;
      try{if(this.peer.disconnected)this.peer.reconnect();}catch{/* A later signaling retry can still succeed. */}
      if(!this.peer.open)this.signalReconnect();
    },Math.min(10000,500*2**Math.min(this.signalRetry++,5)));
  }
  private ensurePeer():Promise<void>{
    if(this.closed)return Promise.reject(new NetworkError('disconnected','This peer client has closed.'));
    if(this.peer?.open)return Promise.resolve();
    if(this.peerReady)return this.peerReady;
    this.peerReady=new Promise<void>((resolve,reject)=>{
      let settled=false,opening:(()=>void)|null=null;
      const finish=(error?:Error)=>{
        if(settled)return;settled=true;clearTimeout(timer);if(opening)this.peer?.off('open',opening);this.peerReject=null;
        queueMicrotask(()=>{this.peerReady=null;});
        if(error)reject(error);else resolve();
      };
      const timer=setTimeout(()=>finish(new NetworkError('signaling_timeout','Unable to reach the peer signaling service. Check the connection and try again.')),CONNECT_TIMEOUT);
      this.peerReject=error=>finish(error);
      if(!this.peer){
        try{this.peer=new Peer({config:{iceServers:[{urls:'stun:stun.l.google.com:19302'}]},...this.peerSettings.peerOptions});}
        catch(error){finish(error instanceof Error?error:new Error(String(error)));return;}
        const peer=this.peer;
        peer.on('open',id=>{
          if(this.closed)return;
          if(this.peerRole==='host')this.hostId=id;
          this.signalRetry=0;if(this.signalTimer){clearTimeout(this.signalTimer);this.signalTimer=null;}
        });
        peer.on('connection',connection=>{
          if(this.peerRole==='host'&&!this.closed)this.acceptGuest(connection);else connection.close();
        });
        peer.on('disconnected',()=>this.signalReconnect());
        peer.on('error',error=>{
          if(this.closed)return;
          if(error.type==='peer-unavailable'&&this.peerRole==='guest'){
            this.guestFailure?.(new NetworkError('host_closed',HOST_CLOSED));return;
          }
          const failure=new NetworkError(`peer_${error.type}`,`Peer connection failed: ${error.message}`);
          if(!peer.open)this.peerReject?.(failure);
          // Established RTC channels remain valid when the signaling server drops.
          if(['network','socket-error','socket-closed','server-error'].includes(error.type))this.signalReconnect();
          else this.peerSettings.onError?.(failure);
        });
        peer.on('close',()=>{if(!this.closed){this.peerReject?.(new NetworkError('peer_closed','The peer connection stopped.'));for(const link of [...this.links])link.close(4002,HOST_CLOSED,false);this.loopback?.close(4002,HOST_CLOSED);}});
      }
      const peer=this.peer;
      if(peer.open){finish();return;}
      opening=()=>finish();peer.on('open',opening);
      if(peer.disconnected){try{peer.reconnect();}catch(error){finish(error instanceof Error?error:new Error(String(error)));}}
    });
    return this.peerReady;
  }
  private makeTransport(events:ClientTransportEvents):ClientTransport {
    return this.peerRole==='host'?this.makeLoopback(events):this.makeGuest(events);
  }
  private makeLoopback(events:ClientTransportEvents):ClientTransport {
    let opened=false,ended=false;const id=`local-${++this.serial}`;
    const link:Link={close:(code,reason)=>{if(ended)return;ended=true;opened=false;this.authority?.disconnect(id);queueMicrotask(()=>events.close(code,reason));}};
    this.loopback=link;
    void this.ensurePeer().then(()=>{
      if(ended)return;
      opened=true;
      this.authority!.connect({id,send:message=>queueMicrotask(()=>{if(!ended)events.message(message);}),close:(code,reason)=>link.close(code,reason)});
      events.open();
    }).catch(error=>{if(ended)return;events.error(error);link.close(1006,error.message);});
    return {get open(){return opened&&!ended;},send:message=>{if(!opened||ended)throw new Error('Peer loopback is not open.');queueMicrotask(()=>{if(!ended)void this.authority!.receive(id,message);});},close:(code=1000,reason='Disconnected.')=>link.close(code,reason)};
  }
  private acceptGuest(connection:DataConnection){
    if(this.links.size>=12||connection.label!==LABEL||connection.metadata?.protocol!==1||connection.serialization!=='raw'||!connection.reliable){connection.close();return;}
    const id=`remote-${++this.serial}`;let opened=false,ended=false,authenticated=false;
    const pulse=heartbeat(connection,()=>link.close(1006,'Peer stopped responding. Reconnect to resume.',false));
    let timer:ReturnType<typeof setTimeout>|null=setTimeout(()=>link.close(1008,'Join or resume the room to continue.'),CONNECT_TIMEOUT);
    const wire=new PeerWire({
      send:data=>{connection.send(data);},bufferedAmount:()=>connection.dataChannel?.bufferedAmount??0,maxIncomingBytes:4096,
      onMessage:message=>{if(opened&&!ended)void this.authority!.receive(id,message);},
      onError:error=>link.close(error.closeCode,error.message)
    });
    const link:Link={close:(code,reason,notify=true)=>{
      if(ended)return;ended=true;opened=false;if(timer)clearTimeout(timer);pulse.stop();wire.dispose();this.links.delete(link);this.authority?.disconnect(id);
      if(notify&&connection.open){try{connection.send(control(code,reason));}catch{/* Channel already closed. */}}
      connection.close();
    }};
    this.links.add(link);
    connection.on('open',()=>{
      if(ended)return;opened=true;pulse.start();
      this.authority!.connect({id,send:message=>{if(message.type==='joined'&&!authenticated){authenticated=true;if(timer)clearTimeout(timer);timer=null;}wire.send(message);},close:(code,reason)=>link.close(code,reason)});
    });
    connection.on('data',data=>{
      if(ended||pulse.receive(data))return;
      const notice=closeNotice(data);if(notice){link.close(1000,'Guest disconnected.',false);return;}
      wire.receive(data);
    });
    connection.on('close',()=>link.close(1006,'Peer disconnected.',false));
    connection.on('error',()=>link.close(1006,'Peer connection failed.',false));
  }
  private makeGuest(events:ClientTransportEvents):ClientTransport {
    let opened=false,ended=false,connection:DataConnection|null=null,wire:PeerWire|null=null,pulse:ReturnType<typeof heartbeat>|null=null;
    const timer=setTimeout(()=>fail(new NetworkError('peer_timeout','Unable to connect to the host. Ask the host to keep the game open; this network may require a TURN relay.')),CONNECT_TIMEOUT);
    const link:Link={close:(code,reason,notify=true)=>{
      if(ended)return;ended=true;opened=false;clearTimeout(timer);pulse?.stop();wire?.dispose();this.links.delete(link);
      if(this.guestFailure===fail)this.guestFailure=null;
      if(notify&&connection?.open){try{connection.send(control(code,reason));}catch{/* Closed. */}}
      connection?.close();queueMicrotask(()=>events.close(code,reason));
    }};
    const fail=(error:NetworkError)=>{if(ended)return;events.error(error);link.close(error.code==='host_closed'?4002:1006,error.message,false);};
    this.links.add(link);this.guestFailure=fail;
    void this.ensurePeer().then(()=>{
      if(ended)return;
      connection=this.peer!.connect(this.hostId,{label:LABEL,metadata:{protocol:1},serialization:'raw',reliable:true});
      pulse=heartbeat(connection,()=>link.close(1006,'The host stopped responding. Reconnecting to resume…',false));
      wire=new PeerWire({send:data=>{connection!.send(data);},bufferedAmount:()=>connection!.dataChannel?.bufferedAmount??0,maxOutgoingBytes:4096,onMessage:message=>events.message(message),onError:error=>{events.error(new NetworkError(error.recoverable?'peer_interrupted':'invalid_peer_message',error.message));link.close(error.closeCode,error.message);}});
      connection.on('open',()=>{if(ended)return;opened=true;clearTimeout(timer);pulse!.start();events.open();});
      connection.on('data',data=>{if(ended||pulse!.receive(data))return;const notice=closeNotice(data);if(notice){link.close(notice.code,notice.reason,false);return;}wire!.receive(data);});
      connection.on('close',()=>link.close(1006,'Connection to the host was interrupted. Reconnecting…',false));
      connection.on('error',error=>fail(new NetworkError('peer_connection_failed',error.message)));
    }).catch(error=>fail(error instanceof NetworkError?error:new NetworkError('peer_connection_failed',error.message)));
    return {get open(){return opened&&!ended;},send:message=>{if(!opened||ended||!wire)throw new Error('Peer connection is not open.');wire.send(message);},close:(code=1000,reason='Disconnected.')=>link.close(code,reason)};
  }
  override disconnect(){
    if(this.closed)return;this.closed=true;
    if(typeof window!=='undefined')window.removeEventListener('pagehide',this.leave);
    if(this.signalTimer){clearTimeout(this.signalTimer);this.signalTimer=null;}
    this.peerReject?.(new NetworkError('disconnected','The peer client closed.'));
    super.disconnect();
    for(const link of [...this.links])link.close(this.peerRole==='host'?4002:1000,this.peerRole==='host'?HOST_CLOSED:'Guest disconnected.');
    this.authority?.close();this.authority=null;this.peer?.destroy();this.peer=null;
  }
}
export const createBrowserPeerClient=(options:BrowserPeerOptions)=>new BrowserPeerClient(options);
