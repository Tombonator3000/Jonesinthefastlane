// SPDX-License-Identifier: GPL-3.0-or-later
// Real original game + two real WebSocket clients. No gameplay state mutation.
import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { WebSocket } from 'ws';
import { createNativeSession, type NativeSession } from '../native/session.js';
import { createMultiplayerServer } from '../native/network/server.js';
import type { GameInput, ServerMessage } from '../native/network/types.js';

type StateMessage = Extract<ServerMessage, {type:'state'|'snapshot'}>;
type FrameMessage = Extract<ServerMessage, {type:'frame'|'snapshot'}>;
type Joined = Extract<ServerMessage, {type:'joined'}>;
class OriginalPeer {
  messages: ServerMessage[] = [];
  latestState: StateMessage | null = null;
  latestFrame: FrameMessage | null = null;
  seq = 0;
  private requestId = 0;
  private listeners = new Set<()=>void>();
  constructor(readonly socket:WebSocket) {
    socket.on('message', data=>{
      const message=JSON.parse(data.toString()) as ServerMessage;
      this.messages.push(message);
      if(this.messages.length>400)this.messages.splice(0,this.messages.length-400);
      if(message.type==='state'||message.type==='snapshot')this.latestState=message;
      if(message.type==='frame'||message.type==='snapshot')this.latestFrame=message;
      for(const notify of [...this.listeners])notify();
    });
  }
  summary() {
    const s=this.latestState?.state as any;
    return {tick:this.latestState?.tick,owner:this.latestState?.inputOwner,dialog:s?.dialog,
      player:s?.currentPlayer,week:s?.week,trace:s?.trace,error:s?.error,
      recent:this.messages.slice(-5).map(m=>({type:m.type,...(m.type==='error'?{code:m.code,message:m.message}:{})}))};
  }
  wait(predicate:(m:ServerMessage)=>boolean,label:string,timeout=15_000):Promise<ServerMessage> {
    return new Promise((resolve,reject)=>{
      const check=()=>{
        const failure=(this.latestState?.state as any)?.error;
        if(failure){clearTimeout(timer);this.listeners.delete(check);reject(new Error(`Native runtime failed: ${JSON.stringify(this.summary())}`));return;}
        const message=this.messages.find(predicate);
        if(message){clearTimeout(timer);this.listeners.delete(check);resolve(message);}
      };
      const timer=setTimeout(()=>{this.listeners.delete(check);reject(new Error(`Timed out: ${label}: ${JSON.stringify(this.summary())}`));},timeout);
      this.listeners.add(check);check();
    });
  }
  request(message:object) {
    const requestId=String(++this.requestId);
    this.socket.send(JSON.stringify({...message,requestId}));
    return this.wait(m=>'requestId'in m&&m.requestId===requestId,`reply ${requestId}`);
  }
  input(input:GameInput) {return this.request({type:'input',seq:++this.seq,input});}
  async ticks(count:number) {
    const target=(this.latestState?.tick??0)+count;
    await this.wait(m=>(m.type==='state'||m.type==='snapshot')&&m.tick>=target,`${count} authoritative ticks`);
  }
}
const frameHash=(m:FrameMessage)=>createHash('sha256').update(JSON.stringify(m.frame)).digest('hex');

test('original two-player online setup, full human turn, seat handoff and reconnect', {timeout:120_000}, async t=>{
  const manifest=JSON.parse(readFileSync(new URL('../native/public/assets/manifest.json',import.meta.url),'utf8'));
  let session:NativeSession;
  const failures:unknown[]=[],milestones:object[]=[];
  const server=createMultiplayerServer({assetManifest:manifest,createSession:options=>session=createNativeSession(options),onRuntimeError:error=>failures.push(error)});
  const address=await server.listen(0);assert(address&&typeof address==='object');
  t.after(()=>server.close());
  const connect=async()=>{const socket=new WebSocket(`ws://127.0.0.1:${address.port}/multiplayer`);const p=new OriginalPeer(socket);await once(socket,'open');return p;};
  const host=await connect(),guest=await connect();
  const created=await host.request({type:'create',playerCount:2}) as Joined;
  assert.equal(created.type,'joined');
  const joined=await guest.request({type:'join',roomId:created.roomId,joinToken:created.joinToken}) as Joined;
  assert.equal(joined.type,'joined');assert.equal(joined.seat,1);
  assert.equal((await host.request({type:'start'})).type,'started');
  const state=()=>host.latestState?.state as any;
  async function until(label:string,predicate:(s:any,owner:number|null)=>boolean,after=-1,timeout=20_000) {
    const message=await host.wait(m=>(m.type==='state'||m.type==='snapshot')&&m.tick>after&&predicate(m.state,m.inputOwner),label,timeout) as StateMessage;
    milestones.push({label,tick:message.tick,owner:message.inputOwner,dialog:(message.state as any).dialog,player:(message.state as any).currentPlayer});
    return message;
  }
  async function shared(label:string) {
    const h=host.latestFrame!;assert(h,'Original game frame exists');
    const g=await guest.wait(m=>(m.type==='frame'||m.type==='snapshot')&&m.tick===h.tick&&m.revision===h.revision,`${label}: same guest frame`) as FrameMessage;
    assert.deepEqual(g.frame,h.frame,`${label}: both real sockets must receive identical original pixels, palette and cursor`);
    const hs=host.latestState!;
    const gs=await guest.wait(m=>(m.type==='state'||m.type==='snapshot')&&m.tick===hs.tick&&m.revision===hs.revision,`${label}: same guest state`) as StateMessage;
    assert.deepEqual(gs.state,hs.state);assert.equal(gs.inputOwner,hs.inputOwner);
    assert.equal(Buffer.from((h.frame as any).pixels,'base64').length,320*200);
    milestones.push({label,frameTick:h.tick,frameSha256:frameHash(h),stateTick:hs.tick});
  }
  async function click(peer:OriginalPeer,x:number,y:number,settle=14) {
    for(const action of ['move','down'] as const){const result=await peer.input({type:'pointer',action,x,y,button:0});assert.equal(result.type,'ack',JSON.stringify({result,state:peer.summary()}));}
    await host.ticks(5);
    const released=await peer.input({type:'pointer',action:'up',x,y,button:0});
    // The original Done control can hand control to the next seat on button down.
    assert(released.type==='ack'||released.type==='error'&&released.code==='not_your_turn');
    await host.ticks(settle);
  }
  async function key(peer:OriginalPeer,key:string,settle=14) {
    assert.equal((await peer.input({type:'key',action:'down',key})).type,'ack');
    await host.ticks(2);
    const released=await peer.input({type:'key',action:'up',key});
    assert(released.type==='ack'||released.type==='error'&&released.code==='not_your_turn');
    await host.ticks(settle);
  }
  await until('original copyright',s=>s.trace?.includes('764:noticeRoom.init'));
  // Both the original copyright and title screens can wait for a separate
  // input. Use an area outside the subsequent menu's actionable buttons.
  for(let count=0;count<8&&state()?.dialog!=='select1';count++)await click(host,160,35,50);
  await until('original main menu',s=>s.dialog==='select1');
  await shared('original menu');
  assert.equal((await guest.input({type:'key',action:'down',key:'Enter'}) as any).code,'not_your_turn');
  await click(host,160,70);
  await until('original player count',s=>s.dialog==='select1b');
  await click(host,140,110);
  await until('first original character choice',(s,owner)=>s.dialog==='select2'&&owner===0);
  assert.equal(session!.runtime.global(374),2,'The original menu, not a test hook, selected two players');
  await click(host,84,156);
  await until('first original goals',(s,owner)=>s.dialog==='select3'&&owner===0);
  // A burst authorized during player 1's goals must not leak queued keypresses
  // into player 2's character screen after the first event transfers ownership.
  assert.equal((await host.input({type:'pointer',action:'move',x:224,y:156,button:0})).type,'ack');
  const burst=await Promise.all([
    host.input({type:'pointer',action:'down',x:224,y:156,button:0}),
    host.input({type:'pointer',action:'up',x:224,y:156,button:0}),
    ...Array.from({length:3},()=>host.input({type:'key',action:'down',key:'Enter'})),
  ]);
  assert(burst.every(m=>m.type==='ack'||m.type==='error'&&m.code==='not_your_turn'));
  await host.ticks(20);
  assert.equal(state().dialog,'select2','Queued previous-seat inputs must not advance the new seat character screen');
  assert.equal(Number(host.latestState?.inputOwner),1);
  await until('second original character choice',(s,owner)=>s.dialog==='select2'&&owner===1);
  assert.equal((await host.input({type:'key',action:'down',key:'Enter'}) as any).code,'not_your_turn');
  await click(guest,135,156);
  await until('second original goals',(s,owner)=>s.dialog==='select3'&&owner===1);
  await shared('second player setup');
  await click(guest,224,156);
  const first=await until('first human turn',(s,owner)=>s.currentPlayer==='player1'&&!s.dialog&&owner===0);
  await host.ticks(45);
  assert.equal(session!.runtime.get(session!.runtime.object(1,'player1'),'whichBody'),0);
  assert.equal(session!.runtime.get(session!.runtime.object(1,'player2'),'whichBody'),1);
  assert.equal(session!.runtime.get(session!.runtime.object(1,'player2'),'playing'),1,'The second player is a human, not Jones AI');
  await shared('first human turn');
  assert.equal((await guest.input({type:'pointer',action:'down',x:160,y:25,button:0}) as any).code,'not_your_turn');
  await click(host,160,25);
  await until('original home dialog',s=>s.dialog==='lowcost');
  await host.ticks(110);
  for(let count=0;count<16&&session!.runtime.global(323)<60;count++)await click(host,94,156,80);
  assert.equal(session!.runtime.global(323),60,'Original Relax actions must consume the full first turn');
  await key(host,'Enter');
  if(state().dialog==='lowcost'&&host.latestState?.inputOwner===0)await click(host,224,156,90);
  if(state().dialog==='lowcost'&&host.latestState?.inputOwner===0)await click(host,224,156,90);
  const second=await until('second human owns next turn',(s,owner)=>s.currentPlayer==='player2'&&!s.dialog&&owner===1,first.tick,30_000);
  assert.equal((second.state as any).week,(first.state as any).week,'Two humans take turns within the original week');
  await shared('second human turn');
  assert.equal((await host.input({type:'key',action:'down',key:'Enter'}) as any).code,'not_your_turn');
  guest.socket.close();await once(guest.socket,'close');
  await host.wait(m=>m.type==='room'&&!m.room.seats[1].connected,'guest disconnected');
  const returned=await connect();
  const resumed=await returned.request({type:'resume',roomId:created.roomId,sessionToken:joined.sessionToken}) as Joined;
  assert.equal(resumed.type,'joined');assert.equal(resumed.seat,1);assert.equal(resumed.sessionToken,joined.sessionToken);
  const snapshot=await returned.wait(m=>m.type==='snapshot','reconnected original snapshot') as Extract<ServerMessage,{type:'snapshot'}>;
  assert.equal(snapshot.inputOwner,1);assert.equal((snapshot.state as any).currentPlayer,'player2');
  assert.deepEqual(snapshot.frame,host.latestFrame!.frame,'A reconnect receives the live original frame without replaying setup');
  const sameTick=await host.wait(m=>m.type==='state'&&m.tick===snapshot.tick,'host state at reconnect tick') as StateMessage;
  assert.deepEqual(snapshot.state,sameTick.state,'Reconnect and existing player receive the same authoritative state');
  returned.seq=resumed.lastInputSeq;
  await click(returned,160,25);
  await until('reconnected player uses original controls',(s,owner)=>s.currentPlayer==='player2'&&s.dialog==='lowcost'&&owner===1,snapshot.tick);
  assert.equal(session!.error,null);assert.deepEqual(failures,[]);
  t.diagnostic(JSON.stringify({seed:session!.runtime.seed,milestones,reconnectedSeat:resumed.seat,originalClock:session!.runtime.global(323)}));
});
