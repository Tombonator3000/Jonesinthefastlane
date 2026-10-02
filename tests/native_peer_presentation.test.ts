// SPDX-License-Identifier: GPL-3.0-or-later
import test from 'node:test';
import assert from 'node:assert/strict';
import { setTimeout as delay } from 'node:timers/promises';
import { PeerWire, type PeerWireError } from '../native/network/peer-wire.js';
import { PeerPresentationSender } from '../native/network/peer-presentation.js';
import type { ServerMessage, Serializable } from '../native/network/types.js';

async function until(check:()=>boolean){for(let n=0;n<600;n++){if(check())return;await delay(5);}assert.fail('Expected bounded peer delivery did not finish.');}
const room={roomId:'test-room',playerCount:2 as const,status:'running' as const,seats:[{seat:0,connected:true},{seat:1,connected:true}],inputOwner:0};
function delayedPair(){
  let release!:()=>void;const firstDelivery=new Promise<void>(resolve=>{release=resolve;});
  const messages:ServerMessage[]=[],errors:PeerWireError[]=[],packets:ArrayBuffer[]=[];
  const sender=new PeerWire({send:p=>{packets.push(p);receiver.receive(p);},bufferedAmount:()=>0,onMessage:()=>{},onError:e=>errors.push(e)});
  const receiver=new PeerWire({send:p=>sender.receive(p),bufferedAmount:()=>0,onMessage:async message=>{messages.push(message as ServerMessage);if(messages.length===1)await firstDelivery;},onError:e=>errors.push(e)});
  const presentation=new PeerPresentationSender(sender);
  return {sender,receiver,presentation,messages,errors,packets,release,dispose(){presentation.dispose();sender.dispose();receiver.dispose();release();}};
}
function snapshot(tick:number,frame:Serializable,state:Serializable,inputOwner:number|null=0):ServerMessage&{type:'snapshot'}{return {type:'snapshot',tick,revision:tick,frame,state,inputOwner};}

test('HD-size compressed bursts keep only complete superseded presentations and preserve every control barrier',async t=>{
  const pair=delayedPair();t.after(()=>pair.dispose());
  // Each frame is over 600 KB before compression. The offered burst exceeds
  // the unchanged 8 MiB queue many times, while actual delivery is blocked.
  const image={pixels:'ABAA'.repeat(22000),hd:{owners:'AAAA'.repeat(130000),ops:[{kind:'text',text:'Deposit',glyphs:[{x:1,y:2,background:0}]}]}};
  const frame=(tick:number)=>({...image,revision:tick});
  const initial=snapshot(0,frame(0),{week:1});pair.presentation.send(initial);
  await until(()=>pair.messages.length===1);
  const controls:ServerMessage[]=[{type:'ack',seq:1,tick:16,requestId:'input-1'},{type:'room',room},{type:'error',code:'not_your_turn',message:'Wait.',requestId:'input-2'}];
  let peak=0;
  for(let tick=1;tick<=64;tick++){
    pair.presentation.send({type:'frame',tick,revision:tick,frame:frame(tick)});
    pair.presentation.send({type:'state',tick,revision:tick,state:{week:1,tick},inputOwner:tick<32?0:1});
    await Promise.resolve(); // Different actual authority commits/tasks.
    if(tick===16||tick===32||tick===48)pair.presentation.send(controls[tick/16-1]);
    peak=Math.max(peak,pair.sender.pendingBytes);
  }
  assert.deepEqual(pair.errors,[]);assert.equal(pair.messages.length,1,'No second message before rendered delivery credit.');
  assert(peak<4*1024*1024,`Retained bytes must stay bounded by the five barrier-separated frames, got ${peak}.`);
  pair.release();await until(()=>pair.messages.length===8&&pair.sender.pendingBytes===0||pair.errors.length>0);
  assert.deepEqual(pair.errors,[]);
  assert.deepEqual(pair.messages,[initial,snapshot(16,frame(16),{week:1,tick:16}),controls[0],snapshot(32,frame(32),{week:1,tick:32},1),controls[1],snapshot(48,frame(48),{week:1,tick:48},1),controls[2],snapshot(64,frame(64),{week:1,tick:64},1)]);
  assert(pair.packets.filter(p=>new DataView(p).getUint8(5)!==2).reduce((bytes,p)=>bytes+p.byteLength,0)<100000,'Exercise highly compressed messages, not only raw byte backpressure.');
});

test('partial commits, catch-up commits, joined/room/started and ACK retain exact ordering and paired values',async t=>{
  const pair=delayedPair();t.after(()=>pair.dispose());
  const joined:ServerMessage={type:'joined',roomId:room.roomId,seat:1,sessionToken:'private',joinToken:'shared',lastInputSeq:0,room};
  pair.presentation.send(joined);await until(()=>pair.messages.length===1);
  const initial=snapshot(1,{image:'first'},{screen:'first'});pair.presentation.send(initial);pair.presentation.send({type:'room',room});
  // Catch-up ticks share a task; only the complete newest presentation remains.
  pair.presentation.send({type:'frame',tick:2,revision:2,frame:{image:'second'}});
  pair.presentation.send({type:'state',tick:2,revision:2,state:{screen:'second'},inputOwner:0});
  pair.presentation.send({type:'frame',tick:3,revision:3,frame:{image:'third'}});
  pair.presentation.send({type:'started',requestId:'start'});
  pair.presentation.send({type:'state',tick:4,revision:4,state:{screen:'fourth'},inputOwner:1});
  const ack:ServerMessage={type:'ack',seq:2,tick:4,requestId:'key'};pair.presentation.send(ack);
  pair.presentation.send({type:'frame',tick:5,revision:5,frame:{image:'fifth'}});
  pair.presentation.send({type:'state',tick:5,revision:5,state:{screen:'fifth'},inputOwner:1});
  await Promise.resolve();pair.release();await until(()=>pair.messages.length===8&&pair.sender.pendingBytes===0||pair.errors.length>0);
  assert.deepEqual(pair.errors,[]);
  assert.deepEqual(pair.messages,[joined,initial,{type:'room',room},snapshot(3,{image:'third'},{screen:'second'}),{type:'started',requestId:'start'},snapshot(4,{image:'third'},{screen:'fourth'},1),ack,snapshot(5,{image:'fifth'},{screen:'fifth'},1)]);
});

test('many control barriers remain bounded and cannot silently discard input acknowledgments',async t=>{
  const pair=delayedPair();t.after(()=>pair.dispose());pair.presentation.send(snapshot(0,{},{}));await until(()=>pair.messages.length===1);
  for(let tick=1;tick<200&&!pair.sender.disposed;tick++){
    pair.presentation.send({type:'state',tick,revision:tick,state:{tick},inputOwner:0});
    pair.presentation.send({type:'ack',seq:tick,tick,requestId:String(tick)});
  }
  assert.equal(pair.errors.length,1);assert.equal(pair.errors[0].category,'capacity');assert.equal(pair.errors[0].closeCode,1013);assert.equal(pair.sender.pendingBytes,0);
});

test('disposal cancels a staged presentation without sending after teardown',async t=>{
  const pair=delayedPair();t.after(()=>pair.dispose());pair.presentation.send(snapshot(0,{},{}));pair.presentation.dispose();await Promise.resolve();
  assert.deepEqual(pair.messages,[]);assert.equal(pair.sender.pendingBytes,0);assert.deepEqual(pair.errors,[]);
});
