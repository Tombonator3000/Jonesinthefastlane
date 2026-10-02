// SPDX-License-Identifier: GPL-3.0-or-later
// The shell hosts the original SCI game. It implements no gameplay rules.
import { Display } from './display.js';

const $ = id => document.getElementById(id);
const canvas = $('canvas');
const screen = $('screen');
const settingsKey = 'jones.original.display.v1';
let running = false;
let display;
let settings = { mode:'classic', resolution:'auto', intensity:.4 };
let noticeTimer;
try {
  const value = JSON.parse(localStorage.getItem(settingsKey));
  if (value && ['classic','smooth','modern','crt'].includes(value.mode) && ['auto','720','1080','1440','2160'].includes(value.resolution) && Number.isFinite(value.intensity)) {
    settings = { mode:value.mode, resolution:value.resolution, intensity:Math.min(1,Math.max(0,value.intensity)) };
  }
} catch { /* Display controls still work with unavailable local storage. */ }
function notice(message, persistent=false) {
  clearTimeout(noticeTimer); $('notice').textContent=message; $('notice').hidden=false;
  if(!persistent)noticeTimer=setTimeout(()=>$('notice').hidden=true,6000);
}
function fit() {
  // SDL changes its backing-buffer dimensions during startup and resize.
  // Layout follows the original game proportions, never that transient buffer.
  const ratio = 320 / 200;
  const width = Math.min(screen.clientWidth, screen.clientHeight * ratio);
  $('stage').style.width = `${width}px`;
  $('stage').style.height = `${width / ratio}px`;
  $('stage').style.maxWidth='none'; $('stage').style.maxHeight='none';
  display?.resize();
}
async function fullscreen() {
  if(!document.fullscreenElement){
    try { await screen.requestFullscreen(); }
    catch { notice('Fullscreen is unavailable here. The game fills this browser tab; use the browser fullscreen command if needed.'); }
  } else { await document.exitFullscreen(); }
  canvas.focus();
}
$('fullscreen').onclick=fullscreen;
document.addEventListener('fullscreenchange',()=>{ $('fullscreen').setAttribute('aria-label',document.fullscreenElement?'Leave fullscreen':'Enter fullscreen'); fit(); });
window.addEventListener('resize',fit);
new MutationObserver(fit).observe(canvas,{attributes:true,attributeFilter:['width','height']});
canvas.addEventListener('contextmenu',event=>event.preventDefault());
canvas.addEventListener('webglcontextlost',()=>{
  notice('The game graphics context was lost. Reload this page to continue, then use Restore Game to open your last saved game.',true);
});
// Keep the game's function keys from refreshing/navigating the browser. SDL still receives them.
document.addEventListener('keydown',event=>{
  // Presentation-dialog keystrokes must never reach the original game.
  if($('settings').open){event.stopPropagation();return;}
  if(running && !$('settings').open && /^F([1-9]|10)$/.test(event.key)) event.preventDefault();
},true);
document.addEventListener('keyup',event=>{if($('settings').open)event.stopPropagation();},true);
$('display-options').onclick=()=>{$('settings').showModal();};
$('settings').addEventListener('close',()=>canvas.focus());
$('mode').value=settings.mode; $('resolution').value=settings.resolution; $('intensity').value=settings.intensity*100;
function changeDisplay(){
  settings={mode:$('mode').value,resolution:$('resolution').value,intensity:Number($('intensity').value)/100};
  display?.setSettings(settings);
  try{localStorage.setItem(settingsKey,JSON.stringify(settings));}catch{/* No gameplay state is stored here. */}
}
$('mode').onchange=changeDisplay; $('resolution').onchange=changeDisplay; $('intensity').oninput=changeDisplay;

async function getGameData(){
  const response=await fetch('game-files.json');
  if(!response.ok)throw new Error('Game data manifest is missing. Build the browser distribution first.');
  const manifest=await response.json();
  if(!Array.isArray(manifest.files)||manifest.files.length!==4)throw new Error('Invalid game manifest.');
  const allowed=new Set(['resource.map','resource.001','resource.002','version']);
  return Promise.all(manifest.files.map(async file=>{
    if(!allowed.delete(file.name)||!/^[a-f0-9]{64}$/.test(file.sha256))throw new Error('Invalid game data entry.');
    const reply=await fetch('game/'+file.name);if(!reply.ok)throw new Error('Unable to load '+file.name+'.');
    const bytes=new Uint8Array(await reply.arrayBuffer());
    if(bytes.length!==file.bytes)throw new Error('Game data size mismatch: '+file.name);
    if(crypto.subtle){
      const digest=await crypto.subtle.digest('SHA-256',bytes);
      const hash=Array.from(new Uint8Array(digest),value=>value.toString(16).padStart(2,'0')).join('');
      if(hash!==file.sha256)throw new Error('Game data checksum mismatch: '+file.name);
    }
    return {name:file.name,bytes};
  }));
}
async function getRuntimeData(){
  const reply=await fetch('vendor/data/index.json');
  if(!reply.ok)throw new Error('The engine data manifest is missing.');
  const index=await reply.json();
  return Promise.all(Object.entries(index).map(async([name,length])=>{
    if(!/^[a-zA-Z0-9_.-]+$/.test(name)||!Number.isSafeInteger(length)||length<0)throw new Error('Invalid engine data entry.');
    const response=await fetch('vendor/data/'+name);
    if(!response.ok)throw new Error('Unable to load engine data: '+name);
    const bytes=new Uint8Array(await response.arrayBuffer());
    if(bytes.length!==length)throw new Error('Engine data size mismatch: '+name);
    return {name,bytes};
  }));
}
async function getConfiguration(){
  const reply=await fetch('scummvm.ini');
  if(!reply.ok)throw new Error('The initial engine configuration is missing.');
  return new Uint8Array(await reply.arrayBuffer());
}
async function verifyBrowserSupport(){
  if(typeof WebAssembly!=='object')throw new Error('This browser does not support WebAssembly.');
  // Probe a separate canvas so SDL still creates its own retained context.
  const probe=document.createElement('canvas');
  const context=probe.getContext('webgl2') || probe.getContext('webgl');
  if(!context)throw new Error('WebGL is unavailable. Enable hardware acceleration or use a browser with WebGL support.');
  context.getExtension('WEBGL_lose_context')?.loseContext();
  // ScummVM requires IDBFS during startup. Report denied storage before its
  // native initialization, without opening or changing any existing save DB.
  await new Promise((resolve,reject)=>{
    const name='jones-storage-probe-'+Date.now()+'-'+Math.random().toString(16).slice(2);
    let request;
    const fail=()=>reject(new Error('Browser storage is unavailable. Allow site storage to start the game and keep its original saves.'));
    try{
      request=indexedDB.open(name,1);
      request.onerror=fail;
      request.onblocked=fail;
      request.onsuccess=()=>{request.result.close();try{indexedDB.deleteDatabase(name);}catch{/* Probe contains no user data. */}resolve();};
    }catch{fail();}
  });
}
function stopWithError(message){
  $('launch').hidden=false; $('start').hidden=true;
  $('status').textContent=message+' Reload the page to try again.';
}
$('start').onclick=async()=>{
  if(running)return;
  running=true; $('start').disabled=true;
  // Fullscreen requires this direct user gesture, before any downloads are awaited.
  const fullscreenRequest=fullscreen();
  $('status').textContent='Loading the original game…';
  try{
    await verifyBrowserSupport();
    const [files,runtimeFiles,configuration]=await Promise.all([getGameData(),getRuntimeData(),getConfiguration()]);
    await fullscreenRequest;
    window.httpFsIndexCache={'/data/index.json':'{}'};
    window.Module={
      canvas,
      hostManagedFullscreen:true,
      arguments:['--config=/home/web_user/scummvm.ini','--initial-cfg=/runtime/scummvm.ini','--path=/games/jones','--savepath=/home/web_user','--extrapath=/runtime','--themepath=/runtime','--gui-theme=scummmodern','--no-fullscreen','--no-aspect-ratio','--scaler=normal','--scale-factor=1','--music-driver=adlib','--language=en','sci:jones'],
      locateFile:path=>'vendor/'+path,
      preRun:[()=>{
        const {FS,ENV}=window.Module;
        ENV.HOME='/home/web_user';
        FS.mkdirTree('/home/web_user');
        FS.mkdirTree('/games/jones');
        FS.mkdirTree('/runtime');
        for(const file of files)FS.writeFile('/games/jones/'+file.name,file.bytes);
        for(const file of runtimeFiles)FS.writeFile('/runtime/'+file.name,file.bytes);
        FS.writeFile('/runtime/scummvm.ini',configuration);
        // ScummVM mounts and restores IDBFS for HOME itself, before main().
      }],
      print:message=>console.info('[ScummVM]',message),
      printErr:message=>{
        console.warn('[ScummVM]',message);
        if(/persist.*fail|syncfs.*error|indexeddb.*error/i.test(String(message)))notice('Browser storage is unavailable. Saved games may not survive closing this page.',true);
      },
      setStatus:message=>{if(message)$('status').textContent='Loading the original game…';},
      onAbort:reason=>stopWithError('The game engine could not start. '+String(reason)),
      onRuntimeInitialized:()=>{
        document.body.classList.add('playing');$('launch').hidden=true;
        display=new Display(canvas,$('display'),{onStatus:info=>{
          $('display-status').textContent=info.message || `${info.renderer || info.backend || 'Original canvas'} · ${info.width || canvas.width} × ${info.height || canvas.height}`;
        }});
        display.setSettings(settings);display.start();fit();canvas.focus();
      },
      onExit:()=>{notice('The game has closed. Reload this page to play again.',true);}
    };
    const script=document.createElement('script');script.src='vendor/scummvm.js';script.onerror=()=>stopWithError('The game engine download failed.');document.body.append(script);
  }catch(error){stopWithError(error.message);}
};
// The engine auto-persists game saves through IDBFS. This flush is an additional
// best effort; normal saves do not depend on a last-moment unload operation.
window.addEventListener('pagehide',()=>{display?.stop();try{window.Module?.FS?.syncfs(false,()=>{});}catch{/* Engine may not have started yet. */}});
window.addEventListener('pageshow',()=>display?.start());
fit();
