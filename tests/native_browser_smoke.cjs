// SPDX-License-Identifier: GPL-3.0-or-later
// Real browser input through the native game. State access below is read-only.
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
const path=require('node:path');
const {chromium}=require('playwright');
const ROOT=path.resolve(__dirname,'..'),OUTPUT=path.join(ROOT,'build/native-evidence');
const URL=process.env.JONES_NATIVE_URL||'http://127.0.0.1:8767/';
const report={started:new Date().toISOString(),subject:'Translated TypeScript Jones + Three.js; no ScummVM runtime',checks:[],screenshots:[],errors:[],resourceErrors:[],requests:[],ok:false};
let browser,page;
async function check(name,fn){const start=Date.now();const detail=await fn();report.checks.push({name,ok:true,milliseconds:Date.now()-start,...(detail?{detail}:{})});console.log('PASS',name);}
const state=()=>page.evaluate(()=>window.jonesNative.getState());
async function healthy(){const s=await state();assert.equal(s.error,null,JSON.stringify(s));return s;}
async function wait(fn,timeout=18000){const end=Date.now()+timeout;while(Date.now()<end){const s=await healthy();if(fn(s))return s;await page.waitForTimeout(100);}throw new Error('State timeout '+JSON.stringify(await state()));}
async function click(x,y){const b=await page.locator('#game').boundingBox();await page.mouse.click(b.x+x*b.width/320,b.y+y*b.height/200,{delay:100});await page.waitForTimeout(150);await healthy();}
async function capture(name){await page.mouse.move(1,1);const file=path.join(OUTPUT,`${name}.png`);await page.screenshot({path:file});report.screenshots.push({name,path:path.relative(ROOT,file),state:await state()});}
async function newPage(context){page=await context.newPage();page.on('pageerror',e=>report.errors.push(e.message));page.on('request',r=>report.requests.push(r.url()));page.on('requestfailed',r=>{const error=r.failure()?.errorText;if(!error?.includes('ERR_ABORTED'))report.resourceErrors.push({url:r.url(),error});});page.on('response',r=>{if(r.status()>=400)report.resourceErrors.push({url:r.url(),status:r.status()});});await page.route('**/@vite/client',r=>r.fulfill({contentType:'text/javascript',body:''}));await page.goto(URL);await page.locator('#play').click();await page.waitForFunction(()=>window.jonesNative);await healthy();}
async function startGame(){
  for(let i=0;i<8;i++){if((await healthy()).dialog==='select1')break;await click(160,100);await page.waitForTimeout(600);}
  await wait(s=>s.dialog==='select1');await capture('01-main-menu');
  await click(165,75);await wait(s=>s.dialog==='select1b');await capture('02-player-count');
  await click(104,115);await wait(s=>s.dialog==='select2');await capture('03-character');
  await click(94,161);await wait(s=>s.dialog==='select3');await capture('04-goals');
  await click(231,161);await wait(s=>s.dialog==='select4');await capture('05-challenge');
  await click(196,143);await wait(s=>s.currentPlayer==='player1'&&s.dialog===null);await page.waitForTimeout(1000);await capture('06-week-one');
}
async function ready(dialog){await wait(s=>s.dialog===dialog&&s.trace.at(-1)===({bank:'204:bank.doit',employment:'206:employment.doit',fastfood:'205:fastfood.doit',university:'207:university.doit',lowcost:'200:lowcost.doit'}[dialog]||`${dialog}.doit`),25000);}
async function done(){await click(229,157);await page.waitForTimeout(400);}
(async()=>{
  await fs.mkdir(OUTPUT,{recursive:true});
  browser=await chromium.launch({headless:true,executablePath:process.env.JONES_BROWSER_EXECUTABLE||chromium.executablePath(),args:['--no-sandbox']});
  const context=await browser.newContext({viewport:{width:1280,height:800}});await newPage(context);
  await check('Native startup and original one-player menus',async()=>{await startGame();assert.equal((await state()).cash,200);assert.equal(await page.evaluate(()=>document.fullscreenElement?.id),'screen');});
  await check('Original bank deposit and withdrawal',async()=>{
    await click(37,139);await ready('bank');await capture('07-bank');
    await click(199,82);await wait(s=>s.cash===100);await ready('bank');await capture('08-deposit');
    await click(199,97);await wait(s=>s.cash===200);await ready('bank');await capture('09-withdraw');
  });
  let save;
  await check('Original F5 saves and F7 restores native game state',async()=>{
    await page.keyboard.press('F5');await page.waitForTimeout(400);await capture('10-save-question');await click(199,119);
    await page.waitForFunction(()=>!!localStorage.getItem('jones-native-save-v1'));save=await page.evaluate(()=>localStorage.getItem('jones-native-save-v1'));
    assert.equal(JSON.parse(save).format,'jones-native');await ready('bank');await capture('11-saved');
    await click(199,82);await wait(s=>s.cash===100);await ready('bank');
    await page.keyboard.press('F7');await page.waitForTimeout(400);await capture('12-restore-question');await click(182,103);
    await wait(s=>s.cash===200&&s.dialog==='bank');await ready('bank');await capture('13-restored');
  });
  await check('Save survives closing the page and original Restore Game menu',async()=>{
    await page.close();await newPage(context);
    for(let i=0;i<8;i++){if((await healthy()).dialog==='select1')break;await click(160,100);await page.waitForTimeout(600);}
    await wait(s=>s.dialog==='select1');await click(165,105);await wait(s=>s.dialog==='bank'&&s.cash===200);await ready('bank');await capture('14-restored-after-reload');
  });
  await check('Original F4 statistics renders its original text rows',async()=>{
    await page.keyboard.press('F4');await wait(s=>s.dialog==='inventories');await page.waitForTimeout(300);await capture('14b-statistics');
    const stats=await page.evaluate(()=>{const r=window.jonesNative.runtime,control=r.object(231,'invSelector'),text=r.text(r.get(control,'text')),pixels=window.jonesNative.getFrame().pixels;return {text,pixels};});
    assert.match(stats.text,/Cash: \$200/);assert.match(stats.text,/Unemployed/);
    const pixels=Buffer.from(stats.pixels,'base64');let ink=0;for(let y=75;y<110;y++)for(let x=88;x<230;x++)if(pixels[y*320+x]===0)ink++;
    assert(ink>150,'Statistics list must visibly draw text, not just its frame');await done();await ready('bank');
  });
  // An independent ordinary game avoids an original bank-robbery event affecting later purchases.
  const gameplay=await browser.newContext({viewport:{width:1280,height:800}});await newPage(gameplay);await startGame();
  await check('Original job application, work and food purchase',async()=>{
    await click(98,182);await page.waitForTimeout(6000);await capture('15-employment');
    await click(125,92);await page.waitForTimeout(500);await capture('16-job-list');await click(150,97);await page.waitForTimeout(5500);await capture('17-job-result');
    await done();await click(281,64);await page.waitForTimeout(6500);await capture('18-monolith');
    const before=(await state()).cash;await click(159,157);await wait(s=>s.cash>before);await page.waitForTimeout(2500);const first=(await state()).cash;
    await click(159,157);await wait(s=>s.cash>first);await page.waitForTimeout(4500);await capture('19-work');
    const cash=(await state()).cash;await click(110,80);await wait(s=>s.cash<cash);await page.waitForTimeout(5500);await capture('20-food');
    return {firstShift:first-before,secondShift:cash-first,mealPrice:cash-(await state()).cash};
  });
  await check('Original school enrollment and Trade School lesson',async()=>{
    await done();await click(229,182);await page.waitForTimeout(6500);await capture('21-university');const before=(await state()).cash;
    await click(180,153);await page.waitForTimeout(500);await capture('22-enrollment-question');await click(205,117);await wait(s=>s.cash<before);await page.waitForTimeout(5500);await click(100,70);await page.waitForTimeout(400);
    await click(181,129);await page.waitForTimeout(6500);await capture('23-lesson');
    const courses=await page.evaluate(()=>{const r=window.jonesNative.runtime,p=r.global(302),education=r.get(p,'education'),list=r.get(education,'elements'),result=[];for(let n=list.first;n;n=n.next)result.push({index:r.get(n.value,'indexNum'),quantity:r.get(n.value,'quantity')});return result;});
    assert(courses.some(c=>c.quantity>0),'Original lesson must add course units');return courses;
  });
  await check('Original full week via home relaxation',async()=>{
    await done();await click(160,25);await page.waitForTimeout(4000);await capture('24-home');
    for(let i=0;i<11;i++){await click(93,157);await page.waitForTimeout(600);}
    await page.waitForTimeout(5500);await done();await page.waitForTimeout(700);await done();await wait(s=>s.week>=2,30000);await capture('25-week-two');
  });
  await check('Fullscreen, display effects and aspect-ratio input mapping',async()=>{
    await page.locator('#settings').focus();await page.locator('#settings').click();await page.locator('#mode').selectOption('crt');await page.locator('#resolution').selectOption('1080');await page.locator('#display button').click();await capture('26-crt');
    for(const viewport of [{width:1280,height:720},{width:390,height:844},{width:1280,height:800}]) {await page.setViewportSize(viewport);await page.waitForTimeout(200);const b=await page.locator('#game').boundingBox();assert(Math.abs(b.width/b.height-1.6)<.01);}
    await healthy();
  });
  await check('Original Quit confirmation completes the game and returns to Play',async()=>{
    await page.keyboard.press('Control+q');await page.waitForTimeout(400);await page.keyboard.press('Enter');
    await page.locator('#launch').waitFor({state:'visible'});assert.equal((await state()).finished,true);assert.equal((await state()).audio.sounds.length,0);
    await capture('27-quit');
  });
  assert.equal(report.errors.length,0,report.errors.join('\n'));assert(!report.requests.some(url=>/scummvm|\.wasm(?:$|\?)/i.test(url)),'Native browser must not load ScummVM or WASM');
  assert.deepEqual(report.resourceErrors,[],'All requested native resources must load successfully');
  report.ok=true;
})().catch(async e=>{report.failure=e.stack;console.error(e);if(page)try{await capture('failure');}catch{};process.exitCode=1;}).finally(async()=>{report.finished=new Date().toISOString();await fs.mkdir(OUTPUT,{recursive:true});await fs.writeFile(path.join(OUTPUT,'report.json'),JSON.stringify(report,null,2));await browser?.close();});
