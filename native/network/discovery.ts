// SPDX-License-Identifier: GPL-3.0-or-later
// Optional public announcements only. Game state and private seat tokens never enter MQTT.
import mqtt, { type MqttClient, type IClientOptions } from 'mqtt';
import { version as gameVersion } from '../../package.json';

export const PUBLIC_BROKER='wss://broker.hivemq.com:8884/mqtt';
export const ROOM_TOPIC='jones-in-fast-lane/v1';
export const ROOM_TTL_MS=90000,ROOM_RENEW_MS=30000,MAX_LISTINGS=100,MAX_LISTING_BYTES=2048;
export const GAME_VERSION=gameVersion;
export interface PublicRoom {
  version:string;roomId:string;hostPeerId:string;joinToken:string;name:string;
  players:number;capacity:number;status:'waiting';scope:string;updatedAt:number;
}
export type RoomAnnouncement=Omit<PublicRoom,'version'|'updatedAt'>;
export type DiscoveryStatus={state:'connecting'|'ready'|'unavailable';message:string};
export interface DiscoveryOptions {brokerUrl?:string;scope?:string;onStatus?:(status:DiscoveryStatus)=>void}
const enc=new TextEncoder(),dec=new TextDecoder('utf-8',{fatal:true});
const keys=['version','roomId','hostPeerId','joinToken','name','players','capacity','status','scope','updatedAt'];
const token=(v:unknown,n:number)=>typeof v==='string'&&new RegExp(`^[A-Za-z0-9_-]{${n}}$`).test(v);
const text=(v:unknown,max:number)=>typeof v==='string'&&v.length>0&&v.length<=max&&v===v.trim()&&!/[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/u.test(v);
export function validateBrokerUrl(value=PUBLIC_BROKER){
  const url=new URL(value);if(!['ws:','wss:'].includes(url.protocol)||url.username||url.password||url.hash)throw new Error('Use a ws:// or wss:// public-lobby broker address without credentials.');return url.href;
}
/** Scope custom signaling deployments separately; listings cannot redirect connections. */
export function discoveryScope(signal='',ice=''){return signal?JSON.stringify([new URL(signal).href,ice]):'peerjs-cloud';}
export function parsePublicRoom(topic:string,payload:Uint8Array|string,now=Date.now(),scope='peerjs-cloud'):PublicRoom|null {
  try{
    if(typeof payload==='string'?enc.encode(payload).length>MAX_LISTING_BYTES:payload.byteLength>MAX_LISTING_BYTES)return null;
    const v=JSON.parse(typeof payload==='string'?payload:dec.decode(payload));
    if(!v||typeof v!=='object'||Array.isArray(v)||Object.keys(v).length!==keys.length||!Object.keys(v).every(k=>keys.includes(k)))return null;
    if(v.version!==GAME_VERSION||!token(v.roomId,16)||!token(v.joinToken,32)||typeof v.hostPeerId!=='string'||!/^[A-Za-z0-9_-]{1,128}$/.test(v.hostPeerId)||!text(v.name,48)||!text(v.scope,256)||v.scope!==scope)return null;
    if(v.status!=='waiting'||![1,2,3,4].includes(v.capacity)||!Number.isInteger(v.players)||v.players<1||v.players>=v.capacity)return null;
    if(!Number.isSafeInteger(v.updatedAt)||v.updatedAt>now+15000||now-v.updatedAt>=ROOM_TTL_MS||topic!==`${ROOM_TOPIC}/${v.roomId}`)return null;
    return {version:v.version,roomId:v.roomId,hostPeerId:v.hostPeerId,joinToken:v.joinToken,name:v.name,players:v.players,capacity:v.capacity,status:'waiting',scope:v.scope,updatedAt:v.updatedAt};
  }catch{return null;}
}
export class PublicRoomIndex {
  private rooms=new Map<string,PublicRoom>();
  constructor(readonly scope='peerjs-cloud'){}
  receive(topic:string,payload:Uint8Array|string,now=Date.now()){
    this.prune(now);
    if(payload.length===0){const id=topic.slice(ROOM_TOPIC.length+1);if(topic===`${ROOM_TOPIC}/${id}`&&token(id,16))this.rooms.delete(id);return;}
    const room=parsePublicRoom(topic,payload,now,this.scope);if(!room)return;
    const old=this.rooms.get(room.roomId);if(old&&old.updatedAt>room.updatedAt)return;
    if(!old&&this.rooms.size>=MAX_LISTINGS)return;
    this.rooms.set(room.roomId,room);
  }
  prune(now=Date.now()){for(const [id,room]of this.rooms)if(now-room.updatedAt>=ROOM_TTL_MS)this.rooms.delete(id);}
  values(now=Date.now()){this.prune(now);return [...this.rooms.values()].sort((a,b)=>a.name.localeCompare(b.name)||a.roomId.localeCompare(b.roomId));}
  clear(){this.rooms.clear();}
}
function options(extra:Partial<IClientOptions>={}):IClientOptions {
  return {protocolVersion:4,clientId:`jones-${crypto.randomUUID()}`,clean:true,connectTimeout:8000,reconnectPeriod:5000,keepalive:20,queueQoSZero:false,...extra};
}
const unavailable:DiscoveryStatus={state:'unavailable',message:'Public room list unavailable. You can still create a private game or use an invitation.'};
function end(client:MqttClient){client.end(true);}
export class PublicRoomBrowser {
  private client:MqttClient|null=null;
  private pruneTimer:ReturnType<typeof setInterval>|null=null;
  private connectTimer:ReturnType<typeof setTimeout>|null=null;
  private visibleSignature='';
  readonly index:PublicRoomIndex;
  constructor(private readonly settings:DiscoveryOptions&{onRooms:(rooms:PublicRoom[])=>void}){this.index=new PublicRoomIndex(settings.scope);}
  private notifyRooms(){
    const rooms=this.index.values();
    // Renewal changes expiry, not what a player sees. Keep focused UI rows stable.
    const signature=JSON.stringify(rooms.map(({updatedAt,...visible})=>visible));
    if(signature!==this.visibleSignature){this.visibleSignature=signature;this.settings.onRooms(rooms);}
  }
  refresh(){
    this.close();this.visibleSignature='[]';this.settings.onRooms([]);this.settings.onStatus?.({state:'connecting',message:'Finding public games…'});
    let client:MqttClient;
    try{client=mqtt.connect(validateBrokerUrl(this.settings.brokerUrl),options());}catch{this.settings.onStatus?.(unavailable);return;}
    this.client=client;
    this.connectTimer=setTimeout(()=>{if(this.client===client)this.settings.onStatus?.(unavailable);},8500);
    client.on('connect',()=>{
      if(this.client!==client)return;
      client.subscribe(`${ROOM_TOPIC}/+`,{qos:1},error=>{
        if(this.client!==client)return;
        if(this.connectTimer)clearTimeout(this.connectTimer);this.connectTimer=null;
        this.settings.onStatus?.(error?unavailable:{state:'ready',message:'Public rooms are shared by players. Availability is best effort.'});
      });
    });
    let windowAt=Date.now(),messages=0;
    client.on('message',(topic,payload)=>{
      if(this.client!==client)return;
      const now=Date.now();if(now-windowAt>=1000){windowAt=now;messages=0;}if(++messages>300)return;
      this.index.receive(topic,payload,now);this.notifyRooms();
    });
    for(const event of ['error','offline','close']as const)client.on(event,()=>{if(this.client===client)this.settings.onStatus?.(unavailable);});
    this.pruneTimer=setInterval(()=>this.notifyRooms(),1000);
  }
  close(){
    const client=this.client;this.client=null;if(client)end(client);
    if(this.pruneTimer)clearInterval(this.pruneTimer);this.pruneTimer=null;
    if(this.connectTimer)clearTimeout(this.connectTimer);this.connectTimer=null;this.index.clear();
  }
}
export class PublicRoomAnnouncer {
  private client:MqttClient|null=null;
  private current:RoomAnnouncement|null=null;
  private renewTimer:ReturnType<typeof setInterval>|null=null;
  private timeout:ReturnType<typeof setTimeout>|null=null;
  constructor(private readonly settings:DiscoveryOptions={}){}
  update(room:RoomAnnouncement){
    // Explicitly copy the public allowlist. Credentials can never be serialized wholesale.
    const safe:PublicRoom={version:GAME_VERSION,roomId:room.roomId,hostPeerId:room.hostPeerId,joinToken:room.joinToken,name:room.name.trim(),players:room.players,capacity:room.capacity,status:room.status,scope:room.scope,updatedAt:Date.now()};
    if(!parsePublicRoom(`${ROOM_TOPIC}/${safe.roomId}`,JSON.stringify(safe),Date.now(),this.settings.scope)){this.stop();return;}
    if(this.current?.roomId!==safe.roomId)this.stop();
    this.current=safe;
    if(this.client){this.publish();return;}
    const topic=`${ROOM_TOPIC}/${safe.roomId}`;
    this.settings.onStatus?.({state:'connecting',message:'Publishing public room…'});
    let client:MqttClient;
    try{client=mqtt.connect(validateBrokerUrl(this.settings.brokerUrl),options({will:{topic,payload:'',qos:1,retain:true}}));}catch{this.settings.onStatus?.(unavailable);return;}
    this.client=client;
    this.timeout=setTimeout(()=>{if(this.client===client)this.settings.onStatus?.(unavailable);},8500);
    client.on('connect',()=>{if(this.client===client)this.publish();});
    for(const event of ['error','offline','close']as const)client.on(event,()=>{if(this.client===client)this.settings.onStatus?.(unavailable);});
    this.renewTimer=setInterval(()=>this.publish(),ROOM_RENEW_MS);
  }
  private publish(){
    const client=this.client,room=this.current;if(!client?.connected||!room)return;
    client.publish(`${ROOM_TOPIC}/${room.roomId}`,JSON.stringify({...room,updatedAt:Date.now()}),{qos:1,retain:true},error=>{
      if(this.client!==client)return;if(this.timeout)clearTimeout(this.timeout);this.timeout=null;
      this.settings.onStatus?.(error?unavailable:{state:'ready',message:'Your room is public. Anyone can find and join its free seats.'});
    });
  }
  stop(){
    const client=this.client,room=this.current;this.client=null;this.current=null;
    if(this.renewTimer)clearInterval(this.renewTimer);this.renewTimer=null;if(this.timeout)clearTimeout(this.timeout);this.timeout=null;
    if(!client)return;
    if(client.connected&&room){const force=setTimeout(()=>end(client),1500);client.publish(`${ROOM_TOPIC}/${room.roomId}`,'',{retain:true,qos:1},()=>{clearTimeout(force);client.end(false);});}
    else end(client); // Broker Last Will clears retained metadata after abnormal loss.
  }
}
