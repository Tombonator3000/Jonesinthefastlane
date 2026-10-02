// SPDX-License-Identifier: GPL-3.0-or-later
// Original UI inputs only: four players, original F9 Restart, then two/three.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { setImmediate } from 'node:timers/promises';
import { createNativeSession } from '../native/session.js';

test('original four-, two- and three-player setup survives two F9 restarts and exits through original Quit', {timeout:120_000}, async t=>{
  const manifest=JSON.parse(readFileSync(new URL('../native/public/assets/manifest.json',import.meta.url),'utf8'));
  let publishedFinished=false;
  const session=createNativeSession({seed:13,playerCount:4,assetManifest:manifest,onFrame(){},onState(state){if((state as any).finished)publishedFinished=true;}});
  t.after(()=>session.stop());
  const state=()=>session.getState() as any;
  const history:any[]=[];let ticks=0;
  const detail=()=>JSON.stringify({state:state(),owner:session.inputOwner(),history});
  async function step(n=1){for(let i=0;i<n;i++){if(++ticks>60_000)assert.fail(detail());session.tick();await setImmediate();if(session.error)assert.fail(detail());}}
  async function until(label:string,predicate:()=>boolean,limit=6000){
    for(let i=0;i<limit;i++){if(predicate()){const{week,currentPlayer,cash,dialog}=state();history.push({label,ticks,week,currentPlayer,cash,dialog});return;}await step();}
    assert.fail(`Timed out waiting for ${label}: ${detail()}`);
  }
  const dialog=(name:string)=>state().dialog===name&&session.runtime.trace.some(x=>x.endsWith('.doit'));
  async function click(x:number,y:number){
    session.handleInput({type:'pointer',action:'move',x,y,button:0});await step(2);
    session.handleInput({type:'pointer',action:'down',x,y,button:0});await step(6);
    session.handleInput({type:'pointer',action:'up',x,y,button:0});await step(16);
  }
  async function key(key:string,settle=20){
    session.handleInput({type:'key',action:'down',key});await step();
    session.handleInput({type:'key',action:'up',key});await step(settle);
  }
  session.start();
  await until('copyright',()=>session.runtime.trace.includes('764:noticeRoom.init'));
  await key('Enter',120);
  const counts=[4,2,3];
  for(const count of counts){
    await until(`main menu before ${count} players`,()=>dialog('select1'));
    assert.equal(session.runtime.menus.length,4,'Restart recreates the original four menus without retaining prior copies');
    await click(160,70);await until('player-count menu',()=>dialog('select1b'));
    await click(95+40*(count-1),110);
    for(let i=0;i<count;i++){
      await until(`character ${i+1} of ${count}`,()=>dialog('select2'));
      assert.equal(session.inputOwner(),i,'Original setup selection owns the matching human seat');
      await click(84+46*i,156);
      await until(`goals ${i+1} of ${count}`,()=>dialog('select3'));
      assert.equal(session.inputOwner(),i);
      await click(224,156);
    }
    await until(`${count} players begin original game`,()=>state().currentPlayer==='player1'&&!state().dialog&&session.inputOwner()===0,8000);
    const players=session.runtime.objects.get('1:players')!;
    assert.equal(players.props.size,count);
    assert.equal(session.runtime.global(374),count);
    for(let i=1;i<=count;i++){
      const p=session.runtime.objects.get(`1:player${i}`)!;
      assert.equal(p.props.playing,1);assert.equal(p.props.cash,200);
    }
    if(count!==counts.at(-1)){
      await key('F9',60);
      await until('original Restarting confirmation',()=>session.runtime.trace.includes('997:MenuBar.handleEvent')&&session.runtime.trace.some(x=>x==='255:Dialog.doit'));
      const oldSoundIds=new Set([...session.runtime.soundState.keys()].filter(id=>id>=0));
      assert.ok(oldSoundIds.size>0,'The original game has sound services to replace');
      // Leave genuine input held while confirming the original restart.
      session.handleInput({type:'key',action:'down',key:'Control'});
      session.handleInput({type:'pointer',action:'down',x:319,y:199,button:0});
      await key('Enter',90);
      await until('original restart returns to menu',()=>dialog('select1'));
      assert.equal(state().currentPlayer,null,'Restart must discard the prior player selection');
      assert.equal(state().week,1);
      assert.equal(session.runtime.modifiers,0);assert.equal(session.runtime.pointer.down,false);
      const freshSounds=[...session.runtime.soundState.entries()].filter(([id])=>id>=0);
      assert.ok(freshSounds.length>0,'The original new menu has initialized fresh sounds');
      for(const [id,sound] of freshSounds){
        assert.equal(oldSoundIds.has(id),false,'No pre-restart sound may continue playing');
        assert.equal(session.runtime.heap.get(id),sound.obj,'Sound services refer to fresh live objects');
      }
      assert.ok(freshSounds.filter(([,sound])=>sound.obj.name==='aSong'&&sound.playing).length<=1,
        'Restart must not overlay the prior music loop with the new one');
    }
  }
  assert.equal(state().finished,false);
  session.handleInput({type:'key',action:'down',key:'Control'});
  await key('q',60);
  session.handleInput({type:'key',action:'up',key:'Control'});
  await until('original Quitting confirmation',()=>session.runtime.trace.includes('997:MenuBar.handleEvent')&&session.runtime.trace.includes('255:Dialog.doit'));
  assert.equal(state().finished,false,'Opening the original prompt must not quit before confirmation');
  await key('Enter',60);await until('original Quit completes',()=>state().finished===true);
  assert.equal(publishedFinished,true,'The host must receive the normal completion notification');
  assert.equal(session.runtime.stopped,true);assert.equal(session.inputOwner(),null);
  assert.deepEqual(state().audio.sounds,[],'Quit must release every active sound');
  assert.equal(session.error,null);
  t.diagnostic(JSON.stringify({ticks,playerCounts:counts,restarts:2,week:state().week,quit:true}));
});

test('online room rejects mismatched original player choices when consumed, while preserving navigation and confirmations', {timeout:60_000}, async t=>{
  const manifest=JSON.parse(readFileSync(new URL('../native/public/assets/manifest.json',import.meta.url),'utf8'));
  const session=createNativeSession({seed:13,playerCount:2,enforceRoomPlayerCount:true,assetManifest:manifest,onFrame(){},onState(){}});
  t.after(()=>session.stop());
  const state=()=>session.getState() as any;
  let ticks=0;
  async function step(n=1){for(let i=0;i<n;i++){assert.ok(++ticks<12000,JSON.stringify(state()));session.tick();await setImmediate();assert.equal(session.error,null,JSON.stringify(state()));}}
  async function until(predicate:()=>boolean){for(let i=0;i<3000;i++){if(predicate())return;await step();}assert.fail(JSON.stringify(state()));}
  const dialog=(name:string)=>state().dialog===name&&session.runtime.trace.some(x=>x.endsWith('.doit'));
  async function click(x:number,y:number){
    session.handleInput({type:'pointer',action:'move',x,y,button:0});await step(2);
    session.handleInput({type:'pointer',action:'down',x,y,button:0});await step(6);
    session.handleInput({type:'pointer',action:'up',x,y,button:0});await step(16);
  }
  async function key(key:string,settle=20){session.handleInput({type:'key',action:'down',key});await step();session.handleInput({type:'key',action:'up',key});await step(settle);}
  session.start();await until(()=>session.runtime.trace.includes('764:noticeRoom.init'));await key('Enter',120);
  await until(()=>dialog('select1'));await click(160,70);await until(()=>dialog('select1b'));
  // Both pointer selection and the original default keyboard choice are wrong
  // for a two-seat room. Neither is allowed to alter original global374.
  const originalCount=session.runtime.global(374);
  await click(175,110);
  assert.equal(state().dialog,'select1b');assert.equal(session.runtime.global(374),originalCount);
  assert.match(state().connectionNotice,/2 players.*Choose 2/);
  await key('Enter');
  assert.equal(state().dialog,'select1b');assert.equal(session.runtime.global(374),originalCount);
  assert.equal(session.inputOwner(),0);
  // The host must still be able to confirm the original F9 prompt above the
  // count dialog, even though the underlying selected number is disallowed.
  await key('F9',60);await until(()=>session.runtime.trace.includes('255:Dialog.doit'));
  await key('Enter',90);await until(()=>dialog('select1'));
  assert.equal(session.runtime.menus.length,4);assert.equal(state().connectionNotice,null);
  // These keys arrive while the main menu is still current. The second is
  // consumed only after the original count screen opens and must be checked
  // against that screen, not authorized using the earlier main-menu state.
  session.handleInput({type:'key',action:'down',key:'Enter'});
  session.handleInput({type:'key',action:'down',key:'Enter'});
  session.handleInput({type:'key',action:'up',key:'Enter'});
  await until(()=>dialog('select1b'));await step(40);
  assert.equal(state().dialog,'select1b');assert.match(state().connectionNotice,/Choose 2/);
  await click(175,110);assert.equal(state().dialog,'select1b');
  // Tab moves the original KeyMouse focus to two; Enter selects that same
  // original button. No player count is assigned by the host policy.
  await key('Tab');await key('Enter');await until(()=>dialog('select2'));
  assert.equal(session.runtime.global(374),2);assert.equal(state().connectionNotice,null);
  assert.equal(session.inputOwner(),0);
});

test('Jones victory acknowledgement belongs to the host, while ordinary Jones turns remain blocked', t=>{
  const manifest=JSON.parse(readFileSync(new URL('../native/public/assets/manifest.json',import.meta.url),'utf8'));
  const session=createNativeSession({seed:1,playerCount:1,enforceRoomPlayerCount:true,assetManifest:manifest,onFrame(){},onState(){}});
  t.after(()=>session.stop());
  // This fixture checks authorization only, not a simulated winning journey.
  // winnerScript234 sets global536 while playing29 remains current, and its
  // state2 animation waits for a human event before it can finish.
  const rt=session.runtime,player=rt.object(1,'player2');
  rt.set(player,'playing',29);rt.setGlobal(302,player);
  assert.equal(session.inputOwner(),null);
  rt.setGlobal(536,1);assert.equal(session.inputOwner(),0);
  rt.setGlobal(536,0);assert.equal(session.inputOwner(),null);
});
