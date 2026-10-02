// SPDX-License-Identifier: GPL-3.0-or-later
import { NativeAudioPlayer } from './audio/player.js';
import { ThreeRenderer, type DisplayMode } from './graphics/ThreeRenderer.js';
import type { GraphicsFrame, NativeAssetManifest } from './graphics/index.js';
import { createNativeSession, type NativeSession } from './session.js';
import { BrowserNetworkClient } from './network/client.js';
import type { GameInput, PlayerCount, Serializable, Credentials } from './network/types.js';

const $=<T extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id) as T;
const canvas=$<HTMLCanvasElement>('game'),screen=$('screen');
$<HTMLInputElement>('server').value=`${location.protocol==='https:'?'wss':'ws'}://${location.port==='8767'?location.hostname+':8787':location.host}/multiplayer`;
let assets:NativeAssetManifest,renderer:ThreeRenderer,session:NativeSession|undefined,network:BrowserNetworkClient|undefined,timer:any;
let onlineState:Serializable=null,onlineFrame:Serializable=null;
const audio=new NativeAudioPlayer({baseUrl:new URL('./assets/',location.href).href,onError:error=>{$('network-status').hidden=false;$('network-status').textContent=error.message;}});
const saveKey='jones-native-save-v1';
let resume:{server:string;credentials:Credentials}|undefined;
try{const value=JSON.parse(sessionStorage.getItem('jones-online-session')??'null');if(value?.server&&value?.credentials?.sessionToken)resume=value;}catch{}
const status=(message:string)=>{$('connection').textContent=message;};
function fail(error:unknown){$('error').textContent=error instanceof Error?error.message:String(error);$('failure').hidden=false;console.error(error);}
function updateState(state:Serializable,owner?:number|null) {
  if(network)onlineState=state;
  if((state as any)?.audio)audio.sync((state as any).audio);
  if(state&&typeof state==='object'&&!Array.isArray(state)&&(state as any).error)fail((state as any).error);
  if((state as any)?.finished){
    clearInterval(timer);network?.disconnect();network=undefined;
    $('network-status').hidden=true;$('launch').hidden=false;return;
  }
  if(network) {if(owner!==network.credentials?.seat)renderer?.setPointer();$('network-status').hidden=false;$('network-status').textContent=(state as any)?.connectionNotice??((state as any)?.dialog==='select1b'?`Choose ${network.room?.playerCount} players in the original menu.`:owner==null?'Please wait…':owner===network.credentials?.seat?'Your turn':`Player ${owner+1}'s turn`);}
}
async function enterFullscreen(){if(!document.fullscreenElement)await screen.requestFullscreen();}
async function fullscreen(){if(!document.fullscreenElement)await enterFullscreen();else await document.exitFullscreen();}
function begin(){ $('launch').hidden=true;canvas.focus(); }
function localPlay(){
  session?.stop();clearInterval(timer);begin();const bytes=new Uint32Array(1);crypto.getRandomValues(bytes);
  let save:string|null=null;try{save=localStorage.getItem(saveKey);}catch{}
  session=createNativeSession({seed:bytes[0],playerCount:4,assetManifest:assets as unknown as Serializable,
    onFrame:frame=>renderer.applyFrame(frame as unknown as GraphicsFrame),onState:updateState,save:save??undefined,
    onSave:value=>{try{localStorage.setItem(saveKey,value);}catch{throw new Error('The browser could not save your game.');}}});
  session.start();timer=setInterval(()=>session!.tick(),1000/60);
}
function send(input:GameInput){if(network){if(network.canInput)void network.sendInput(input).catch(e=>status(e.message));}else session?.handleInput(input);}
for(const [event,action] of [['pointermove','move'],['pointerdown','down'],['pointerup','up']] as const)canvas.addEventListener(event,e=>{
  e.preventDefault();const point=renderer?.clientToGame(e.clientX,e.clientY);if(!point)return;
  if(!network||network.canInput)renderer.setPointer(point);if(action==='down')canvas.setPointerCapture(e.pointerId);
  send({type:'pointer',action,x:point.x,y:point.y,button:Math.min(2,e.button<0?0:e.button) as 0|1|2});
});
canvas.addEventListener('contextmenu',e=>e.preventDefault());
window.addEventListener('keydown',e=>{if(document.querySelector('dialog[open]')||!$('launch').hidden)return;e.preventDefault();if(!e.repeat)send({type:'key',action:'down',key:e.key});});
window.addEventListener('keyup',e=>{if(document.querySelector('dialog[open]')||!$('launch').hidden)return;e.preventDefault();send({type:'key',action:'up',key:e.key});});
$('play').onclick=()=>{void audio.unlock();void enterFullscreen().catch(()=>{});localPlay();};
$('fullscreen').onclick=()=>void fullscreen().catch(fail);
$('reload').onclick=()=>location.reload();
$('settings').onclick=()=>$<HTMLDialogElement>('display').showModal();
function configure(){renderer.setOptions({mode:$<HTMLSelectElement>('mode').value as DisplayMode,resolutionHeight:Number($<HTMLSelectElement>('resolution').value)});}
$('mode').onchange=configure;$('resolution').onchange=configure;
$('online').onclick=()=>{$<HTMLDialogElement>('network').showModal();};
$('close-online').onclick=()=>{$<HTMLDialogElement>('network').close();};
function connect(credentials?:Credentials){
  session?.stop();session=undefined;clearInterval(timer);network?.disconnect();const url=$<HTMLInputElement>('server').value;
  network=new BrowserNetworkClient({url,credentials,
    onFrame:frame=>{onlineFrame=frame;renderer.applyFrame(frame as unknown as GraphicsFrame);if(network?.room?.status==='running'){begin();$<HTMLDialogElement>('network').close();}},
    onState:(state,owner)=>updateState(state,owner),onStatus:s=>status(s==='connected'?'Connected':s==='reconnecting'?'Reconnecting…':s==='connecting'?'Connecting…':'Disconnected'),
    onError:error=>status(error.message),
    onCredentials:c=>{try{if(c)sessionStorage.setItem('jones-online-session',JSON.stringify({server:url,credentials:c}));else sessionStorage.removeItem('jones-online-session');}catch{}},
    onRoom:room=>{const connected=room.seats.filter(s=>s.connected).length;status(`${connected} of ${room.playerCount} players connected. Choose ${room.playerCount} players in the original game menu.`);$('start-online').hidden=network?.credentials?.seat!==0||room.status!=='waiting';$<HTMLButtonElement>('start-online').disabled=connected!==room.playerCount;}
  });return network;
}
$('create').onclick=()=>void(async()=>{
  void audio.unlock();const client=connect(),c=await client.createRoom(Number($<HTMLSelectElement>('players').value) as PlayerCount);
  const invite=new URL(location.href);invite.hash=new URLSearchParams({room:c.roomId,invite:c.joinToken,server:$<HTMLInputElement>('server').value}).toString();
  $('invite-label').hidden=false;$<HTMLInputElement>('invite-link').value=invite.href;status(`Choose ${client.room!.playerCount} players in the original game menu.`);
})().catch(e=>status(e.message));
$('join').onclick=()=>void(async()=>{
  void audio.unlock();void enterFullscreen().catch(()=>{});const invite=new URL($<HTMLInputElement>('invitation').value),params=new URLSearchParams(invite.hash.slice(1));
  $<HTMLInputElement>('server').value=params.get('server')??$<HTMLInputElement>('server').value;
  await connect().joinRoom(params.get('room')??'',params.get('invite')??'');
})().catch(e=>status(e.message));
$('start-online').onclick=()=>{void audio.unlock();void enterFullscreen().catch(()=>{});void network?.start().catch(e=>status(e.message));};
$('resume-online').onclick=()=>void(async()=>{if(!resume)return;void audio.unlock();void enterFullscreen().catch(()=>{});$<HTMLInputElement>('server').value=resume.server;await connect(resume.credentials).connect();})().catch(e=>status(e.message));
window.addEventListener('pagehide',()=>{clearInterval(timer);session?.stop();network?.disconnect();renderer?.dispose();void audio.dispose();});
void(async()=>{
  const response=await fetch('./assets/manifest.json');if(!response.ok)throw new Error('Game artwork could not be loaded.');
  assets=await response.json();renderer=new ThreeRenderer(canvas,assets,{mode:'original'});
  // Diagnostics expose snapshots, never a second simulation or network credentials.
  (window as any).jonesNative={getState:()=>session?.getState()??onlineState,getFrame:()=>session?.getFrame()??onlineFrame,getRoom:()=>network?.room,getSeat:()=>network?.credentials?.seat,get runtime(){return session?.runtime;}};
  $('loading').textContent='';$<HTMLButtonElement>('play').disabled=false;$<HTMLButtonElement>('online').disabled=false;
  $('resume-online').hidden=!resume;
  if(new URLSearchParams(location.hash.slice(1)).has('room')) {$<HTMLInputElement>('invitation').value=location.href;$<HTMLDialogElement>('network').showModal();}
})().catch(fail);
