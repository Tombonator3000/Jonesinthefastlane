// SPDX-License-Identifier: GPL-3.0-or-later
// Production UI only: two independent browser contexts, original game inputs,
// and read-only snapshots. Run against `pnpm serve:native` after native build.
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
const path=require('node:path');
const {createHash}=require('node:crypto');
const {chromium}=require('playwright');
const ROOT=path.resolve(__dirname,'..');
const OUTPUT=path.join(ROOT,'build/native-online-evidence');
const URL=process.env.JONES_NATIVE_URL||'http://127.0.0.1:8787/';
const report={started:new Date().toISOString(),subject:'Production native online UI, two isolated Chromium contexts, real WebSocket server',checks:[],screenshots:[],errors:[],ok:false};
let browser,host,guest;
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const hash=value=>createHash('sha256').update(JSON.stringify(value)).digest('hex');
async function check(name,fn){const start=Date.now(),details=await fn();report.checks.push({name,ok:true,milliseconds:Date.now()-start,...(details?{details}:{})});console.log('PASS',name);}
async function snapshot(page){return page.evaluate(()=>{const d=window.jonesNative;return d?{state:d.getState(),room:d.getRoom(),seat:d.getSeat(),hasLocalRuntime:d.runtime!==undefined}:null;});}
async function wait(page,predicate,label,timeout=20_000){const end=Date.now()+timeout;while(Date.now()<end){const s=await snapshot(page);if(s?.state?.error)throw new Error(s.state.error);if(s&&predicate(s))return s;await delay(80);}throw new Error(`Timeout ${label}: ${JSON.stringify(await snapshot(page))}`);}
async function click(page,x,y){const b=await page.locator('#game').boundingBox();assert(b);await page.mouse.click(b.x+x*b.width/320,b.y+y*b.height/200,{delay:90});await delay(160);}
async function capture(page,name){const file=path.join(OUTPUT,`${name}.png`);await page.screenshot({path:file,mask:[page.locator('#invite-link')]});const s=await snapshot(page);report.screenshots.push({name,path:path.relative(ROOT,file),seat:s?.seat,dialog:s?.state?.dialog});}
async function sharedFrame(label){
  for(let attempt=0;attempt<30;attempt++){
    const [a,b]=await Promise.all([host.evaluate(()=>window.jonesNative.getFrame()),guest.evaluate(()=>window.jonesNative.getFrame())]);
    if(a&&b&&hash(a)===hash(b))return {label,revision:a.revision,sha256:hash(a),originalPixels:Buffer.from(a.pixels,'base64').length};
    await delay(80);
  }
  throw new Error(`${label}: clients did not converge to the same authoritative original frame`);
}
async function pageFor(context,label){const page=await context.newPage();page.on('pageerror',e=>report.errors.push({page:label,message:e.message}));page.on('request',r=>{if(/scummvm|\.wasm(?:$|\?)/i.test(r.url()))report.errors.push({page:label,message:'Unexpected legacy interpreter request'});});return page;}
(async()=>{
  await fs.mkdir(OUTPUT,{recursive:true});
  browser=await chromium.launch({headless:true,executablePath:process.env.JONES_BROWSER_EXECUTABLE||chromium.executablePath(),args:['--no-sandbox']});
  const hostContext=await browser.newContext({viewport:{width:1280,height:800}}),guestContext=await browser.newContext({viewport:{width:1280,height:800}});
  host=await pageFor(hostContext,'host');guest=await pageFor(guestContext,'guest');
  let invitation,roomId;
  await check('Create and join through production online controls',async()=>{
    await host.goto(URL);await host.locator('#online').click();await host.locator('#advanced-network summary').click();await host.locator('#connection-mode').selectOption('server');await host.locator('#players').selectOption('2');await host.locator('#create').click();
    await host.waitForFunction(()=>document.querySelector('#invite-link').value.length>0);
    invitation=await host.locator('#invite-link').inputValue();
    const h=await wait(host,s=>s.seat===0&&s.room?.status==='waiting','host seat');roomId=h.room.roomId;
    await guest.goto(invitation);await guest.locator('#join').click();
    await wait(guest,s=>s.seat===1&&s.room?.roomId===roomId,'guest seat');
    await host.waitForFunction(()=>!document.querySelector('#start-online').disabled);
    assert.equal((await snapshot(host)).room.seats.filter(s=>s.connected).length,2);
    assert.equal(await guest.locator('#start-online').isVisible(),false);
    return {hostSeat:0,guestSeat:1,connectedPlayers:2};
  });
  await check('Host starts original shared game with no local simulation',async()=>{
    await host.locator('#start-online').click();
    await Promise.all([wait(host,s=>s.room?.status==='running'&&s.state,'host running'),wait(guest,s=>s.room?.status==='running'&&s.state,'guest running')]);
    assert.equal(await host.locator('#launch').isVisible(),false);assert.equal(await guest.locator('#launch').isVisible(),false);
    assert.equal((await snapshot(host)).hasLocalRuntime,false);assert.equal((await snapshot(guest)).hasLocalRuntime,false);
    for(let count=0;count<8&&(await snapshot(host)).state?.dialog!=='select1';count++){await click(host,160,35);await delay(650);}
    await wait(host,s=>s.state?.dialog==='select1','original main menu');await wait(guest,s=>s.state?.dialog==='select1','shared original main menu');
    const frame=await sharedFrame('Original main menu');assert.equal(frame.originalPixels,64000);
    await capture(host,'01-host-original-menu');await capture(guest,'02-guest-original-menu');
    return frame;
  });
  await check('Inactive browser input cannot choose original controls',async()=>{
    await click(guest,160,70);await delay(300);
    assert.equal((await snapshot(host)).state.dialog,'select1');assert.equal((await snapshot(guest)).state.dialog,'select1');
    assert.match(await guest.locator('#network-status').textContent(),/Player 1/);
    return await sharedFrame('After inactive guest click');
  });
  await check('Reload and Resume online game restore the same private seat',async()=>{
    // Reload is an actual page lifecycle; sessionStorage is neither injected nor read.
    await guest.reload();await guest.waitForFunction(()=>window.jonesNative);
    // An invitation URL opens this dialog automatically after a reload.
    if(!await guest.locator('#network').isVisible())await guest.locator('#online').click();
    await guest.locator('#resume-online').click();
    const s=await wait(guest,s=>s.room?.status==='running'&&s.seat===1&&s.state?.dialog==='select1','reloaded guest resumed');
    assert.equal(s.room.roomId,roomId);assert.equal(s.hasLocalRuntime,false);
    const frame=await sharedFrame('Guest resume');await capture(guest,'03-reloaded-guest-resumed');
    return {...frame,seat:1};
  });
  await check('Original host control still reaches the same player-count screen',async()=>{
    await click(host,160,70);await wait(host,s=>s.state?.dialog==='select1b','host player count');await wait(guest,s=>s.state?.dialog==='select1b','guest shared player count');
    const frame=await sharedFrame('Original player count after reconnect');await capture(host,'04-host-player-count');await capture(guest,'05-guest-player-count');return frame;
  });
  await check('Room size validation keeps the original count screen usable',async()=>{
    await click(host,224,110);await wait(host,s=>!!s.state?.connectionNotice,'count notice');
    assert.equal((await snapshot(host)).state.dialog,'select1b');assert.match(await host.locator('#network-status').textContent(),/Choose 2/);
    await click(host,144,110);await wait(host,s=>s.state?.dialog==='select2','correct original count');await wait(guest,s=>s.state?.dialog==='select2','shared character screen');
    assert.equal((await snapshot(host)).state.connectionNotice,null);await capture(host,'06-original-character-after-count-check');return await sharedFrame('Correct original selection after rejected mismatch');
  });
  assert.deepEqual(report.errors,[]);report.ok=true;
})().catch(async error=>{report.failure=error.stack;console.error(error);process.exitCode=1;for(const [page,name] of [[host,'failure-host'],[guest,'failure-guest']])if(page)try{await capture(page,name);}catch{}}).finally(async()=>{report.finished=new Date().toISOString();await fs.mkdir(OUTPUT,{recursive:true});await fs.writeFile(path.join(OUTPUT,'report.json'),JSON.stringify(report,null,2));await browser?.close();});
