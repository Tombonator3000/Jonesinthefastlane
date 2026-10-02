// SPDX-License-Identifier: GPL-3.0-or-later
import test from 'node:test';
import assert from 'node:assert/strict';
import { setTimeout as delay } from 'node:timers/promises';
import { NetworkInputProducer } from '../native/network/input-producer.js';
import { BrowserNetworkClient } from '../native/network/client.js';
import { PeerWire } from '../native/network/peer-wire.js';
import type { ClientMessage, GameInput, ServerMessage } from '../native/network/types.js';

const move=(x:number,y=20):GameInput=>({type:'pointer',action:'move',x,y,button:0});
async function until(check:()=>boolean){for(let n=0;n<600;n++){if(check())return;await delay(5);}assert.fail('Expected input acknowledgment did not arrive.');}
function controlled(){
  let allowed=true;const sent:GameInput[]=[],errors:unknown[]=[],pending:{resolve:()=>void;reject:(error:unknown)=>void}[]=[];
  const producer=new NetworkInputProducer({canInput:()=>allowed,onError:error=>errors.push(error),sendInput:input=>{sent.push(input);return new Promise<void>((resolve,reject)=>pending.push({resolve,reject}));}});
  return {producer,sent,errors,pending,allow(value:boolean){allowed=value;}};
}

test('MOVE waits for its actual acknowledgment; latest position precedes each click/key barrier',async t=>{
  const p=controlled();t.after(()=>p.producer.dispose());
  p.producer.send(move(1));await until(()=>p.sent.length===1);
  p.producer.send(move(2));p.producer.send(move(3));await delay(25);
  assert.deepEqual(p.sent,[move(1)],'Unsent movement must not allocate another request.');
  const down:GameInput={type:'pointer',action:'down',x:3,y:20,button:0};p.producer.send(down);
  assert.deepEqual(p.sent,[move(1),move(3),down]);
  p.producer.send(move(4));p.pending[0].resolve();await delay(25);
  assert.equal(p.sent.length,3,'The barrier-flushed MOVE still has an outstanding ACK.');
  const key:GameInput={type:'key',action:'down',key:'Enter'};p.producer.send(key);
  const up:GameInput={type:'pointer',action:'up',x:4,y:20,button:0};p.producer.send(up);
  assert.deepEqual(p.sent,[move(1),move(3),down,move(4),key,up]);
  p.producer.send(move(5));p.producer.send(move(6));p.pending[1].resolve();await delay(25);assert.equal(p.sent.length,6);
  p.pending[3].resolve();await until(()=>p.sent.length===7);assert.deepEqual(p.sent[6],move(6));
  assert.deepEqual(p.errors,[]);
});

test('ownership reset and teardown discard pending moves and ignore stale ACKs/errors',async t=>{
  const p=controlled();t.after(()=>p.producer.dispose());p.producer.send(move(1));await until(()=>p.sent.length===1);
  p.producer.send(move(2));p.allow(false);p.producer.reset();p.allow(true);p.producer.send(move(3));await until(()=>p.sent.length===2);
  p.producer.send(move(4));p.pending[0].resolve();await delay(25);
  assert.deepEqual(p.sent,[move(1),move(3)],'Old generation ACK cannot release the new generation MOVE.');
  p.pending[1].resolve();await until(()=>p.sent.length===3);assert.deepEqual(p.sent[2],move(4));
  p.producer.send(move(5));p.producer.dispose();p.pending[2].reject(new Error('Old connection closed.'));await delay(25);
  assert.deepEqual(p.sent,[move(1),move(3),move(4)]);assert.deepEqual(p.errors,[]);
  p.producer.send(move(6));await delay(25);assert.equal(p.sent.length,3);
});

test('lost ownership at delivery and failed requests cannot replay deferred movement',async t=>{
  const p=controlled();t.after(()=>p.producer.dispose());p.producer.send(move(1));p.allow(false);await delay(25);assert.deepEqual(p.sent,[]);
  p.allow(true);p.producer.send(move(2));await until(()=>p.sent.length===1);p.producer.send(move(3));
  const failure=new Error('Link closed.');p.pending[0].reject(failure);await delay(25);assert.deepEqual(p.errors,[failure]);assert.deepEqual(p.sent,[move(2)]);
  p.producer.send(move(4));await until(()=>p.sent.length===2);p.producer.send(move(5));p.allow(false);p.pending[1].resolve();await delay(25);
  p.allow(true);await delay(25);assert.deepEqual(p.sent,[move(2),move(4)]);
});

test('real client and wire stay bounded at200ms RTT under180 moves at60Hz and deliver exact final position',async t=>{
  const errors:unknown[]=[],received:GameInput[]=[],requests:ClientMessage[]=[],timers=new Set<ReturnType<typeof setTimeout>>();
  const outstanding=new Set<string>();let peakOutstanding=0,peakQueued=0,guest!:PeerWire,host!:PeerWire;
  const later=(fn:()=>void)=>{const timer=setTimeout(()=>{timers.delete(timer);fn();},100);timers.add(timer);};
  const room={roomId:'latency-room',playerCount:1 as const,status:'running' as const,seats:[{seat:0,connected:true}],inputOwner:0};
  host=new PeerWire({compression:false,bufferedAmount:()=>0,send:packet=>later(()=>guest.receive(packet)),onError:error=>errors.push(error),onMessage:raw=>{
    const message=raw as ClientMessage;requests.push(message);
    if(message.type==='create')host.send({type:'joined',roomId:room.roomId,seat:0,sessionToken:'private',joinToken:'shared',lastInputSeq:0,room,requestId:message.requestId});
    else if(message.type==='input'){received.push(message.input);host.send({type:'ack',seq:message.seq,tick:message.seq,requestId:message.requestId});}
    else assert.fail('Unexpected latency fixture command.');
  }});
  const client=new BrowserNetworkClient({autoReconnect:false,onError:error=>errors.push(error),transportFactory:events=>{
    let open=true;
    guest=new PeerWire({compression:false,maxOutgoingBytes:4096,bufferedAmount:()=>0,send:packet=>later(()=>host.receive(packet)),onError:error=>errors.push(error),onMessage:raw=>{
      const message=raw as ServerMessage;if('requestId'in message&&message.requestId)outstanding.delete(message.requestId);events.message(message);
    }});
    queueMicrotask(()=>events.open());
    return {get open(){return open;},send:message=>{
      if(message.type==='input'){outstanding.add(message.requestId!);peakOutstanding=Math.max(peakOutstanding,outstanding.size);}
      guest.send(message);peakQueued=Math.max(peakQueued,guest.pendingBytes);
    },close:(code,reason)=>{open=false;guest.dispose();queueMicrotask(()=>events.close(code??1000,reason??''));}};
  }});
  const producer=new NetworkInputProducer({canInput:()=>client.canInput,sendInput:input=>client.sendInput(input),onError:error=>errors.push(error)});
  t.after(()=>{producer.dispose();client.disconnect();guest.dispose();host.dispose();for(const timer of timers)clearTimeout(timer);});
  await client.createRoom(1);
  for(let n=0;n<180;n++){producer.send(move(n,40));await delay(1000/60);}
  await until(()=>received.at(-1)?.type==='pointer'&&(received.at(-1) as any).x===179&&outstanding.size===0);
  const inputs=requests.filter((message):message is Extract<ClientMessage,{type:'input'}>=>message.type==='input');
  assert.deepEqual(errors,[]);assert.equal(peakOutstanding,1,'Hover must allocate only one unacknowledged request.');
  assert(peakQueued<4096,`Small input traffic must stay bounded, got${peakQueued} bytes.`);
  assert(inputs.length>1&&inputs.length<90,'Continuous motion must coalesce before wire/request allocation.');
  assert.deepEqual(received.at(-1),move(179,40));assert.deepEqual(inputs.map(message=>message.seq),inputs.map((_,i)=>i+1));
  assert.equal(client.credentials?.lastInputSeq,inputs.length,'Every issued input retains its protocol ACK.');
  assert.equal(guest.disposed,false);assert.equal(host.disposed,false);
  t.diagnostic(JSON.stringify({offeredMoves:180,issuedRequests:inputs.length,receivedInputs:received.length,peakOutstanding,peakQueuedBytes:peakQueued,finalPoint:received.at(-1)}));
});
