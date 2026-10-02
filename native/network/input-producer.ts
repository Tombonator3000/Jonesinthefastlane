// SPDX-License-Identifier: GPL-3.0-or-later
import type { GameInput } from './types.js';

interface InputProducerOptions {
  canInput():boolean;
  sendInput(input:GameInput):Promise<void>;
  onError(error:unknown):void;
}
/** Coalesce pointer positions before allocating network requests/sequences.
 * MOVE only updates the original pointer; clicks/keys produce SCI events and
 * form strict ordering barriers. Already-issued requests are never replaced. */
export class NetworkInputProducer {
  private pendingMove:GameInput|undefined;
  private timer:ReturnType<typeof setTimeout>|undefined;
  private movesInFlight=0;
  private epoch=0;
  private closed=false;
  constructor(private readonly options:InputProducerOptions){}

  send(input:GameInput):void {
    if(this.closed)return;
    if(!this.options.canInput()){this.reset();return;}
    if(input.type==='pointer'&&input.action==='move'){
      this.pendingMove={...input};this.scheduleMove();
    }else{
      // Key events sample the current original pointer; flush before both keys
      // and pointer buttons, even if an earlier MOVE is still awaiting its ACK.
      this.flushMove();this.dispatch(input);
    }
  }
  /** Revoke unsent positions and completion callbacks from a former turn/link. */
  reset():void {
    this.epoch++;this.pendingMove=undefined;this.movesInFlight=0;
    if(this.timer!==undefined)clearTimeout(this.timer);this.timer=undefined;
  }
  dispose():void {this.closed=true;this.reset();}
  private scheduleMove(){
    if(this.pendingMove&&this.movesInFlight===0&&this.timer===undefined)
      this.timer=setTimeout(()=>this.flushMove(),1000/60);
  }
  private flushMove(){
    if(this.timer!==undefined)clearTimeout(this.timer);this.timer=undefined;
    const input=this.pendingMove;this.pendingMove=undefined;
    if(input)this.dispatch(input);
  }
  private dispatch(input:GameInput){
    if(this.closed)return;
    if(!this.options.canInput()){this.reset();return;}
    const epoch=this.epoch,isMove=input.type==='pointer'&&input.action==='move';
    if(isMove)this.movesInFlight++;
    const settled=(failed:boolean,error?:unknown)=>{
      if(this.closed||epoch!==this.epoch)return;
      if(failed){this.reset();this.options.onError(error);return;}
      if(!this.options.canInput()){this.reset();return;}
      if(isMove){this.movesInFlight--;this.scheduleMove();}
    };
    try{this.options.sendInput(input).then(()=>settled(false),error=>settled(true,error));}
    catch(error){settled(true,error);}
  }
}
