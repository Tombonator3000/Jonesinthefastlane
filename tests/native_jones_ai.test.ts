// SPDX-License-Identifier: GPL-3.0-or-later
// End-to-end original-input-only journey: no gameplay state or rule mutation.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { setImmediate } from 'node:timers/promises';
import { createNativeSession } from '../native/session.js';

test('original one-player Challenge Jones setup and two complete human/AI turns', {timeout:120_000}, async t => {
  const manifest=JSON.parse(readFileSync(new URL('../native/public/assets/manifest.json',import.meta.url),'utf8'));
  const session=createNativeSession({seed:1,playerCount:1,assetManifest:manifest,onFrame(){},onState(){}});
  t.after(()=>session.stop());
  let ticks=0,aiObserved=false;
  const history:any[]=[];
  const aiDialogs=new Set<string>();
  const state=()=>session.getState() as any;
  function detail(){const p=session.runtime.objects.get('203:computerScript')?.props??{};return JSON.stringify({state:state(),clock:session.runtime.global(323),owner:session.inputOwner(),computer:Object.fromEntries(['state','cycles','register'].map(k=>[k,p[k]])),aiGlobals:[400,401,407,408,475].map(i=>[i,session.runtime.global(i)]),history});}
  async function step(count=1) {
    for(let i=0;i<count;i++) {
      if(++ticks>60_000)assert.fail(`Logical tick budget exceeded: ${detail()}`);
      session.tick();await setImmediate();
      if(session.error)assert.fail(detail());
      const current=session.runtime.global(302);
      if(current?.kind==='object'&&session.runtime.get(current,'playing')===29)aiObserved=true;
      if(aiObserved&&state().dialog)aiDialogs.add(state().dialog);
    }
  }
  async function until(label:string,predicate:()=>boolean,limit=3000) {
    for(let i=0;i<limit;i++) {
      if(predicate()){const {week,currentPlayer,cash,dialog}=state();history.push({label,ticks,week,currentPlayer,cash,dialog});return;}
      await step();
    }
    assert.fail(`Timed out waiting for ${label}: ${detail()}`);
  }
  const dialog=(name:string)=>state().dialog===name&&session.runtime.trace.some(x=>x.endsWith('.doit'));
  async function click(x:number,y:number,settle=16) {
    session.handleInput({type:'pointer',action:'move',x,y,button:0});await step(2);
    session.handleInput({type:'pointer',action:'down',x,y,button:0});await step(6);
    session.handleInput({type:'pointer',action:'up',x,y,button:0});await step(settle);
  }
  async function key(key:string,settle=16) {
    session.handleInput({type:'key',action:'down',key});await step(1);
    session.handleInput({type:'key',action:'up',key});await step(settle);
  }
  session.start();
  await until('original copyright notice',()=>session.runtime.trace.some(x=>x==='764:noticeRoom.init'));
  await key('Enter',120);
  await until('original main menu',()=>dialog('select1'));
  await click(160,70);
  await until('one-to-four player choice',()=>dialog('select1b'));
  await click(95,110);
  await until('original character choice',()=>dialog('select2'));
  await click(84,156);
  await until('human goals',()=>dialog('select3'));
  await click(224,156);
  await until('challenge Jones question',()=>dialog('select4'));
  await click(160,110);
  await step(50);
  await click(160,128);
  await until('Jones goals',()=>dialog('select3'));
  await click(224,156);
  await until('human first turn',()=>state().currentPlayer==='player1'&&!state().dialog&&session.inputOwner()===0,8000);
  assert.equal(session.runtime.get(session.runtime.object(1,'player2'),'playing'),29,'Original setup must create a Jones opponent');
  const week=state().week;
  aiObserved=false;aiDialogs.clear();
  await click(160,25);
  await until('original home',()=>dialog('lowcost'),6000);
  for(let i=0;i<16&&session.runtime.global(323)<60;i++)await click(94,156,90);
  assert.equal(session.runtime.global(323),60,`Relax did not consume a complete turn: ${detail()}`);
  await key('Enter');
  await click(224,156,90);
  // A time-expired bubble may consume the first original Done click.
  if(state().dialog==='lowcost')await click(224,156,90);
  await until('Jones owns its automatic turn',()=>aiObserved,8000);
  assert.equal(session.inputOwner(),null,'AI turn must not grant a human input seat');
  await until('human receives next turn',()=>aiObserved&&state().currentPlayer==='player1'&&state().week>week&&session.inputOwner()===0,50_000);
  assert.equal(session.error,null);
  assert(state().week>=2);
  await until('original human weekend report',()=>dialog('weekend'));
  await click(224,156,90);
  await until('human second turn ready',()=>state().currentPlayer==='player1'&&!state().dialog&&session.runtime.global(473)===1,8000);
  await click(160,25);
  await until('home reopens with fresh original script',()=>dialog('lowcost'),6000);
  aiObserved=false;
  for(let i=0;i<16&&session.runtime.global(323)<60;i++)await click(94,156,90);
  assert.equal(session.runtime.global(323),60,detail());
  await key('Enter');await click(224,156,90);
  if(state().dialog==='lowcost')await click(224,156,90);
  await until('Jones second automatic turn',()=>aiObserved,8000);
  await until('human receives third week',()=>aiObserved&&state().currentPlayer==='player1'&&state().week>=3&&session.inputOwner()===0,30_000);
  assert(aiDialogs.has('employment')&&aiDialogs.has('market'),'Jones must execute its original employment and shop decisions');
  t.diagnostic(JSON.stringify({ticks,week:state().week,aiTurns:2,currentPlayer:state().currentPlayer,aiDialogs:[...aiDialogs]}));
});
