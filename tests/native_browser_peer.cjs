// SPDX-License-Identifier: GPL-3.0-or-later
// Real production UI + PeerJS + WebRTC; original inputs, read-only diagnostics.
// Default: static build/native and an isolated real local PeerServer.
// JONES_PEER_CLOUD=1 separately checks public signaling, without URL overrides.
// In cloud mode JONES_NATIVE_URL may target a deployed static build; no local
// server is started then. JONES_PEER_OUTPUT keeps each delivery's evidence apart.
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
const path=require('node:path');
const {createHash}=require('node:crypto');
const {chromium}=require('playwright');
const {startPeerFixture}=require('./native_peer_signaling.cjs');
const ROOT=path.resolve(__dirname,'..');
const CLOUD=process.env.JONES_PEER_CLOUD==='1',SAVE_KEY='jones-peer-save-v1-2';
const REMOTE=process.env.JONES_NATIVE_URL;
const OUTPUT=process.env.JONES_PEER_OUTPUT?path.resolve(ROOT,process.env.JONES_PEER_OUTPUT):path.join(ROOT,'build/native-peer-evidence');
const report={started:new Date().toISOString(),subject:'Static production native game; two isolated browsers; real PeerJS WebRTC',signaling:CLOUD?'public PeerJS cloud':'local official PeerServer (CI)',publicCloudVerified:false,checks:[],screenshots:[],errors:[],resourceErrors:[],requests:[],loadedScripts:[],websockets:[],rtc:[],ok:false};
let browser,host,guest,fixture,deadline,targetUrl;
const pendingResources=[];
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const hash=value=>createHash('sha256').update(JSON.stringify(value)).digest('hex');
// Never persist invitation/private reconnect credentials in reports.
const endpoint=raw=>{const u=new URL(raw);return u.origin+u.pathname;};
async function snapshot(page){return page.evaluate(()=>{const d=window.jonesNative;return d?{state:d.getState(),room:d.getRoom(),seat:d.getSeat(),transport:d.getTransport(),role:d.getPeerRole(),hasRuntime:d.runtime!==undefined}:null;});}
async function wait(page,predicate,label,timeout=20_000){const end=Date.now()+timeout;while(Date.now()<end){const s=await snapshot(page);if(s?.state?.error)throw new Error(s.state.error);if(s&&predicate(s))return s;await delay(80);}const s=await snapshot(page);throw new Error(`Timeout ${label}: ${JSON.stringify({state:s?.state,seat:s?.seat,role:s?.role,roomStatus:s?.room?.status,owner:s?.room?.inputOwner})}`);}
async function check(name,fn){const start=Date.now();try{const details=await fn();report.checks.push({name,ok:true,milliseconds:Date.now()-start,...(details?{details}:{})});console.log('PASS',name);}catch(error){report.checks.push({name,ok:false,milliseconds:Date.now()-start});throw error;}}
async function click(page,x,y,settle=180){const b=await page.locator('#game').boundingBox();assert(b);await page.mouse.click(b.x+x*b.width/320,b.y+y*b.height/200,{delay:100});await delay(settle);}
async function capture(page,name){const file=path.join(OUTPUT,`${name}.png`);await page.screenshot({path:file,mask:[page.locator('#invite-link'),page.locator('#invitation')]});const s=await snapshot(page);report.screenshots.push({name,path:path.relative(ROOT,file),seat:s?.seat,role:s?.role,dialog:s?.state?.dialog,player:s?.state?.currentPlayer,connection:await page.locator('#connection').textContent(),networkStatus:await page.locator('#network-status').textContent()});}
async function sharedFrame(label){
  for(let attempt=0;attempt<45;attempt++){
    const read=page=>page.evaluate(()=>{const f=window.jonesNative.getFrame();return f?{width:f.width,height:f.height,pixels:f.pixels,palette:f.palette,cursor:f.cursor,hd:f.hd}:null;});
    const [a,b]=await Promise.all([read(host),read(guest)]);
    if(a&&b&&hash(a)===hash(b)){assert.equal(Buffer.from(a.pixels,'base64').length,64000);return {label,sha256:hash(a),pixels:64000};}
    await delay(80);
  }throw new Error(label+': host and guest original frames did not converge');
}
async function pageFor(context,label){
  const page=await context.newPage();
  page.on('pageerror',error=>report.errors.push({page:label,message:error.message}));
  page.on('websocket',socket=>report.websockets.push({page:label,endpoint:endpoint(socket.url())}));
  page.on('request',request=>{report.requests.push({page:label,method:request.method(),endpoint:endpoint(request.url())});if(/scummvm|\.wasm(?:$|\?)/i.test(request.url()))report.errors.push({page:label,message:'Unexpected interpreter request'});});
  page.on('response',response=>{
    if(response.status()>=400&&new URL(response.url()).origin===new URL(targetUrl).origin)report.resourceErrors.push({page:label,path:new URL(response.url()).pathname,status:response.status()});
    if(response.ok()&&response.request().resourceType()==='script')pendingResources.push(response.body().then(bytes=>report.loadedScripts.push({page:label,url:endpoint(response.url()),sha256:createHash('sha256').update(bytes).digest('hex')})).catch(error=>report.resourceErrors.push({page:label,path:new URL(response.url()).pathname,error:'Cannot read loaded script: '+error.message})));
  });
  page.on('requestfailed',request=>{const error=request.failure()?.errorText;if(!error?.includes('ERR_ABORTED')&&new URL(request.url()).origin===new URL(targetUrl).origin)report.resourceErrors.push({page:label,path:new URL(request.url()).pathname,error});});
  // Observe the browser's actual peer connections; do not substitute signaling,
  // data channels, game input or authoritative state.
  await page.addInitScript(()=>{const Original=window.RTCPeerConnection;window.__observedPeerConnections=[];window.RTCPeerConnection=class extends Original{constructor(...args){super(...args);window.__observedPeerConnections.push(this);}};});
  return page;
}
async function rtcStats(page,label){
  const stats=await page.evaluate(async()=>{const output=[];for(const pc of window.__observedPeerConnections??[]){const stats=await pc.getStats();output.push({state:pc.connectionState,ice:pc.iceConnectionState,channels:[...stats.values()].filter(s=>s.type==='data-channel').map(s=>({state:s.state,messagesSent:s.messagesSent,messagesReceived:s.messagesReceived,bytesSent:s.bytesSent,bytesReceived:s.bytesReceived})),pairs:[...stats.values()].filter(s=>s.type==='candidate-pair'&&s.state==='succeeded').map(s=>({nominated:s.nominated,bytesSent:s.bytesSent,bytesReceived:s.bytesReceived}))});}return output;});
  report.rtc.push({page:label,connections:stats});
  assert(stats.some(pc=>pc.state==='connected'&&pc.channels.some(c=>c.bytesSent>0&&c.bytesReceived>0)),label+' must have a connected real WebRTC data channel with traffic in both directions');
  return {connections:stats.length,connected:stats.filter(pc=>pc.state==='connected').length};
}
async function ready(page,dialog){return wait(page,s=>s.state?.dialog===dialog&&s.state?.trace?.at(-1)===({bank:'204:bank.doit',lowcost:'200:lowcost.doit'}[dialog]),'original '+dialog+' ready',25_000);}
async function run(){
  await fs.mkdir(OUTPUT,{recursive:true});
  assert(!REMOTE||CLOUD,'JONES_NATIVE_URL is supported only with JONES_PEER_CLOUD=1');
  if(REMOTE){const remote=new URL(REMOTE);assert(['http:','https:'].includes(remote.protocol)&&!remote.username&&!remote.password&&!remote.hash,'Remote build must be an HTTP(S) page URL without credentials or invitation');assert(!remote.searchParams.has('signal')&&!remote.searchParams.has('ice'),'Cloud verification must use the default public signaling configuration');targetUrl=remote.href;}
  else {fixture=await startPeerFixture(path.join(ROOT,'build/native'),{cloud:CLOUD});targetUrl=fixture.url;}
  report.source={kind:REMOTE?'remote static URL':'local static-only fixture',url:endpoint(targetUrl),...(fixture?{build:'build/native',rejectsWebSocketUpgrades:true}:{})};
  report.gameServerStartedByTest=false;
  browser=await chromium.launch({headless:true,executablePath:process.env.JONES_BROWSER_EXECUTABLE||chromium.executablePath(),args:['--no-sandbox']});
  report.browser={name:'Chromium',version:browser.version(),executable:process.env.JONES_BROWSER_EXECUTABLE||chromium.executablePath(),contexts:'Two isolated contexts in the same browser process and machine'};
  const hostContext=await browser.newContext({viewport:{width:1280,height:800}}),guestContext=await browser.newContext({viewport:{width:1280,height:800}});
  host=await pageFor(hostContext,'host');guest=await pageFor(guestContext,'guest');let roomId,invitation;
  await check('Default online UI creates and joins via a shareable peer invitation',async()=>{
    await host.goto(targetUrl);await host.locator('#online').click();await host.locator('#players').selectOption('2');
    if(await host.locator('#server').count())assert.equal(await host.locator('#server').isVisible(),false,'The default peer flow must not require a game server field');
    await host.locator('#create').click();await host.waitForFunction(()=>document.querySelector('#invite-link').value.length>0);
    invitation=await host.locator('#invite-link').inputValue();
    const h=await wait(host,s=>s.seat===0&&s.room?.status==='waiting','host peer seat');roomId=h.room.roomId;
    assert.equal(h.transport,'peer');assert.equal(h.role,'host');
    const invite=new URL(invitation);assert.equal(invite.origin,new URL(targetUrl).origin);
    if(!CLOUD){assert.equal(invite.searchParams.get('signal'),fixture.signalUrl);assert.equal(invite.searchParams.get('ice'),'local');}
    assert(!invite.hash.includes('server='),'Default invitation must not specify a gameplay WebSocket server');
    await guest.goto(invitation);await guest.locator('#join').click();const g=await wait(guest,s=>s.seat===1&&s.room?.roomId===roomId,'guest peer seat');
    assert.equal(g.transport,'peer');assert.equal(g.role,'guest');assert.equal(g.hasRuntime,false,'Guest must not simulate the game');
    await host.waitForFunction(()=>!document.querySelector('#start-online').disabled);
    assert.equal((await snapshot(host)).room.seats.filter(s=>s.connected).length,2);assert.equal(await guest.locator('#start-online').isVisible(),false);
    return {hostSeat:0,guestSeat:1,players:2,signaling:report.signaling};
  });
  await check('Host starts the shared original game over an actual WebRTC data channel',async()=>{
    await host.locator('#start-online').click();await Promise.all([wait(host,s=>s.room?.status==='running'&&s.state,'host started'),wait(guest,s=>s.room?.status==='running'&&s.state,'guest started')]);
    for(let count=0;count<8&&(await snapshot(host)).state.dialog!=='select1';count++){await click(host,160,35);await delay(650);}
    await wait(host,s=>s.state?.dialog==='select1','original main menu');await wait(guest,s=>s.state?.dialog==='select1','guest main menu');
    await rtcStats(host,'host before reconnect');await rtcStats(guest,'guest before reconnect');
    await capture(host,'01-host-original-menu');await capture(guest,'02-guest-original-menu');return sharedFrame('original main menu');
  });
  await check('Wrong-seat mouse input cannot advance the original shared menu',async()=>{
    await click(guest,160,70);await delay(300);assert.equal((await snapshot(host)).state.dialog,'select1');assert.equal((await snapshot(guest)).state.dialog,'select1');
    assert.match(await guest.locator('#network-status').textContent(),/Player 1/i);return sharedFrame('wrong-seat input rejected');
  });
  await check('Guest chooses local HD while host keeps Original on the identical authoritative scene',async()=>{
    await guest.locator('#settings').click();await guest.locator('#graphics-pack').selectOption('hd');await guest.locator('#lighting').check();await guest.locator('#display button').click();
    await guest.waitForFunction(()=>window.jonesNative.getDisplay().hd.ready&&window.jonesNative.getDisplay().hd.layers>0);
    assert.equal(await host.locator('#graphics-pack').inputValue(),'original');
    assert.equal(await guest.locator('#graphics-pack').inputValue(),'hd');
    assert.equal((await snapshot(guest)).hasRuntime,false);
    await capture(guest,'02b-guest-hd-menu');return sharedFrame('different local packs, identical complete scene');
  });
  await check('A real guest reload and Resume reconnect the same seat without a local game',async()=>{
    await guest.reload();await guest.waitForFunction(()=>window.jonesNative);
    if(!await guest.locator('#network').isVisible())await guest.locator('#online').click();
    await guest.locator('#resume-online').click();const g=await wait(guest,s=>s.seat===1&&s.room?.status==='running'&&s.state?.dialog==='select1','guest resumed');
    assert.equal(g.room.roomId,roomId);assert.equal(g.role,'guest');assert.equal(g.hasRuntime,false);
    await guest.waitForFunction(()=>window.jonesNative.getDisplay().hd.ready&&window.jonesNative.getDisplay().hd.layers>0);
    assert.equal(await guest.locator('#graphics-pack').inputValue(),'hd');
    await rtcStats(guest,'guest after actual reload');await capture(guest,'03-guest-resumed');return sharedFrame('reconnected original scene');
  });
  await check('Room count is enforced by the original player-count controls',async()=>{
    await click(host,160,70);await wait(host,s=>s.state?.dialog==='select1b','original player count');
    await click(host,224,110);await wait(host,s=>!!s.state?.connectionNotice,'mismatched count notice');assert.equal((await snapshot(host)).state.dialog,'select1b');assert.match(await host.locator('#network-status').textContent(),/Choose 2/i);
    await click(host,140,110);await wait(host,s=>s.state?.dialog==='select2'&&s.room?.inputOwner===0,'first character');
    assert.equal((await snapshot(host)).state.connectionNotice,null);await capture(host,'04-two-player-count-accepted');return sharedFrame('two-player setup');
  });
  await check('Both real peers complete their own original character and goal screens',async()=>{
    await click(host,84,156);await wait(host,s=>s.state?.dialog==='select3'&&s.room?.inputOwner===0,'host goals');
    await click(host,224,156);await wait(guest,s=>s.state?.dialog==='select2'&&s.room?.inputOwner===1,'guest character');
    await click(host,135,156);assert.equal((await snapshot(host)).state.dialog,'select2','Host must no longer control guest setup');
    await click(guest,135,156);await wait(guest,s=>s.state?.dialog==='select3'&&s.room?.inputOwner===1,'guest goals');await capture(guest,'05-guest-original-goals');
    await host.locator('#connection-settings').click();assert.equal(await host.locator('#network').isVisible(),true);
    await click(guest,224,156);const firstTurn=await wait(host,s=>s.state?.currentPlayer==='player1'&&!s.state?.dialog&&s.room?.inputOwner===0&&s.state.locationInputEnabled===true&&s.state.turnTransitionActive===false,'first original human turn accepts locations');
    assert.equal(await host.locator('#network').isVisible(),true,'Incoming original game frames must keep the host Connection/Leave controls accessible');
    await host.locator('#close-online').click();assert.equal(await host.locator('#network').isVisible(),false);
    await delay(500);await capture(host,'06-first-original-turn');return {connectionDialogSurvivedIncomingFrame:true,readyTick:firstTurn.state.ticks,locationInputEnabled:firstTurn.state.locationInputEnabled,turnTransitionActive:firstTurn.state.turnTransitionActive,turnStartCount:firstTurn.state.turnStartCount,...await sharedFrame('first human turn')};
  });
  await check('Original F5/F7 saves on the host and restores shared original bank state',async()=>{
    await click(host,37,139);await ready(host,'bank');assert.equal((await snapshot(host)).state.cash,200);
    await host.keyboard.press('F5');await delay(350);await click(host,199,119);
    await host.waitForFunction(key=>!!localStorage.getItem(key),SAVE_KEY);
    const saved=await host.evaluate(key=>{const text=localStorage.getItem(key),data=JSON.parse(text);return {format:data.format,bytes:text.length};},SAVE_KEY);
    assert.equal(saved.format,'jones-native');assert(saved.bytes>1000);await ready(host,'bank');
    await click(host,199,82);await wait(host,s=>s.state?.cash===100,'original bank deposit');await ready(host,'bank');await wait(guest,s=>s.state?.cash===100,'guest receives bank change');
    await host.keyboard.press('F7');await delay(350);await click(host,182,103);
    await wait(host,s=>s.state?.cash===200&&s.state?.dialog==='bank','host original restore');await ready(host,'bank');await wait(guest,s=>s.state?.cash===200&&s.state?.dialog==='bank','shared restored bank');
    await capture(host,'07-host-original-restored-bank');await capture(guest,'08-guest-original-restored-bank');return {...saved,...await sharedFrame('original restored bank')};
  });
  await check('Original Relax actions finish player one and transfer gameplay to the guest',async()=>{
    // Sample after F7: the original save/menu code can reset this counter.
    // It is a comparison across this one turn, not a global monotonic epoch.
    const previousTurnStartCount=(await snapshot(host)).state.turnStartCount;
    assert(Number.isInteger(previousTurnStartCount),'Original start-turn counter is available after restore');
    await click(host,229,157);await wait(host,s=>!s.state?.dialog,'bank closed');await click(host,160,25);await ready(host,'lowcost');
    // Ten original six-hour Relax actions consume the available first turn.
    // The game, not this test, clamps time and decides when the turn ends.
    for(let n=0;n<10;n++)await click(host,94,156,800);
    await host.keyboard.press('Enter');await delay(400);
    for(let n=0;n<3;n++){const s=await snapshot(host);if(s.room?.inputOwner!==0||s.state?.dialog!=='lowcost')break;await click(host,224,156,900);}
    // Original room1 switches players before the marble finishes its return.
    // Place.handleEvent requires global474; global460 covers the earlier turn
    // transition while global474 can still contain the previous player's value.
    // startTrn increments global481 only after clearing global474. Require
    // that actual new start as well as the game's own location-input gate.
    const secondTurn=await wait(guest,s=>s.state?.currentPlayer==='player2'&&!s.state?.dialog&&s.room?.inputOwner===1&&s.state.locationInputEnabled===true&&s.state.turnTransitionActive===false&&s.state.turnStartCount!==previousTurnStartCount,'original second human turn accepts locations',30_000);
    await click(host,160,25);await delay(250);assert.equal((await snapshot(guest)).state.dialog,null,'Former owner cannot open the guest home');
    await click(guest,160,25);await ready(guest,'lowcost');assert.equal((await snapshot(guest)).state.currentPlayer,'player2');
    await capture(guest,'09-second-human-controls-home');return {readyTick:secondTurn.state.ticks,locationInputEnabled:secondTurn.state.locationInputEnabled,turnTransitionActive:secondTurn.state.turnTransitionActive,previousTurnStartCount,turnStartCount:secondTurn.state.turnStartCount,guestHomeClicks:1,...await sharedFrame('guest original human turn')};
  });
  await check('Closing the real host page gives the guest actionable host-loss status',async()=>{
    await host.close();
    await guest.waitForFunction(()=>/host/i.test(document.querySelector('#network-status').textContent+' '+document.querySelector('#connection').textContent)&&/clos|disconnect|left|ended|unavailable/i.test(document.querySelector('#network-status').textContent+' '+document.querySelector('#connection').textContent),null,{timeout:15_000});
    const status=await guest.locator('#network-status').textContent(),connection=await guest.locator('#connection').textContent();
    await capture(guest,'10-host-page-closed');return {status,connection};
  });
  await check('A fresh host page and new invitation restore the device save through the original menu',async()=>{
    // The original host page is gone. This new page shares only that browser
    // context's real device storage; it receives no injected game or seat state.
    host=await pageFor(hostContext,'recreated host');await host.goto(targetUrl);
    await host.locator('#online').click();await host.locator('#players').selectOption('2');await host.locator('#create').click();
    await host.waitForFunction(()=>document.querySelector('#invite-link').value.length>0);
    const newInvitation=await host.locator('#invite-link').inputValue();
    const h=await wait(host,s=>s.seat===0&&s.room?.status==='waiting','recreated host room');
    assert.notEqual(h.room.roomId,roomId,'Recovery creates a new room, never reuses a lost host seat');
    // Opening the newly shared link must load the page, not merely change the
    // fragment of the old room. No old reconnect state is supplied to Join.
    await guest.goto('about:blank');await guest.goto(newInvitation);await guest.locator('#join').click();
    await wait(guest,s=>s.seat===1&&s.room?.roomId===h.room.roomId,'guest joins the new invitation');
    await host.waitForFunction(()=>!document.querySelector('#start-online').disabled);await host.locator('#start-online').click();
    await wait(host,s=>s.room?.status==='running'&&s.state,'recreated host started');
    for(let count=0;count<8&&(await snapshot(host)).state.dialog!=='select1';count++){await click(host,160,35);await delay(650);}
    await wait(host,s=>s.state?.dialog==='select1','recreated original main menu');
    await click(host,165,105,350);await click(host,182,103);
    await wait(host,s=>s.state?.cash===200&&s.state?.dialog==='bank','saved bank restored in new room');await ready(host,'bank');
    await wait(guest,s=>s.state?.cash===200&&s.state?.dialog==='bank','new guest receives restored bank');
    await capture(host,'11-new-host-original-restored-bank');await capture(guest,'12-new-guest-original-restored-bank');
    await rtcStats(host,'recreated host live transport');await rtcStats(guest,'rejoined guest live transport');
    return {newRoom:true,hostSeat:0,guestSeat:1,cash:200,...await sharedFrame('saved original game in recreated room')};
  });
  await check('Observed production traffic uses peer signaling and WebRTC without a game-server connection',async()=>{
    await Promise.all(pendingResources);
    assert(report.websockets.length>=2,'Actual PeerJS signaling sockets were observed');
    const staticOrigin=new URL(targetUrl).origin.replace(/^http/,'ws');
    for(const socket of report.websockets){assert(!socket.endpoint.includes('/multiplayer'),'No game-server WebSocket');assert.notEqual(new URL(socket.endpoint).origin,staticOrigin,'No gameplay WebSocket connects to the static host');if(!CLOUD)assert.equal(new URL(socket.endpoint).port,new URL(fixture.signalUrl).port);}
    assert(!report.requests.some(r=>/\/multiplayer(?:\/|$)/.test(new URL(r.endpoint).pathname)));assert.deepEqual(report.resourceErrors,[]);assert.deepEqual(report.errors,[]);
    return {observedBrowserRequests:report.requests.length,observedGameServerRequests:0,signalingSockets:report.websockets.length,...(fixture?{localStaticFixtureRequests:fixture.requests.length}:{})};
  });
  report.publicCloudVerified=CLOUD;report.ok=true;
}
Promise.race([run(),new Promise((_,reject)=>{deadline=setTimeout(()=>reject(new Error('Peer browser journey exceeded its 175-second budget')),175_000);})])
  .catch(async error=>{report.failure=error.stack;console.error(error);process.exitCode=1;for(const [page,name] of [[host,'failure-host'],[guest,'failure-guest']])if(page&&!page.isClosed())try{await capture(page,name);}catch{}})
  .finally(async()=>{clearTimeout(deadline);report.finished=new Date().toISOString();await fs.mkdir(OUTPUT,{recursive:true});await fs.writeFile(path.join(OUTPUT,'report.json'),JSON.stringify(report,null,2));await browser?.close();await fixture?.close();});
