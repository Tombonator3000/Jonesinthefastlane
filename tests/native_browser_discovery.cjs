// SPDX-License-Identifier: GPL-3.0-or-later
// Actual static UI + MQTT broker + PeerJS/WebRTC. No game-state mutation.
// JONES_NATIVE_URL + JONES_DISCOVERY_CLOUD=1 verifies a published static build.
// Remote mode starts no local static, signaling, MQTT or gameplay server.
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
const path=require('node:path');
const {createHash}=require('node:crypto');
const {createServer}=require('node:http');
const {WebSocketServer,createWebSocketStream}=require('ws');
const createAedes=require('aedes');
const {chromium}=require('playwright');
const {startPeerFixture}=require('./native_peer_signaling.cjs');
const ROOT=path.resolve(__dirname,'..'),CLOUD=process.env.JONES_DISCOVERY_CLOUD==='1';
const REMOTE=process.env.JONES_NATIVE_URL;
const OUTPUT=path.resolve(ROOT,process.env.JONES_DISCOVERY_OUTPUT||`build/native-discovery-evidence/${CLOUD?'public':'local'}`);
const report={started:new Date().toISOString(),mode:CLOUD?'public HiveMQ + public PeerJS':'real local MQTT + local PeerServer',checks:[],errors:[],screenshots:[],loadedScripts:[],ok:false};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));let browser,fixture,broker,http,wss,deadline;
async function wait(fn,label,timeout=15000){const until=Date.now()+timeout;while(Date.now()<until){if(await fn())return;await sleep(80);}throw new Error('Timeout: '+label);}
async function check(name,run){const start=Date.now();try{const detail=await run();report.checks.push({name,ok:true,ms:Date.now()-start,...detail});console.log('PASS',name);}catch(error){report.checks.push({name,ok:false,ms:Date.now()-start});throw error;}}
async function capture(page,name){const file=path.join(OUTPUT,`${name}.png`);await page.screenshot({path:file,mask:[page.locator('#invite-link'),page.locator('#invitation')]});report.screenshots.push(path.relative(ROOT,file));}
async function snapshot(page){return page.evaluate(()=>({room:window.jonesNative.getRoom(),seat:window.jonesNative.getSeat(),state:window.jonesNative.getState()}));}
async function run(){
  await fs.mkdir(OUTPUT,{recursive:true});
  assert(!REMOTE||CLOUD,'JONES_NATIVE_URL requires JONES_DISCOVERY_CLOUD=1');
  let url;
  if(REMOTE){
    url=new URL(REMOTE);
    assert(['http:','https:'].includes(url.protocol)&&!url.username&&!url.password&&!url.hash,'Remote build must be an HTTP(S) page URL without credentials or an invitation');
    assert(!['signal','ice','lobby'].some(key=>url.searchParams.has(key)),'Remote discovery verification must use default public signaling and lobby services');
  }else{fixture=await startPeerFixture(path.join(ROOT,'build/native'),{cloud:CLOUD});url=new URL(fixture.url);}
  report.source={kind:REMOTE?'remote static URL':'local static-only fixture',url:url.origin+url.pathname,...(fixture?{build:'build/native',rejectsWebSocketUpgrades:true}:{})};
  report.gameServerStartedByTest=false;
  const publications=[],subscriptions=[];
  if(!CLOUD){
    broker=createAedes();http=createServer();wss=new WebSocketServer({server:http});wss.on('connection',socket=>broker.handle(createWebSocketStream(socket)));
    broker.on('publish',(packet,client)=>{if(client&&packet.topic.startsWith('jones-in-fast-lane/v1/'))publications.push(packet.payload.toString());});broker.on('subscribe',subscriptionsFound=>subscriptions.push(...subscriptionsFound));
    await new Promise(r=>http.listen(0,'127.0.0.1',r));url.searchParams.set('lobby',`ws://127.0.0.1:${http.address().port}/mqtt`);
  }
  browser=await chromium.launch({executablePath:process.env.JONES_BROWSER_EXECUTABLE||chromium.executablePath(),headless:true,args:['--no-sandbox']});
  const hostContext=await browser.newContext({viewport:{width:1280,height:800}}),guestContext=await browser.newContext({viewport:{width:390,height:844}}),observerContext=await browser.newContext();
  const host=await hostContext.newPage(),guest=await guestContext.newPage(),observer=await observerContext.newPage();
  for(const [page,label]of [[host,'host'],[guest,'guest'],[observer,'observer']]){
    page.on('pageerror',error=>report.errors.push({page:label,error:error.message}));
    page.on('response',response=>{if(response.ok()&&response.request().resourceType()==='script')void response.body().then(bytes=>report.loadedScripts.push({page:label,path:new URL(response.url()).pathname,sha256:createHash('sha256').update(bytes).digest('hex')})).catch(()=>{});});
    await page.goto(url.href);await page.waitForFunction(()=>window.jonesNative);
  }
  const roomName=`Jones browser check ${Date.now().toString(36)}`;
  await check('Personal display choices persist locally and do not change another player',async()=>{
    await host.locator('#play').click();await host.locator('#settings').click();await host.locator('#mode').selectOption('smooth');await host.locator('#lighting').check();await host.locator('#effect-strength').focus();await host.locator('#effect-strength').press('End');for(let i=0;i<7;i++)await host.locator('#effect-strength').press('ArrowLeft');await host.locator('#display button').click();await host.reload();await host.waitForFunction(()=>window.jonesNative);
    assert.equal(await host.locator('#mode').inputValue(),'smooth');assert.equal(await host.locator('#lighting').isChecked(),true);assert.equal(await guest.locator('#mode').inputValue(),'original');assert.equal(await guest.locator('#lighting').isChecked(),false);
  });
  await check('Private is the default and does not publish a room',async()=>{
    await host.locator('#online').click();assert.equal(await host.locator('#public-room').isChecked(),false);await host.locator('#players').selectOption('2');await host.locator('#create').click();await host.waitForFunction(()=>document.querySelector('#invite-link').value.length>0);
    await guest.locator('#online').click();await guest.locator('#find-games').click();await wait(async()=>/best effort/.test(await guest.locator('#discovery-status').textContent()),'public broker connected',20000);
    if(!CLOUD)assert.equal(publications.length,0);
  });
  await check('Explicit public room appears by name and free-seat count in another browser',async()=>{
    await host.locator('#public-room').check();await host.locator('#room-name').fill(roomName);await host.locator('#room-name').press('Tab');
    await wait(async()=>await guest.getByRole('button',{name:`Join ${roomName}`,exact:true}).count()===1,'public announcement');
    const text=await guest.locator('#public-games').textContent();assert.match(text,/1\/2 players · 1 free seat/);
    const room=await snapshot(host);const privateToken=await host.evaluate(()=>{const d=sessionStorage.getItem('jones-online-session');return d?JSON.parse(d)?.credentials?.sessionToken:null;});
    if(!CLOUD)assert(publications.every(raw=>!raw.includes('sessionToken')&&(!privateToken||!raw.includes(privateToken))));
    report.roomCount=room.room.playerCount;await capture(guest,'01-mobile-room-list');
    assert(await guest.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Mobile lobby has no horizontal overflow.');
  });
  await check('Name search and Refresh operate on the actual broker list',async()=>{
    await guest.locator('#room-search').fill('no-such-room-unique');assert.equal(await guest.getByRole('button',{name:`Join ${roomName}`,exact:true}).count(),0);
    await guest.locator('#room-search').fill(roomName);const before=subscriptions.length;await guest.locator('#refresh-games').click();await wait(async()=>await guest.getByRole('button',{name:`Join ${roomName}`,exact:true}).count()===1,'retained refresh');if(!CLOUD)assert(subscriptions.length>before);
    const focusedJoin=guest.getByRole('button',{name:`Join ${roomName}`,exact:true});await focusedJoin.focus();await sleep(2200);assert.equal(await focusedJoin.evaluate(node=>node===document.activeElement),true,'Idle expiry checks preserve keyboard focus.');
    await observer.locator('#online').click();await observer.locator('#find-games').click();await observer.locator('#room-search').fill(roomName);await wait(async()=>await observer.getByRole('button',{name:`Join ${roomName}`,exact:true}).count()===1,'observer sees public room');
  });
  if(!CLOUD)await check('An idle waiting room renews its real retained announcement after thirty seconds',async()=>{
    const matching=()=>publications.filter(Boolean).map(JSON.parse).filter(room=>room.name===roomName);const initial=Math.max(...matching().map(room=>room.updatedAt));
    await wait(()=>matching().some(room=>room.updatedAt-initial>=25000),'periodic announcement renewal',35000);return {renewalObserved:true};
  });
  await check('Join from the list uses actual WebRTC; full room disappears for other browsers',async()=>{
    await guest.getByRole('button',{name:`Join ${roomName}`,exact:true}).click();assert.equal(await guest.evaluate(()=>document.fullscreenElement?.id),'screen','Joining a public room enters fullscreen from the click gesture.');await wait(async()=>{const s=await snapshot(guest);return s.seat===1&&s.room?.status==='waiting';},'guest seat',20000);
    await wait(async()=>await observer.getByRole('button',{name:`Join ${roomName}`,exact:true}).count()===0,'full listing removed');assert.equal((await snapshot(host)).room.seats.length,2);
    await host.locator('#start-online').click();await wait(async()=>{const [a,b]=await Promise.all([snapshot(host),snapshot(guest)]);return a.room?.status==='running'&&b.room?.status==='running'&&a.state&&b.state;},'shared original session');
    for(let i=0;i<8&&(await snapshot(host)).state.dialog!=='select1';i++){const r=await host.locator('#game').boundingBox();await host.mouse.click(r.x+r.width/2,r.y+r.height*.175,{delay:90});await sleep(600);}
    await wait(async()=>(await snapshot(guest)).state?.dialog==='select1','original menu on guest');await capture(host,'02-host-original-menu');await capture(guest,'03-guest-original-menu');
  });
  await check('Private invitation remains available when public broker is unavailable',async()=>{
    const offline=await(await browser.newContext()).newPage(),bad=new URL(url.href);bad.searchParams.set('lobby','ws://127.0.0.1:1/mqtt');await offline.goto(bad.href);await offline.locator('#online').click();await offline.locator('#find-games').click();await wait(async()=>/unavailable/.test(await offline.locator('#discovery-status').textContent()),'clear unavailable status',15000);
    await offline.locator('#close-games').click();await offline.locator('#create').click();await offline.waitForFunction(()=>document.querySelector('#invite-link').value.length>0);assert.match(await offline.locator('#connection').textContent(),/Share the invitation/);await offline.close();
  });
  assert.deepEqual(report.errors,[]);report.ok=true;
}
(async()=>{deadline=setTimeout(()=>{console.error('Discovery browser test deadline exceeded');process.exit(1);},150000);try{await run();}catch(error){report.failure=error.stack;console.error(error);process.exitCode=1;}finally{report.finished=new Date().toISOString();await fs.mkdir(OUTPUT,{recursive:true});await fs.writeFile(path.join(OUTPUT,'report.json'),JSON.stringify(report,null,2));await browser?.close();await fixture?.close();if(wss){for(const c of wss.clients)c.terminate();await new Promise(r=>wss.close(r));await new Promise(r=>http.close(r));await new Promise(r=>broker.close(r));}clearTimeout(deadline);}})();
