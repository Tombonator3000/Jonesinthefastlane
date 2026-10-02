// SPDX-License-Identifier: GPL-3.0-or-later
// SCI1-early Bresenham movement. Algorithm reference: ScummVM 2026.3.0
// engines/sci/engine/kmovement.cpp (ScummVM Team, GPL-3.0-or-later).
import type { Runtime } from './runtime.js';
export function initBresen(rt:Runtime,m:any,factor=1) {
  const c=rt.get(m,'client'),get=(o:any,k:string)=>rt.get(o,k);
  let xs=get(c,'xStep')*factor,ys=get(c,'yStep')*factor,guard=Math.max(xs,ys)*2;
  const deltaX=get(m,'x')-get(c,'x'),deltaY=get(m,'y')-get(c,'y');
  let dx=0,dy=0,i1=0,i2=0,di=0,incr=1,xAxis=0;
  while(true) {
    dx=xs;dy=ys;incr=1;
    if(Math.abs(deltaX)>=Math.abs(deltaY)) {
      xAxis=1;if(deltaX<0)dx=-dx;dy=deltaX?Math.trunc(dx*deltaY/deltaX):0;
      i1=(dx*deltaY-dy*deltaX)*2;if(deltaY<0){incr=-1;i1=-i1;}
      i2=i1-deltaX*2;di=i1-deltaX;if(deltaX<0){i1=-i1;i2=-i2;di=-di;}
    } else {
      xAxis=0;if(deltaY<0)dy=-dy;dx=deltaY?Math.trunc(dy*deltaX/deltaY):0;
      i1=(dy*deltaX-dx*deltaY)*2;if(deltaX<0){incr=-1;i1=-i1;}
      i2=i1-deltaY*2;di=i1-deltaY;if(deltaY<0){i1=-i1;i2=-i2;di=-di;}break;
    }
    if(xs<=ys||!xs||ys>=Math.abs(dy+incr))break;
    if(!--guard)throw new Error('SCI movement cannot converge');xs--;
  }
  Object.entries({dx,dy,'b-i1':i1,'b-i2':i2,'b-di':di,'b-incr':incr,'b-xAxis':xAxis}).forEach(([k,v])=>rt.set(m,k,rt.word(v)));
}
export async function doBresen(rt:Runtime,m:any) {
  const c=rt.get(m,'client'),get=(o:any,k:string)=>rt.get(o,k);
  rt.set(c,'signal',get(c,'signal')&~0x400);
  let count=get(m,'b-moveCnt')+1;
  if(get(c,'moveSpeed')<count) {
    count=0;
    let x=get(c,'x'),y=get(c,'y'),di=get(m,'b-di');
    const tx=get(m,'x'),ty=get(m,'y'),xAxis=get(m,'b-xAxis'),dx=get(m,'dx'),dy=get(m,'dy');
    rt.set(m,'xLast',x);rt.set(m,'yLast',y);
    const backup={...c.props},oldDi=di;
    if(xAxis?Math.abs(tx-x)<=Math.abs(dx):Math.abs(ty-y)<=Math.abs(dy)){x=tx;y=ty;}
    else {
      x+=dx;y+=dy;
      if(di<0)di+=get(m,'b-i1');else {di+=get(m,'b-i2');if(xAxis)y+=get(m,'b-incr');else x+=get(m,'b-incr');}
    }
    rt.set(c,'x',rt.word(x));rt.set(c,'y',rt.word(y));
    if(!rt.truth(await rt.send(c,'canBeHere',[]))) {c.props=backup;di=oldDi;rt.set(c,'signal',get(c,'signal')|0x400);}
    rt.set(m,'b-di',rt.word(di));rt.set(m,'b-moveCnt',count);
    if(x===tx&&y===ty)await rt.send(m,'moveDone',[]);
  }else rt.set(m,'b-moveCnt',count);
}
