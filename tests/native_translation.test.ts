// SPDX-License-Identifier: GPL-3.0-or-later
// These are direct tests of translated original rules, not a replacement model.
// Browser tests separately verify the original dialogs and playable interaction.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { Runtime } from '../native/runtime/runtime.js';
import { registerAll, scripts } from '../native/generated/index.js';

const selectors = JSON.parse(readFileSync(new URL('../reports/selectors.json', import.meta.url), 'utf8'));
function runtime() {
  const rt = new Runtime({ seed: 713, selectors });
  registerAll(rt);
  return rt;
}
async function player() {
  const rt = runtime(), p = rt.object(1, 'player1');
  rt.setGlobal(302, p);
  await rt.send(p, 'init');
  return { rt, p };
}

test('all 69 source modules register all 598 original objects and 836 functions', () => {
  const rt = runtime();
  assert.equal(scripts.length, 69);
  assert.equal(rt.scripts.size, 69);
  assert.equal(rt.objects.size, 598);
  let methods = 0, procedures = 0;
  for (const def of rt.scripts.values()) {
    procedures += Object.keys(def.procedures).length;
    for (const object of def.objects) methods += Object.keys(object.methods).length;
  }
  assert.equal(methods, 738);
  assert.equal(procedures, 98);
  for (const object of rt.objects.values()) rt.initialize(object);
  assert.equal(rt.object(997, 'MenuBar').parent, rt.object(255, 'MenuBar'));
});

test('original player initialization supplies $200, four goals, prepaid rent and six weeks of casual clothes', async () => {
  const { rt, p } = await player();
  assert.equal(rt.get(p, 'cash'), 200);
  assert.deepEqual(['monGoal', 'hapGoal', 'eduGoal', 'carGoal'].map(k => rt.get(p,k)), [50,50,50,50]);
  assert.deepEqual(['dependibility', 'experience', 'curRent'].map(k => rt.get(p,k)), [20,10,325]);
  const consumables = rt.get(p,'consumables');
  assert.equal(await rt.send(consumables,'objectAtIndexQuan',[40]),3);
  assert.equal(await rt.send(consumables,'objectAtIndexQuan',[36]),6);
  assert.equal(await rt.send(p,'dressedForWork'),1);
  assert.equal(await rt.send(p,'weeksOfClothing'),6);
  assert.equal(await rt.send(rt.get(p,'investments'),'size'),6);
});

test('cash carry/borrow and negative-spendable-cash behavior retain original word arithmetic', async () => {
  const { rt,p } = await player();
  rt.set(p,'cash',32760);
  await rt.call(0,'proc0_10',[20]);
  assert.equal(rt.get(p,'cashHi'),1);
  assert.equal(rt.get(p,'cash'),13,'Original cash helper carries at 32767, not 32768');
  assert.equal(await rt.call(0,'proc0_11',[]),32767);
  rt.set(p,'cash',5);
  await rt.call(0,'proc0_10',[-20]);
  assert.equal(rt.get(p,'cashHi'),0);
  assert.equal(rt.get(p,'cash'),32752);
  rt.set(p,'cash',5);
  await rt.call(0,'proc0_10',[-20]);
  assert.equal(rt.get(p,'cash'),-15);
  assert.equal(await rt.call(0,'proc0_11',[]),0);
  rt.set(p,'lqAss',15000);
  await rt.call(0,'proc0_10',[0]);
  assert.equal(rt.get(p,'monStat'),100);
});

test('liquid assets include bank and investments and subtract rent and loan liabilities', async () => {
  const { rt,p } = await player();
  rt.set(p,'cash',1000);rt.set(p,'bankBal',500);
  rt.set(p,'rentOwed',100);rt.set(p,'loanBal',200);
  const bills = await rt.send(rt.get(p,'investments'),'at',[0]);
  rt.set(bills,'shares',3);
  await rt.send(p,'calcLiquidAssets');
  assert.equal(rt.get(p,'invAss'),300);
  assert.equal(rt.get(p,'lqAss'),1500);
  assert.equal(rt.get(p,'lqAssHi'),0);
  const durable = await rt.send(rt.get(p,'durables'),'recieve',[21,1]);
  rt.set(durable,'pricePaid',650);
  await rt.send(p,'calcNetWorth');
  assert.equal(rt.get(p,'netWorth'),2150);
  await rt.call(0,'proc0_12',[0,32760,0,20]);
  assert.deepEqual([rt.global(454),rt.global(455)],[1,12],
    'The original general asset helper differs by one from the cash carry helper');
});

test('original education distinguishes an active course from a completed degree', async () => {
  const { rt,p } = await player(), education = rt.get(p,'education');
  assert.equal(await rt.send(p,'hasDegree',[0]),1);
  assert.equal(await rt.send(p,'hasDegree',[10]),0);
  await rt.send(education,'recieve',[10,2]);
  assert.equal(await rt.send(p,'courseActive',[10]),1);
  assert.equal(await rt.send(p,'hasDegree',[10]),0);
  assert.equal(await rt.send(p,'numDegrees'),0);
  await rt.send(education,'recieve',[10,8]);
  assert.equal(await rt.send(p,'courseActive',[10]),0);
  assert.equal(await rt.send(p,'hasDegree',[10]),1);
  assert.equal(await rt.send(p,'numDegrees'),1);
});

test('original job qualification keeps chance threshold, degree prerequisites and prior refusal', async () => {
  const { rt,p } = await player(), job = await rt.send(rt.object(206,'JobDItem'),'new');
  rt.set(job,'jobNum',7);rt.set(job,'key',2);
  rt.setGlobal(501,4);
  let draw = 43;
  rt.random = (min,max) => { assert.deepEqual([min,max],[1,100]);return draw; };
  assert.equal(await rt.send(job,'qualify'),1,'Initial experience/history give a 43% availability threshold');
  assert.equal(rt.get(p,'jobKey'),2);assert.equal(rt.get(p,'jobT'),4);
  draw=44;
  assert.equal(await rt.send(job,'qualify'),0);
  rt.set(job,'education',10);draw=1;
  assert.equal(await rt.send(job,'qualify'),0,'Chance cannot waive a required degree');
  assert.equal(rt.get(p,'needEd1'),10);
  await rt.send(rt.get(p,'education'),'recieve',[10,10]);
  assert.equal(await rt.send(job,'qualify'),1);
  await rt.send(job,'turnedDown',[7]);
  assert.equal(await rt.send(job,'qualify'),0,'A recorded refusal blocks this job during the same turn');
  rt.set(job,'indexNum',44);
  assert.equal(await rt.send(job,'qualify'),1,'Original occupation44 explicitly overrides availability');
});

test('monthly rollover retains loan schedule, late payments, rent and work-history rules', async () => {
  const { rt,p } = await player();
  rt.setGlobal(372,4);
  rt.set(p,'loanBal',500);rt.set(p,'paySched',3);rt.set(p,'madePayment',0);
  rt.set(p,'wage',5);rt.set(p,'dependibility',43);
  const rent = await rt.send(rt.get(p,'consumables'),'objectAtIndex',[40]);
  rt.set(rent,'quantity',0);
  await rt.send(p,'endTurn');
  assert.equal(rt.get(p,'dependibility'),40);
  assert.equal(rt.get(p,'carStat'),50);
  assert.equal(rt.get(p,'paySched'),2);
  assert.equal(rt.get(p,'latePayments'),1);
  assert.equal(rt.get(p,'rentOwed'),325);
  assert.equal(rt.get(p,'turnedOver'),1);
});

test('source economic adjustment keeps original weighted ranges and clamps the resulting index', async () => {
  const rt = runtime(), economic = rt.object(107,'mainI'), ranges:number[][]=[];
  const values=[98,96,2];
  rt.random=(min,max)=>{ranges.push([min,max]);const value=values.shift();assert(value!==undefined&&value>=min&&value<=max);return value;};
  await rt.send(economic,'init',[0,100]);
  assert.deepEqual(ranges,[[97,103],[95,103]]);
  assert.equal(rt.get(economic,'index'),-1);
  assert.equal(rt.get(economic,'adjustment'),-4);
  assert.equal(await rt.send(economic,'doit',[0]),96);
  rt.set(economic,'reading',189);rt.set(economic,'adjustment',50);
  assert.equal(await rt.send(economic,'doit',[0]),190);
  rt.set(economic,'reading',11);rt.set(economic,'adjustment',-50);
  assert.equal(await rt.send(economic,'doit',[0]),10);
});

test('the translated clock spends original action time and caps one turn at60', async () => {
  const rt = runtime(), drawn:any[]=[];
  rt.graphics={getPort:()=>0,setPort:()=>0,getCel:()=>({width:8,height:8}),drawCel:(...a:any[])=>drawn.push(a)};
  rt.setGlobal(478,1); // Isolate the already-played out-of-time sound from the clock rule.
  rt.setGlobal(323,3);
  await rt.send(rt.object(1,'timeKeep'),'doit',[4]);
  assert.equal(rt.global(323),7);
  assert.equal(rt.get(rt.object(1,'timeKeep'),'cel'),7);
  await rt.send(rt.object(1,'timeKeep'),'doit',[70]);
  assert.equal(rt.global(323),60);
  assert.deepEqual([rt.get(rt.object(1,'timeKeep'),'loop'),rt.get(rt.object(1,'timeKeep'),'cel')],[6,0]);
  assert.equal(drawn.length,2);
});

test('original start-turn victory check requires all four goals and does not award twice', async () => {
  const {rt,p}=await player(), start=rt.object(111,'startTrn');
  const outcomes:string[]=[];
  // Only the next-screen presentation is intercepted; the original victory
  // condition and preceding start-turn state changes execute unchanged.
  start.def.methods.setScript=async function(_rt,args){outcomes.push(args[0].name);return 0;};
  start.def.methods.cue=async function(){outcomes.push('continue');return 0;};
  rt.set(rt.object(996,'User'),'controls',1);
  const stats=['monStat','hapStat','eduStat','carStat'];
  for(const key of stats)rt.set(p,key,50);
  for(const missing of stats) {
    rt.set(p,missing,49);outcomes.length=0;
    await rt.send(start,'changeState',[0]);
    assert.deepEqual(outcomes,['continue'],missing);
    rt.set(p,missing,50);
  }
  outcomes.length=0;await rt.send(start,'changeState',[0]);
  assert.deepEqual(outcomes,['winnerScript']);
  rt.set(p,'finishStatus',4);outcomes.length=0;
  await rt.send(start,'changeState',[0]);
  assert.deepEqual(outcomes,['continue']);
});

test('translated Jones route helpers use the original170-point ring and finite permutation loops', async () => {
  const rt=runtime(), places=rt.object(1,'places');
  rt.setGlobal(301,places);rt.setGlobal(475,3);
  await rt.send(places,'add',['apartmentsP','rentOfficeP','securityP','marketP'].map(name=>rt.object(1,name)));
  assert.equal(await rt.call(300,'localproc_1',[0,1]),13,'Seven ring points plus two three-tick door costs');
  assert.equal(await rt.call(300,'localproc_3',[0,1,2]),32);
  // Preserve the original chained adjacent != semantics, including allowing
  // first and third route candidates to coincide. Do not redesign this AI.
  assert.equal(await rt.call(300,'localproc_4',[0,1,2,3]),51);
  assert.equal(await rt.call(300,'localproc_5',[0,1,2,3]),1);
  rt.setGlobal(323,59);rt.setGlobal(324,0);
  assert.equal(await rt.call(300,'localproc_2',[2]),1);
  assert.equal(await rt.call(300,'localproc_2',[3]),0);
});

test('original script disposal resets shop-local AI state when the shop is entered again', async () => {
  const rt=runtime(), script=rt.object(203,'computerScript');
  rt.set(script,'state',21);rt.set(script,'register',1);rt.setLocal(203,0,1);
  await rt.kernel('DisposeScript',[203]);
  const reentered=rt.object(203,'computerScript');
  assert.equal(rt.get(reentered,'state'),-1,
    'Dialog.setScript depends on original script reload; stale state21 makes Jones miss the exit state20');
  assert.equal(rt.get(reentered,'register'),0);
  assert.equal(rt.local(203,0),0);
});
