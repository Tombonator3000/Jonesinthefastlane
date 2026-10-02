// SPDX-License-Identifier: GPL-3.0-or-later
import { PeerWire } from './peer-wire.js';
import type { Serializable, ServerMessage } from './types.js';

type Snapshot=Extract<ServerMessage,{type:'snapshot'}>;
/** Cache only authority-emitted values, never inspect a live game runtime.
 * The authority emits a commit's frame then state synchronously. A microtask
 * combines these into one complete presentation; frame-only/state-only commits
 * retain the other value from the preceding commit, as reconnect snapshots do.
 * Control messages flush the pending commit before entering the lossless wire. */
export class PeerPresentationSender {
  private frame:Serializable=null;
  private state:Serializable=null;
  private owner:number|null=null;
  private initialized=false;
  private pending:Snapshot|null=null;
  private scheduled=false;
  private closed=false;
  constructor(private readonly wire:PeerWire){}
  send(message:ServerMessage):void {
    if(this.closed||this.wire.disposed)return;
    if(message.type==='snapshot'){
      this.frame=message.frame;this.state=message.state;this.owner=message.inputOwner;this.initialized=true;
    }else if(message.type==='frame'&&this.initialized){
      this.frame=message.frame;
    }else if(message.type==='state'&&this.initialized){
      this.state=message.state;this.owner=message.inputOwner;
    }else{
      this.flush();this.wire.send(message);return;
    }
    this.pending={type:'snapshot',tick:message.tick,revision:message.revision,frame:this.frame,state:this.state,inputOwner:this.owner};
    if(!this.scheduled){this.scheduled=true;queueMicrotask(()=>{this.scheduled=false;if(!this.closed)this.flush();});}
  }
  private flush(){
    const message=this.pending;this.pending=null;
    if(message&&!this.wire.disposed)this.wire.sendSnapshot(message);
  }
  dispose(){this.closed=true;this.pending=null;this.frame=null;this.state=null;}
}
