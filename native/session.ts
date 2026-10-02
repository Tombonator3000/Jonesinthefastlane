// SPDX-License-Identifier: GPL-3.0-or-later
import { Runtime, RestartSignal, RestoreSignal, StopSignal } from './runtime/runtime.js';
import { registerAll } from './generated/index.js';
import { GraphicsState, type NativeAssetManifest } from './graphics/index.js';
import {soundSnapshot} from './audio/kernel.js';
import selectors from './runtime/selectors.json';
import type { SessionOptions, SessionRuntime, GameInput, Serializable } from './network/types.js';

export interface NativeSession extends SessionRuntime { runtime:Runtime; graphics:GraphicsState; error:Error|null }
export function createNativeSession(options:SessionOptions & {save?:string;onSave?:(value:string)=>void;enforceRoomPlayerCount?:boolean}):NativeSession {
  const graphics=new GraphicsState(options.assetManifest as unknown as NativeAssetManifest);
  const rt=new Runtime({seed:options.seed,manifest:options.assetManifest,graphics,selectors});
  registerAll(rt);
  rt.saved=options.save??null;rt.onSave=options.onSave;
  let started=false,finished=false,lastRevision=-1,lastOwner:number|null=-1,lastState='';
  let connectionNotice:string|null=null;
  if(options.enforceRoomPlayerCount)rt.filterEvent=event=>{
    const dialog=rt.global(502), active=rt.trace.lastIndexOf('239:select1b.doit');
    // A Print confirmation or menu can be open above this original dialog.
    // Its Enter/clicks are unrelated to selecting the game's player count.
    if(dialog?.name!=='select1b'||active<0||rt.trace.slice(active+1).some(frame=>frame==='255:Dialog.doit'||frame==='997:MenuBar.handleEvent'))return true;
    let chosen:any=null;
    if(event.type===1){
      const window=rt.get(dialog,'window'),port=rt.get(window,'window');
      const point=graphics.globalToLocal(event.x,event.y,port);
      for(let number=1;number<=4;number++){
        const button=rt.object(239,`number${number}`);
        if(point.x>=rt.get(button,'nsLeft')&&point.x<=rt.get(button,'nsRight')&&point.y>=rt.get(button,'nsTop')&&point.y<=rt.get(button,'nsBottom')){chosen=button;break;}
      }
    }else if(event.type===4&&event.message===13)chosen=rt.get(rt.object(891,'KeyMouse'),'curItem');
    const match=chosen?.script===239?/^number([1-4])$/.exec(chosen.name):null;
    if(!match)return true;
    if(Number(match[1])===options.playerCount){connectionNotice=null;return true;}
    connectionNotice=`This online room has ${options.playerCount} player${options.playerCount===1?'':'s'}. Choose ${options.playerCount} in the original player menu.`;
    return false;
  };
  let queuedOwner:number|null=0;
  function syncInputOwner(){
    const owner=session.inputOwner();
    if(owner!==queuedOwner){rt.queue=[];rt.modifiers=0;rt.pointer.down=false;queuedOwner=owner;}
  }
  const session:NativeSession={
    runtime:rt,graphics,error:null,
    start(){if(started)return;started=true;void run();},
    tick(){
      syncInputOwner();
      rt.tick();
      if(graphics.cursor.x!==rt.pointer.x||graphics.cursor.y!==rt.pointer.y)graphics.setCursor(rt.cursor.number,rt.cursor.visible,rt.pointer.x,rt.pointer.y);
      if(graphics.revision!==lastRevision){lastRevision=graphics.revision;options.onFrame(graphics.drainFrame() as unknown as Serializable);}
      const owner=session.inputOwner(),state=JSON.stringify(session.getState());
      if(owner!==lastOwner||state!==lastState){lastOwner=owner;lastState=state;options.onState(JSON.parse(state));}
    },
    stop(){rt.stop();},
    handleInput(input:GameInput){if(!session.error){syncInputOwner();rt.input(input);}},
    getFrame(){return graphics.snapshot() as unknown as Serializable;},
    getState(){return {...rt.snapshotState(),audio:soundSnapshot(rt),connectionNotice,finished,error:session.error?.message??null,errorTrace:(session.error as any)?.sciTrace??null} as unknown as Serializable;},
    inputOwner(){
      if(session.error||rt.stopped)return null;
      const dialog=rt.global(502);
      if(dialog?.name==='select2'||dialog?.name==='select3'){
        const player=rt.global(302);if(player&&rt.get(player,'playing')===29)return 0;
        const index=rt.global(507);return index>=0&&index<options.playerCount?index:null;
      }
      const player=rt.global(302);
      if(!player)return 0;
      // Original winnerScript explicitly enables human acknowledgement while
      // Jones remains the current player. Normal AI turns accept no input.
      if(rt.get(player,'playing')===29)return rt.global(536)?0:null;
      const index=Number(/^player([1-4])$/.exec(player.name)?.[1]??1)-1;
      return index<options.playerCount?index:null;
    },
  };
  async function run() {
    let entry='play';
    while(!rt.stopped) {
      try {
        await rt.send(rt.object(0,'jones'),entry,[]);
        finished=true;rt.soundState.clear();rt.stop();options.onState(session.getState());break;
      }
      catch(error) {
        if(error instanceof StopSignal)break;
        if(error instanceof RestoreSignal) {try{rt.restore(rt.saved!);entry='replay';continue;}catch(e){error=e;}}
        if(error instanceof RestartSignal) {
          const save=rt.saved;
          rt.objects.clear();rt.heap.clear();rt.locals.clear();rt.classes.clear();rt.scripts.clear();
          rt.menus=[];(rt as any).menuValues={};connectionNotice=null;
          rt.soundState.clear();rt.modifiers=0;rt.pointer.down=false;
          registerAll(rt);rt.saved=save;rt.restarting=true;rt.queue=[];(rt as any).actorBits=[];entry='play';continue;
        }
        session.error=error instanceof Error?error:new Error(String(error));rt.stop();
        options.onState(session.getState());
        console.error('Native game stopped:',session.error,(session.error as any).sciTrace);break;
      }
    }
  }
  return session;
}
