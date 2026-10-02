// SPDX-License-Identifier: GPL-3.0-or-later
// Transport fixtures test authority/security behavior, not Jones game rules.
import test, { type TestContext } from 'node:test';
import assert from 'node:assert/strict';
import { setTimeout as delay } from 'node:timers/promises';
import { createRoomAuthority, type RoomAuthority, type RoomAuthorityOptions } from '../native/network/authority.js';
import type { GameInput, ServerMessage, SessionOptions, SessionRuntime } from '../native/network/types.js';

class Fixture implements SessionRuntime {
  owner=0;ticks=0;stopped=false;inputs:GameInput[]=[];
  constructor(readonly options:SessionOptions){}
  start(){}
  tick(){this.ticks++;}
  stop(){this.stopped=true;}
  inputOwner(){return this.owner;}
  getFrame(){return {serial:this.inputs.length,owner:this.owner};}
  getState(){return {inputs:this.inputs.length,owner:this.owner};}
  handleInput(input:GameInput){
    if(input.type==='key'&&input.key==='!')throw new Error('Deliberate runtime failure');
    this.inputs.push(input);
    if(input.type==='key'&&input.key==='Enter')this.owner=(this.owner+1)%this.options.playerCount;
    this.options.onFrame(this.getFrame());this.options.onState(this.getState());
  }
}
class Peer {
  messages:ServerMessage[]=[];closed:{code:number;reason:string}[]=[];sequence=0;
  constructor(readonly authority:RoomAuthority,readonly id:string){
    authority.connect({id,send:message=>this.messages.push(structuredClone(message)),close:(code,reason)=>{
      this.closed.push({code,reason});authority.disconnect(id);
    }});
    assert.deepEqual(this.messages[0],{type:'welcome',protocol:1},'Welcome is synchronous');
  }
  async wait(predicate:(message:ServerMessage)=>boolean){
    for(let i=0;i<200;i++){const found=this.messages.find(predicate);if(found)return found;await delay(5);}
    assert.fail(`Missing authority message: ${JSON.stringify(this.messages)}`);
  }
  async request(message:object){
    const requestId=String(++this.sequence);
    await this.authority.receive(this.id,{...message,requestId});
    return this.wait(m=>'requestId' in m&&m.requestId===requestId);
  }
}
function setup(t:TestContext,options:Partial<RoomAuthorityOptions>={}){
  const runtimes:Fixture[]=[],errors:unknown[]=[];
  const authority=createRoomAuthority({createSession:opts=>{const rt=new Fixture(opts);runtimes.push(rt);return rt;},onRuntimeError:error=>errors.push(error),...options});
  t.after(()=>authority.close());let ids=0;
  return {authority,runtimes,errors,peer:()=>new Peer(authority,String(++ids))};
}
const key=(key:string):GameInput=>({type:'key',action:'down',key});
type Joined=Extract<ServerMessage,{type:'joined'}>;

test('authority preserves private credentials, one-to-four seats, explicit host start and identical snapshots',async t=>{
  const {authority,peer,runtimes}=setup(t,{maxRooms:1});
  const host=peer(),guest=peer(),stranger=peer();
  for(const playerCount of [0,5,'2',null])assert.equal((await host.request({type:'create',playerCount}) as any).code,'invalid_player_count');
  const room=await host.request({type:'create',playerCount:2}) as Joined;
  assert.equal(authority.roomCount,1);assert.equal(runtimes.length,0);
  assert.match(room.roomId,/^[A-Za-z0-9_-]{16}$/);assert.match(room.sessionToken,/^[A-Za-z0-9_-]{43}$/);assert.match(room.joinToken,/^[A-Za-z0-9_-]{32}$/);
  assert.equal((await stranger.request({type:'create',playerCount:1}) as any).code,'server_full');
  assert.equal((await host.request({type:'start'}) as any).code,'players_missing');
  assert.equal((await guest.request({type:'join',roomId:room.roomId,joinToken:'wrong'}) as any).code,'invalid_invitation');
  const joined=await guest.request({type:'join',roomId:room.roomId,joinToken:room.joinToken}) as Joined;
  assert.equal(joined.seat,1);assert.notEqual(joined.sessionToken,room.sessionToken);
  assert.equal((await stranger.request({type:'join',roomId:room.roomId,joinToken:room.joinToken}) as any).code,'room_full');
  assert.equal((await guest.request({type:'start'}) as any).code,'host_only');
  assert.equal((await host.request({type:'start'})).type,'started');
  assert.deepEqual(await host.wait(m=>m.type==='snapshot'),await guest.wait(m=>m.type==='snapshot'));
  assert.equal(runtimes[0].options.playerCount,2);assert.ok(Number.isInteger(runtimes[0].options.seed));
  const publicMessages=[...host.messages,...guest.messages].filter(m=>m.type==='room'||m.type==='snapshot');
  const publicText=JSON.stringify(publicMessages);
  assert.ok(!publicText.includes(room.sessionToken)&&!publicText.includes(joined.sessionToken)&&!publicText.includes(room.joinToken));
});

test('queued input is copied, validated and rechecked when authority changes in the same tick',async t=>{
  const {authority,peer,runtimes}=setup(t);const host=peer(),guest=peer();
  const room=await host.request({type:'create',playerCount:2}) as Joined;
  await guest.request({type:'join',roomId:room.roomId,joinToken:room.joinToken});await host.request({type:'start'});
  assert.equal((await guest.request({type:'input',seq:1,input:key('a')}) as any).code,'not_your_turn');
  assert.equal((await host.request({type:'input',seq:1,input:{...key('a'),cash:999}}) as any).code,'invalid_input');
  assert.equal((await host.request({type:'input',seq:1,input:{type:'pointer',action:'down',x:320,y:0,button:0}}) as any).code,'invalid_input');
  const first={type:'input',seq:1,input:key('Enter'),requestId:'queued1'};
  const pending=authority.receive(host.id,first);(first.input as any).key='changed';await pending;
  await authority.receive(host.id,{type:'input',seq:2,input:key('b'),requestId:'queued2'});
  assert.equal((await host.wait(m=>'requestId' in m&&m.requestId==='queued1')).type,'ack');
  assert.equal((await host.wait(m=>'requestId' in m&&m.requestId==='queued2') as any).code,'not_your_turn');
  assert.deepEqual(runtimes[0].inputs,[key('Enter')]);
  await guest.request({type:'input',seq:1,input:key('c')});
  assert.equal((await guest.request({type:'input',seq:1,input:key('d')}) as any).code,'invalid_input');
  const frame=await host.wait(m=>m.type==='frame'&&(m.frame as any).serial===2);
  assert.deepEqual(await guest.wait(m=>m.type==='frame'&&(m.frame as any).serial===2),frame);
});

test('private seat takeover revokes the old connection immediately and resumes the committed snapshot and sequence',async t=>{
  const {authority,peer,runtimes}=setup(t);const host=peer(),other=peer();
  const room=await host.request({type:'create',playerCount:1}) as Joined;await host.request({type:'start'});
  await host.request({type:'input',seq:1,input:key('a')});
  assert.equal((await other.request({type:'resume',roomId:room.roomId,sessionToken:room.joinToken}) as any).code,'invalid_session');
  const resumed=await other.request({type:'resume',roomId:room.roomId,sessionToken:room.sessionToken}) as Joined;
  assert.equal(resumed.seat,0);assert.equal(resumed.lastInputSeq,1);assert.equal(resumed.sessionToken,room.sessionToken);
  assert.equal(host.closed[0].code,4001);
  await authority.receive(host.id,{type:'input',seq:999,input:key('old')});
  authority.disconnect(host.id); // A delayed close event cannot detach the replacement.
  const snapshot=await other.wait(m=>m.type==='snapshot') as Extract<ServerMessage,{type:'snapshot'}>;
  assert.deepEqual(snapshot.frame,runtimes[0].getFrame());assert.equal(snapshot.inputOwner,0);
  assert.equal((await other.request({type:'input',seq:1,input:key('duplicate')}) as any).code,'invalid_input');
  assert.equal((await other.request({type:'input',seq:2,input:key('b')})).type,'ack');
  assert.deepEqual(runtimes[0].inputs,[key('a'),key('b')]);
});

test('authority rejects malformed and oversized UTF-8 JSON and caps each connection at 180 messages per second',async t=>{
  const {authority,peer}=setup(t);const malformed=peer();
  for(const raw of [undefined,null,[],true,'json text']){
    const before=malformed.messages.length;await authority.receive(malformed.id,raw);
    assert.equal((malformed.messages[before] as any).code,'invalid_message');
  }
  const cyclic:any={};cyclic.self=cyclic;await authority.receive(malformed.id,cyclic);
  assert.equal((malformed.messages.at(-1) as any).code,'invalid_message');
  const unicode=peer();await authority.receive(unicode.id,{type:'unknown',padding:'é'.repeat(2048)});
  assert.equal(unicode.closed[0].code,1009,'Limit counts UTF-8 bytes rather than string characters');
  await authority.receive(unicode.id,{type:'create',playerCount:1});assert.equal(authority.roomCount,0);
  const rate=peer();
  for(let i=0;i<180;i++)await authority.receive(rate.id,{type:'unknown'});
  assert.equal(rate.closed.length,0);await authority.receive(rate.id,{type:'unknown'});
  assert.equal(rate.closed[0].code,1008);await authority.receive(rate.id,{type:'create',playerCount:1});assert.equal(authority.roomCount,0);
});

test('empty rooms pause and resume their runtime, then expire and release it after the reconnect window',async t=>{
  const {authority,peer,runtimes}=setup(t,{reconnectWindowMs:100});const host=peer();
  const room=await host.request({type:'create',playerCount:1}) as Joined;await host.request({type:'start'});await delay(25);
  authority.disconnect(host.id);const before=runtimes[0].ticks;await delay(35);
  assert.equal(runtimes[0].ticks,before);assert.equal(authority.roomCount,1);
  const resumed=peer();await resumed.request({type:'resume',roomId:room.roomId,sessionToken:room.sessionToken});await delay(30);
  assert.ok(runtimes[0].ticks>before);authority.disconnect(resumed.id);await delay(135);
  assert.equal(authority.roomCount,0);assert.equal(runtimes[0].stopped,true);
  assert.equal((await peer().request({type:'resume',roomId:room.roomId,sessionToken:room.sessionToken}) as any).code,'room_unavailable');
});

test('runtime failure closes its peers, releases its room and cannot be resumed',async t=>{
  const {authority,peer,runtimes,errors}=setup(t);const host=peer();
  const room=await host.request({type:'create',playerCount:1}) as Joined;await host.request({type:'start'});
  await authority.receive(host.id,{type:'input',seq:1,input:key('!')});
  await host.wait(m=>m.type==='error'&&m.code==='runtime_failed');
  assert.equal(host.closed[0].code,1011);assert.equal(authority.roomCount,0);assert.equal(runtimes[0].stopped,true);assert.equal(errors.length,1);
  assert.equal((await peer().request({type:'resume',roomId:room.roomId,sessionToken:room.sessionToken}) as any).code,'room_unavailable');
});

test('closing during asynchronous session creation stops the late runtime without reviving its room',async t=>{
  let resolveSession!:(runtime:SessionRuntime)=>void;let settings!:SessionOptions;
  const {authority,peer}=setup(t,{createSession:options=>{settings=options;return new Promise(resolve=>{resolveSession=resolve;});}});
  const host=peer();await host.request({type:'create',playerCount:1});
  const pending=authority.receive(host.id,{type:'start'});assert.ok(resolveSession);
  authority.close();authority.close();const late=new Fixture(settings);resolveSession(late);await pending;
  assert.equal(late.stopped,true);assert.equal(authority.roomCount,0);assert.equal(host.closed[0].code,1001);
  assert.ok(!host.messages.some(m=>m.type==='started'));
});
