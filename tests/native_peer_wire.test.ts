// SPDX-License-Identifier: GPL-3.0-or-later
import test from 'node:test';
import assert from 'node:assert/strict';
import { setTimeout as delay } from 'node:timers/promises';
import { deflateSync } from 'node:zlib';
import { PeerWire, PeerWireError } from '../native/network/peer-wire.js';
import { BrowserNetworkClient, type ClientTransportEvents } from '../native/network/client.js';

async function until(check:()=>boolean){for(let i=0;i<400;i++){if(check())return;await delay(5);}assert.fail('Expected peer result did not arrive.');}
function receiver(options:Partial<ConstructorParameters<typeof PeerWire>[0]>={}){
  const messages:unknown[]=[],errors:PeerWireError[]=[];
  const wire=new PeerWire({send:()=>{},bufferedAmount:()=>0,onMessage:message=>messages.push(message),onError:error=>errors.push(error),...options});
  return {wire,messages,errors};
}
function envelope(payload:Uint8Array,rawLength=payload.length,codec=0,id=1,index=0,count=Math.ceil(payload.length/16384)){
  const packet=new ArrayBuffer(24+payload.length),v=new DataView(packet);v.setUint32(0,0x4a4f4e53);v.setUint8(4,1);v.setUint8(5,codec);v.setUint32(8,id);v.setUint32(12,payload.length);v.setUint32(16,rawLength);v.setUint16(20,index);v.setUint16(22,count);new Uint8Array(packet,24).set(payload);return packet;
}

test('90 KB original-sized frames are compressed and delivered with following state in order',async t=>{
  const target=receiver(),packets:ArrayBuffer[]=[],errors:Error[]=[];
  const sender=new PeerWire({send:packet=>{packets.push(packet);target.wire.receive(packet);},bufferedAmount:()=>0,onMessage:()=>{},onError:error=>errors.push(error)});
  t.after(()=>{sender.dispose();target.wire.dispose();});
  const frame={type:'frame',revision:4,frame:{pixels:'AAEE'.repeat(22000),palette:Array.from({length:768},(_,i)=>i%256)}};
  const state={type:'state',revision:4,state:{activeSeat:1}};
  sender.send(frame);sender.send(state);
  await until(()=>target.messages.length===2||!!errors.length||!!target.errors.length);
  assert.deepEqual(errors,[]);assert.deepEqual(target.errors,[]);assert.deepEqual(target.messages,[frame,state]);
  assert(packets.every(packet=>packet.byteLength<=16384+24));assert.equal(new DataView(packets[0]).getUint8(5),1);
  assert(packets.reduce((n,p)=>n+p.byteLength,0)<JSON.stringify(frame).length/10,'Real deflate reduces pixel traffic.');
  assert.equal(sender.pendingBytes,0);
});

test('uncompressed multi-chunk messages preserve exact Unicode and ordered chunk sequence',async t=>{
  const target=receiver(),packets:ArrayBuffer[]=[],errors:Error[]=[];
  const sender=new PeerWire({compression:false,send:packet=>{packets.push(packet);target.wire.receive(new Uint8Array(packet));},bufferedAmount:()=>0,onMessage:()=>{},onError:error=>errors.push(error)});
  t.after(()=>{sender.dispose();target.wire.dispose();});
  const message={frame:'Jones ÆØÅ 🎮 '.repeat(8000)};sender.send(message);
  await until(()=>target.messages.length===1||!!errors.length);
  assert.deepEqual(errors,[]);assert.deepEqual(target.errors,[]);assert.deepEqual(target.messages,[message]);assert(packets.length>5);
  packets.forEach((packet,i)=>{const v=new DataView(packet);assert.equal(v.getUint8(5),0);assert.equal(v.getUint16(20),i);assert.equal(v.getUint16(22),packets.length);});
});

test('wire rejects altered protocol, replay, oversized declaration and out-of-order chunks before delivery',()=>{
  for(const mutate of [(v:DataView)=>v.setUint32(0,0),(v:DataView)=>v.setUint8(4,2),(v:DataView)=>v.setUint8(5,9),(v:DataView)=>v.setUint32(16,8*1024*1024),(v:DataView)=>v.setUint32(8,2),(v:DataView)=>v.setUint16(20,1)]){
    const target=receiver(),packet=envelope(new TextEncoder().encode('{"type":"frame"}'));mutate(new DataView(packet));target.wire.receive(packet);
    assert.equal(target.errors.length,1);assert.equal(target.errors[0].category,'protocol');assert.equal(target.errors[0].closeCode,1002);assert.equal(target.errors[0].recoverable,false);assert.equal(target.messages.length,0);assert.equal(target.wire.disposed,true);
  }
  const target=receiver(),packet=envelope(new TextEncoder().encode('{"ok":true}'));target.wire.receive(packet);target.wire.receive(packet);
  assert.equal(target.messages.length,1);assert.equal(target.errors.length,1);
});

test('incomplete bounded message times out and does not retain partial chunks',async()=>{
  const target=receiver({timeoutMs:20});
  const packet=envelope(new Uint8Array(16384));const v=new DataView(packet);v.setUint32(12,20000);v.setUint32(16,20000);v.setUint16(22,2);
  target.wire.receive(packet);assert.equal(target.errors.length,0);await until(()=>!!target.errors.length);
  assert.match(target.errors[0].message,/timed out/);assert.equal(target.errors[0].category,'timeout');assert.equal(target.errors[0].closeCode,1013);assert.equal(target.wire.disposed,true);assert.deepEqual(target.messages,[]);
});

test('compressed payload cannot exceed declared decompressed size or deliver malformed JSON',async()=>{
  const target=receiver(),bomb=deflateSync(JSON.stringify({value:'A'.repeat(40000)}));target.wire.receive(envelope(bomb,100,1));
  await until(()=>!!target.errors.length);assert.match(target.errors[0].message,/decompressed size limit/);assert.deepEqual(target.messages,[]);
  for(const invalid of ['not JSON','[]','null','"text"']){const other=receiver();other.wire.receive(envelope(new TextEncoder().encode(invalid)));assert.equal(other.errors.length,1);assert.deepEqual(other.messages,[]);}
});

test('backpressure bounds queued bytes and times out stalled data channels',async()=>{
  const target=receiver({compression:false,bufferedAmount:()=>300000,maxQueuedBytes:1000,timeoutMs:20});target.wire.send({value:'a'.repeat(900)});assert(target.wire.pendingBytes<1000);target.wire.send({value:'b'.repeat(900)});
  assert.equal(target.errors.length,1);assert.equal(target.errors[0].category,'capacity');assert.equal(target.errors[0].closeCode,1013);assert.equal(target.wire.pendingBytes,0);assert.equal(target.wire.disposed,true);
  const stalled=receiver({compression:false,bufferedAmount:()=>300000,timeoutMs:20});stalled.wire.send({value:1});await until(()=>!!stalled.errors.length);assert.match(stalled.errors[0].message,/too slow/);assert.equal(stalled.errors[0].category,'timeout');assert.equal(stalled.errors[0].closeCode,1013);
});

test('disposal suppresses pending compressed deliveries',async()=>{
  const target=receiver();target.wire.receive(envelope(deflateSync(JSON.stringify({large:'x'.repeat(20000)})),20012,1));target.wire.dispose();await delay(30);assert.deepEqual(target.messages,[]);assert.deepEqual(target.errors,[]);
});

test('shared browser client validates decoded peer messages and treats host closure as terminal',async t=>{
  let events:ClientTransportEvents;let attempts=0,opened=false;const errors:string[]=[];
  const client=new BrowserNetworkClient({transportFactory:handlers=>{events=handlers;attempts++;queueMicrotask(()=>{opened=true;handlers.open();});return {get open(){return opened;},send:()=>{},close:(code,reason)=>{opened=false;queueMicrotask(()=>handlers.close(code??1000,reason??''));}};},onError:error=>errors.push(error.code)});
  t.after(()=>client.disconnect());await client.connect();
  events!.message({type:'joined',roomId:'room',seat:0,sessionToken:'private',joinToken:'shared',lastInputSeq:0,room:{roomId:'room',playerCount:1,status:'running',inputOwner:0,seats:[{seat:0,connected:true}]}});
  assert.equal(client.canInput,true);events!.close(4002,'The host closed this game.');await delay(600);assert.equal(attempts,1);assert.equal(client.canInput,false);assert(errors.includes('host_closed'));
  client.credentials=null;await client.connect();events!.message({type:'snapshot',revision:-1,tick:0,inputOwner:0,frame:{},state:{}});await delay(5);assert(errors.includes('invalid_server_message'));
});

// This fixture checks the client's real retry/credential logic, not game rules.
test('transient wire failure retries the same private seat but malformed data stays terminal',async t=>{
  let active:ClientTransportEvents,attempts=0;const statuses:string[]=[],resumes:unknown[]=[];
  const credentials={roomId:'saved-room',seat:1,sessionToken:'private-seat',joinToken:'shared-invite',lastInputSeq:7};
  const room={roomId:'saved-room',playerCount:2,status:'running',inputOwner:1,seats:[{seat:0,connected:true},{seat:1,connected:true}]};
  const client=new BrowserNetworkClient({credentials,onStatus:status=>statuses.push(status),transportFactory:events=>{
    active=events;attempts++;let open=true;queueMicrotask(()=>events.open());
    return {get open(){return open;},send:message=>{resumes.push(message);queueMicrotask(()=>events.message({type:'joined',...credentials,room,requestId:message.requestId}));},close:(code,reason)=>{open=false;queueMicrotask(()=>events.close(code??1000,reason??''));}};
  }});
  t.after(()=>client.disconnect());await client.connect();assert.equal(client.canInput,true);
  const blocked=receiver({compression:false,bufferedAmount:()=>300000,maxQueuedBytes:80,onError:error=>active.close(error.closeCode,error.message)});t.after(()=>blocked.wire.dispose());
  blocked.wire.send({value:'a'.repeat(50)});blocked.wire.send({value:'b'.repeat(50)});assert.equal(client.canInput,false);
  await until(()=>attempts===2&&client.canInput);assert(statuses.includes('reconnecting'));assert.equal(resumes.length,2);
  assert(resumes.every((message:any)=>message.type==='resume'&&message.roomId===credentials.roomId&&message.sessionToken===credentials.sessionToken));assert.deepEqual(client.credentials,credentials);
  const malformed=receiver({onError:error=>active.close(error.closeCode,error.message)});malformed.wire.receive(new ArrayBuffer(1));
  await delay(650);assert.equal(attempts,2,'Invalid peer protocol must not enter a retry loop.');assert.equal(client.canInput,false);
});
