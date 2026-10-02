// SPDX-License-Identifier: GPL-3.0-or-later
// Bounded, ordered binary envelopes over a reliable WebRTC DataChannel.
// PeerJS 'raw' serialization avoids a second, unbounded chunking layer.
const MAGIC=0x4a4f4e53,VERSION=1,HEADER=24,CHUNK=16*1024;
const encoder=new TextEncoder(),decoder=new TextDecoder('utf-8',{fatal:true});
export type PeerWireFailure='protocol'|'capacity'|'timeout'|'transport';
/** Retry only transient channel conditions, never malformed peer data. */
export class PeerWireError extends Error {
  readonly closeCode:1002|1013;
  readonly recoverable:boolean;
  constructor(readonly category:PeerWireFailure,message:string){
    super(message);this.name='PeerWireError';this.recoverable=category!=='protocol';this.closeCode=this.recoverable?1013:1002;
  }
}
export interface PeerWireOptions {
  send(data:ArrayBuffer):void;
  bufferedAmount():number;
  onMessage(message:unknown):void;
  onError(error:PeerWireError):void;
  maxIncomingBytes?:number;
  maxOutgoingBytes?:number;
  maxQueuedBytes?:number;
  compression?:boolean;
  timeoutMs?:number;
}
interface Assembly {id:number;codec:number;rawLength:number;length:number;count:number;next:number;bytes:Uint8Array;timer:ReturnType<typeof setTimeout>}
async function transform(bytes:Uint8Array,compress:boolean,max:number):Promise<Uint8Array>{
  const stream=new Blob([bytes.slice().buffer]).stream().pipeThrough(compress?new CompressionStream('deflate'):new DecompressionStream('deflate'));
  const reader=stream.getReader(),parts:Uint8Array[]=[];let length=0;
  try{while(true){const {value,done}=await reader.read();if(done)break;length+=value.byteLength;if(length>max)throw new Error('Peer message exceeds its decompressed size limit.');parts.push(value);}}
  catch(error){await reader.cancel().catch(()=>{});throw error;}
  const out=new Uint8Array(length);let offset=0;for(const part of parts){out.set(part,offset);offset+=part.length;}return out;
}
/** No game state or network replacement lives here; only actual message framing. */
export class PeerWire {
  private outgoing:Uint8Array[]=[];
  private queuedBytes=0;
  private sending=false;
  private receiving=false;
  private decoding:{bytes:Uint8Array;codec:number;rawLength:number}[]=[];
  private decodingBytes=0;
  private assembly:Assembly|null=null;
  private nextSend=1;
  private nextReceive=1;
  private closed=false;
  private readonly maxIncoming:number;
  private readonly maxOutgoing:number;
  private readonly maxQueued:number;
  private readonly timeout:number;
  constructor(private readonly options:PeerWireOptions){
    this.maxIncoming=options.maxIncomingBytes??4*1024*1024;this.maxOutgoing=options.maxOutgoingBytes??4*1024*1024;this.maxQueued=options.maxQueuedBytes??8*1024*1024;this.timeout=options.timeoutMs??15000;
  }
  get pendingBytes(){return this.queuedBytes;}
  get disposed(){return this.closed;}
  send(message:unknown):void{
    if(this.closed)throw new Error('Peer channel is closed.');
    const text=JSON.stringify(message);
    if(!text||text.length>this.maxOutgoing){this.fail(new Error('Peer message is too large.'));return;}
    const bytes=encoder.encode(text);
    if(bytes.length>this.maxOutgoing){this.fail(new Error('Peer message is too large.'));return;}
    if(this.queuedBytes+bytes.length>this.maxQueued||this.outgoing.length>=128){this.fail(new PeerWireError('capacity','Peer connection cannot keep up with the game. Reconnecting to resume.'));return;}
    this.outgoing.push(bytes);this.queuedBytes+=bytes.length;void this.pumpSend();
  }
  private async pumpSend(){
    if(this.sending||this.closed)return;this.sending=true;
    try{
      while(this.outgoing.length&&!this.closed){
        const raw=this.outgoing[0];let bytes=raw,codec=0;
        if(raw.length>=512&&this.options.compression!==false&&typeof CompressionStream!=='undefined'){
          const compressed=await transform(raw,true,this.maxOutgoing+Math.ceil(this.maxOutgoing/100)+1024);if(compressed.length<raw.length){bytes=compressed;codec=1;}
        }
        const count=Math.ceil(bytes.length/CHUNK),id=this.nextSend++;
        if(id>0xffffffff)throw new PeerWireError('capacity','Peer sequence exhausted. Reconnecting to resume.');
        for(let chunk=0;chunk<count&&!this.closed;chunk++){
          const started=Date.now();
          while(this.options.bufferedAmount()>256*1024&&!this.closed){if(Date.now()-started>this.timeout)throw new PeerWireError('timeout','Peer connection is too slow. Reconnecting to resume.');await new Promise(resolve=>setTimeout(resolve,8));}
          if(this.closed)break;
          const payload=bytes.subarray(chunk*CHUNK,Math.min(bytes.length,(chunk+1)*CHUNK)),packet=new ArrayBuffer(HEADER+payload.length),view=new DataView(packet);
          view.setUint32(0,MAGIC);view.setUint8(4,VERSION);view.setUint8(5,codec);view.setUint16(6,0);view.setUint32(8,id);view.setUint32(12,bytes.length);view.setUint32(16,raw.length);view.setUint16(20,chunk);view.setUint16(22,count);new Uint8Array(packet,HEADER).set(payload);
          try{this.options.send(packet);}catch{throw new PeerWireError('transport','Peer channel could not send. Reconnecting to resume.');}
        }
        if(!this.closed){this.outgoing.shift();this.queuedBytes-=raw.length;}
      }
    }catch(error){this.fail(error);}finally{this.sending=false;}
  }
  receive(packet:unknown):void{
    if(this.closed)return;
    try{
      const bytes=packet instanceof ArrayBuffer?new Uint8Array(packet):ArrayBuffer.isView(packet)?new Uint8Array(packet.buffer,packet.byteOffset,packet.byteLength):null;
      if(!bytes||bytes.length<=HEADER||bytes.length>HEADER+CHUNK)throw new Error('Invalid peer packet size.');
      const v=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
      if(v.getUint32(0)!==MAGIC||v.getUint8(4)!==VERSION||v.getUint16(6)!==0)throw new Error('Incompatible peer wire protocol.');
      const codec=v.getUint8(5),id=v.getUint32(8),length=v.getUint32(12),rawLength=v.getUint32(16),index=v.getUint16(20),count=v.getUint16(22);
      if(codec>1||!length||!rawLength||length>this.maxIncoming||rawLength>this.maxIncoming||count!==Math.ceil(length/CHUNK)||index>=count||id!==this.nextReceive||codec===0&&rawLength!==length)throw new Error('Invalid peer message envelope.');
      if(!this.assembly){
        if(index!==0)throw new Error('Peer chunks arrived out of order.');
        if(this.decodingBytes+rawLength>this.maxQueued||this.decoding.length>=128)throw new PeerWireError('capacity','Peer receive queue is full. Reconnecting to resume.');
        const timer=setTimeout(()=>this.fail(new PeerWireError('timeout','Incomplete peer message timed out. Reconnecting to resume.')),this.timeout);
        this.assembly={id,codec,rawLength,length,count,next:0,bytes:new Uint8Array(length),timer};
      }
      const a=this.assembly;
      if(index!==a.next||a.id!==id||a.codec!==codec||a.length!==length||a.rawLength!==rawLength||a.count!==count||bytes.length-HEADER!==Math.min(CHUNK,length-index*CHUNK))throw new Error('Peer chunks arrived out of order or changed size.');
      a.bytes.set(bytes.subarray(HEADER),index*CHUNK);a.next++;
      if(a.next===a.count){clearTimeout(a.timer);this.assembly=null;this.nextReceive++;this.decoding.push({bytes:a.bytes,codec:a.codec,rawLength:a.rawLength});this.decodingBytes+=a.rawLength;void this.pumpReceive();}
    }catch(error){this.fail(error);}
  }
  private async pumpReceive(){
    if(this.receiving||this.closed)return;this.receiving=true;
    try{while(this.decoding.length&&!this.closed){
      const data=this.decoding[0];
      if(data.codec===1&&typeof DecompressionStream==='undefined')throw new Error('This browser cannot decode compressed peer messages.');
      const bytes=data.codec?await transform(data.bytes,false,data.rawLength):data.bytes;
      if(bytes.length!==data.rawLength)throw new Error('Peer message length does not match its envelope.');
      const message=JSON.parse(decoder.decode(bytes));
      if(!message||typeof message!=='object'||Array.isArray(message))throw new Error('Invalid peer game message.');
      if(!this.closed){this.decoding.shift();this.decodingBytes-=data.rawLength;this.options.onMessage(message);}
    }}catch(error){this.fail(error);}finally{this.receiving=false;}
  }
  private fail(error:unknown){if(this.closed)return;this.dispose();this.options.onError(error instanceof PeerWireError?error:new PeerWireError('protocol',error instanceof Error?error.message:String(error)));}
  dispose(){this.closed=true;if(this.assembly)clearTimeout(this.assembly.timer);this.assembly=null;this.outgoing=[];this.decoding=[];this.queuedBytes=0;this.decodingBytes=0;}
}
