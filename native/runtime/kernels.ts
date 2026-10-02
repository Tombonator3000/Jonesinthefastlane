// SPDX-License-Identifier: GPL-3.0-or-later
// Native services called by translated SCI functions. No SCI bytecode is run.
import { initBresen, doBresen } from './movement.js';
import { applySoundKernel } from '../audio/kernel.js';
import { drawMenuBar, getMenuAttribute, setMenuAttribute, selectMenu } from '../graphics/menus.js';
import { drawEditControl, editControl } from '../graphics/controls.js';
import { animate } from '../graphics/animation.js';
import { Runtime, RestoreSignal, RestartSignal, type SciObject } from './runtime.js';

const word=(x:number)=>(x<<16)>>16;
const items=(list:any)=>{const out:any[]=[];for(let n=list?.first;n;n=n.next)out.push(n.value);return out;};
function textResource(rt:Runtime,id:number,index:number) {
  const table=rt.manifest?.texts?.[id];
  const s=Array.isArray(table)?table[index]:table?.strings?.[index];
  if(s===undefined)throw new Error(`Missing text ${id}:${index}`);
  return typeof s==='string'?s:s.text??s.value;
}
function format(rt:Runtime,args:any[]) {
  // SCI1 kFormat, including its two-word resource/index string arguments and
  // non-printf '=' centering (engines/sci/engine/kstring.cpp in pinned ScummVM).
  let parameter=0;
  const lookup=()=>{const value=args[parameter++];return typeof value==='number'?textResource(rt,value&65535,Number(args[parameter++])&65535):rt.text(value);};
  const source=lookup();let result='';
  for(let index=0;index<source.length;index++) {
    let type=source[index];
    if(type!=='%'){result+=type;continue;}
    type=source[++index];
    if(type===undefined)break;
    if(type==='%'){result+='%';continue;}
    let width=0,align=0,fill=' ';
    if(/[0-9=-]/.test(type)) {
      if(type==='0')fill='0';
      if(type==='=')align=2;
      let start=index+(type==='='||type==='0'?1:0);
      const digits=/^-?\d+/.exec(source.slice(start));
      if(digits){width=Number(digits[0]);start+=digits[0].length;}
      if(width<0){align=-1;width=-width;}else if(align!==2)align=1;
      index=start;type=source[index];
    }
    let text:string;
    if(type==='s') {
      text=lookup();const extra=Math.max(0,width-text.length);
      if(align===2){result+=' '.repeat(extra>>1)+text+' '.repeat(extra-(extra>>1));continue;}
      if(align>=0)text=' '.repeat(extra)+text;
    } else if(type==='c') {
      const byte=Number(args[parameter++])&255;
      text=byte?(rt.manifest?.codePage?.[byte]??String.fromCharCode(byte)):'';
      if(align>=0)text=' '.repeat(Math.max(0,width-1))+text;
    } else if(type==='d'||type==='u'||type==='x') {
      const value=Number(args[parameter++]);
      text=type==='d'?String(word(value)):(value&65535).toString(type==='x'?16:10);
    } else text='%'+(type??'');
    if(align<0)text=text.padEnd(width,' ');else if(align>0)text=text.padStart(width,fill);
    result+=text;
  }
  return result;
}
function bounds(rt:Runtime,o:any) {
  return rt.graphics.getCelRect(rt.get(o,'view'),rt.get(o,'loop'),rt.get(o,'cel'),rt.get(o,'x'),rt.get(o,'y'),rt.get(o,'z'));
}
function drawActor(rt:Runtime,o:any,force=false) {
  const g=rt.graphics,r=bounds(rt,o),sig=rt.get(o,'signal');
  for(const [key,val] of Object.entries({nsLeft:r.left,nsTop:r.top,nsRight:r.right,nsBottom:r.bottom}))rt.set(o,key,val);
  if(force||!(sig&0x0008))g.drawCel(rt.get(o,'view'),rt.get(o,'loop'),rt.get(o,'cel'),r.left,r.top,rt.get(o,'priority'));
  return r;
}
function drawControl(rt:Runtime,o:any,highlight=false) {
  const g=rt.graphics,get=(key:string)=>rt.get(o,key);
  const x=get('nsLeft'),y=get('nsTop'),right=Math.max(x,get('nsRight')),bottom=Math.max(y,get('nsBottom'));
  const rect={left:x,top:y,right,bottom},grow=(n:number)=>({left:x-n,top:y-n,right:right+n,bottom:bottom+n});
  if(right<=x||bottom<=y)return; // Original Jones has intentionally inverted duplicate button rectangles.
  const state=get('state'),width=right-x,text=rt.text(get('text')),font=get('font');
  if(highlight){g.invertRect(rect);return;}
  switch(get('type')) {
    case 0:return;
    case 4:
      g.drawCel(get('view'),get('loop'),get('cel'),x,y,Object.hasOwn(o.props,'priority')?get('priority'):-1);
      if(state&32)g.frameRect(rect);break;
    case 2:
      g.fillRect(grow(1),g.port.backColor);
      g.drawText(text,x,y,{font,color:g.port.color,maxWidth:width,align:get('mode')});
      if(state&8)g.frameRect(rect);break;
    case 1:
      g.fillRect(grow(1),g.port.backColor);g.frameRect(grow(1));
      g.drawText(text,x+1,y+1,{font,color:g.port.color,maxWidth:width-2,align:1,greyed:!(state&1)});
      if(state&8)g.frameRect(rect);break;
    case 3:
      drawEditControl(rt,o);break;
    case 6:case 7: {
      g.fillRect(grow(1),g.port.backColor);g.frameRect(grow(1));
      g.drawText(String.fromCharCode(24),x,y,{font:0,maxWidth:width,align:1});
      g.drawText(String.fromCharCode(25),x,bottom-9,{font:0,maxWidth:width,align:1});
      g.frameRect({left:x-1,top:y+9,right:right+1,bottom:bottom-9});
      const stride=get('x'),ref=get('text'),first=get('brTop'),cursor=get('cursor');
      // DSelector stores byte-addressed references, not numeric row offsets.
      const start=first?.kind==='ref'?first:ref;
      const height=g.assets.fonts[font].lineHeight;
      if(stride>0&&start?.kind==='ref')for(let row=0,top=y+10;top+height<=bottom-10;row++,top+=height){
        const entry={...start,byte:start.byte+row*stride},label=rt.text(entry);if(!label)break;
        // Original list rows erase their background after drawing the arrows;
        // Jones' tall arrow glyph otherwise overlaps the first statistics row.
        g.fillRect({left:x,top,right,bottom:top+height},g.port.backColor);
        g.drawText(label.slice(0,stride),x,top,{font,maxWidth:width});
        const selected=cursor?.kind==='ref'&&cursor.owner===entry.owner&&cursor.index*2+cursor.byte===entry.index*2+entry.byte;
        if(get('type')===6&&selected)g.invertRect({left:x,top,right,bottom:top+height});
      }break;
    }
    default:throw new Error(`Unsupported original control type ${get('type')}`);
  }
}

export async function kernel(rt:Runtime,name:string,a:any[]):Promise<any> {
  const g=rt.graphics, v=a[0];
  g?.setTick?.(rt.ticks);
  switch(name) {
    case 'Load': return v===133?rt.ref('array',new Array(Math.ceil(a[1]/2)).fill(0),0):1;
    case 'UnLoad': case 'FlushResources': case 'Lock': return 0;
    case 'DisposeScript':rt.disposeScript(v);return a[1]??0;
    case 'SetDebug':rt.warnings.add('Original Jones AI debug checkpoint reached');return 0;
    case 'ScriptID': {
      const def=rt.scripts.get(v);if(!def)throw new Error(`Missing script ${v}`);
      const n=def.exports[a[1]??0];if(!n)throw new Error(`Missing export ${v}:${a[1]??0}`);
      return rt.object(v,n);
    }
    case 'Clone':return rt.clone(v);
    case 'DisposeClone':if(v?.clone){v.disposed=true;rt.heap.delete(v.id);}return 0;
    case 'IsObject':return +(v?.kind==='object'&&!v.disposed);
    case 'RespondsTo':return +(v?.kind==='object'&&(Object.hasOwn((rt.initialize(v),v.props),rt.selector(a[1]))||!!rt.lookup(v,rt.selector(a[1]))));
    case 'NewList':return rt.allocate({kind:'list',first:0,last:0});
    case 'DisposeList':if(v){v.first=0;v.last=0;rt.heap.delete(v.id);}return 0;
    case 'NewNode':return rt.allocate({kind:'node',value:v,key:a[1]??v,next:0,prev:0,list:0});
    case 'FirstNode':return v?.first??0;
    case 'LastNode':return v?.last??0;
    case 'NextNode':return v?.next??0;
    case 'PrevNode':return v?.prev??0;
    case 'NodeValue':return v?.value??0;
    case 'EmptyList':return +!v?.first;
    case 'AddToFront': case 'AddToEnd': case 'AddAfter': {
      const node=name==='AddAfter'?a[2]:a[1],after=name==='AddAfter'?a[1]:name==='AddToEnd'?v.last:0;
      node.prev=after;node.next=after?after.next:v.first;node.list=v;
      if(node.next)node.next.prev=node;else v.last=node;
      if(after)after.next=node;else v.first=node;
      return node;
    }
    case 'FindKey':for(let node=v?.first;node;node=node.next)if(node.key===a[1])return node;return 0;
    case 'DeleteKey': {
      for(let node=v?.first;node;node=node.next)if(node.key===a[1]) {
        if(node.prev)node.prev.next=node.next;else v.first=node.next;
        if(node.next)node.next.prev=node.prev;else v.last=node.prev;
        node.list=0;rt.heap.delete(node.id);return 1;
      }return 0;
    }
    case 'Random':if(a.length===1){rt.seed=v>>>0;return v;}return rt.random(v,a[1]);
    case 'Abs':return Math.abs(word(v));
    case 'Sqrt':return Math.floor(Math.sqrt(v));
    case 'GetAngle':return Math.round((Math.atan2(a[2]-v,a[1]-a[3])*180/Math.PI+360)%360);
    case 'GetDistance':return Math.round(Math.hypot(a[2]-v,a[3]-a[1]));
    case 'SinMult':return word(Math.trunc(Math.sin(v*Math.PI/180)*a[1]));
    case 'CosMult':return word(Math.trunc(Math.cos(v*Math.PI/180)*a[1]));
    case 'SinDiv':return word(Math.trunc(a[1]/Math.sin(v*Math.PI/180)));
    case 'CosDiv':return word(Math.trunc(a[1]/Math.cos(v*Math.PI/180)));
    case 'GetTime':return v===1?Math.floor(rt.ticks/60)&65535:rt.ticks&65535;
    case 'Wait':return rt.wait(Math.max(1,Number(v)||1));
    case 'HaveMouse':return 1;
    case 'SetCursor': {
      rt.cursor.number=v; if(a.length>=2)rt.cursor.visible=!!a[1];
      if(a.length>=4){rt.pointer.x=a[2];rt.pointer.y=a[3];}g.setCursor(v,rt.cursor.visible,rt.pointer.x,rt.pointer.y);return 0;
    }
    case 'GetEvent': {
      if(rt.lastEventTick===rt.ticks)await rt.wait(1);rt.lastEventTick=rt.ticks;
      const obj=a[1],mask=v&0x7fff,idx=rt.queue.findIndex(e=>(e.type&mask)!==0);
      const empty={type:0,message:0,modifiers:0,x:rt.pointer.x,y:rt.pointer.y};
      let event=idx<0?empty:rt.queue[idx];
      const rejected=idx>=0&&rt.filterEvent?.(event)===false;
      // A rejected event must also leave a peek queue, or it would block all
      // later input. Ordinary accepted SCI peek semantics remain unchanged.
      if(idx>=0 && (rejected||!(v&0x8000)))rt.queue.splice(idx,1);
      if(rejected)event=empty;
      Object.entries({...event,claimed:0,port:0}).forEach(([k,val])=>rt.set(obj,k,val));return +!!event.type;
    }
    case 'MapKeyToDir': {
      const directions:Record<number,number>={0x4800:1,0x4900:2,0x4d00:3,0x5100:4,0x5000:5,0x4f00:6,0x4b00:7,0x4700:8,0x4c00:0};
      const direction=directions[rt.get(v,'message')];
      if(rt.get(v,'type')===4&&direction!==undefined){rt.set(v,'type',64);rt.set(v,'message',direction);}return v;
    }
    case 'GlobalToLocal':case 'LocalToGlobal': {
      const p=name==='GlobalToLocal'?g.globalToLocal(rt.get(v,'x'),rt.get(v,'y')):g.localToGlobal(rt.get(v,'x'),rt.get(v,'y'));
      rt.set(v,'x',p.x);rt.set(v,'y',p.y);return v;
    }
    case 'GetPort':return g.getPort();
    case 'SetPort':if(a.length===1)return g.setPort(v);g.setPicPort({top:v,left:a[1],bottom:a[2],right:a[3]},a[4]??0,a[5]??0);return 0;
    case 'NewWindow':return g.newWindow({top:v,left:a[1],bottom:a[2],right:a[3]},rt.text(a[4]),a[5],a[6],a[7],a[8]);
    case 'DisposeWindow':g.disposeWindow(v);return 0;
    case 'DrawPic':g.drawPic(v,!!(a[1]&0x4000),a.length>=3?!a[2]:false);return 0;
    case 'PicNotValid': {const old=g.picNotValid;if(a.length)g.picNotValid=v;return old;}
    case 'NumLoops':return g.assets.views[rt.get(v,'view')].loops.length;
    case 'NumCels':return g.getCelCount(rt.get(v,'view'),rt.get(v,'loop'));
    case 'CelWide':return g.getCel(v,a[1],a[2]).width;
    case 'CelHigh':return g.getCel(v,a[1],a[2]).height;
    case 'DrawCel':g.drawCel(v,a[1],a[2],a[3],a[4],a[5]??-1);return 0;
    case 'DrawControl':drawControl(rt,v);return 0;
    case 'HiliteControl':drawControl(rt,v,true);return 0;
    case 'EditControl':editControl(rt,v,a[1]);return 0;
    case 'TextSize': {
      const width=a[3]??0,size=g.measureText(rt.text(a[1]),a[2]??0,width===0?192:width);
      [0,0,size.height,width>0?width:size.width].forEach((x,i)=>rt.refSet(v,x,i));return v;
    }
    case 'Display': {
      let i=1,text=typeof v==='number'?textResource(rt,v,a[i++]):rt.text(v),x=g.port.penX,y=g.port.penY;
      const opts:any={font:g.port.font,color:0,backColor:-1,align:0,maxWidth:-1};let save=false;
      while(i<a.length) {
        switch(a[i++]) {
          case 100:x=a[i++];y=a[i++];break;case 101:opts.align=a[i++];break;
          case 102:opts.color=a[i++];break;case 103:opts.backColor=a[i++];break;
          case 104:opts.greyed=!!a[i++];break;case 105:opts.font=a[i++];break;case 106:opts.maxWidth=a[i++];break;
          case 107:save=true;break;case 108:g.restoreBits(a[i++]);return 0;case 121:break;
          default:throw new Error(`Unknown Display option ${a[i-1]}`);
        }
      }
      const measure=g.measureText(text,opts.font,opts.maxWidth),bits=save?g.saveBits({left:x,top:y,right:x+(opts.maxWidth>0?opts.maxWidth:measure.width),bottom:y+measure.height}):0;
      g.drawText(text,x,y,opts);return bits;
    }
    case 'Graph': {
      const [op,top,left,bottom,right,mask,color,priority]=a;
      switch(op) {
        case 2:return 256;
        case 4:g.drawLine(left,top,right,bottom,mask,color,priority);return 0;
        case 7:return g.saveBits({left,top,right,bottom},mask);
        case 8:g.restoreBits(top);return 0;
        case 9:g.fillRect({left,top,right,bottom},g.port.backColor);return 0;
        case 10:g.fillRect({left,top,right,bottom},g.port.color);return 0;
        case 11:g.fillRect({left,top,right,bottom},mask&1?color:-1,mask&2?priority:-1,mask&4?a[8]:-1);return 0;
        case 12:case 13:g.showRect({left,top,right,bottom});return 0;
        case 14:g.adjustPriority(top,left);return 0;
        default:throw new Error(`Unknown Graph ${op}`);
      }
    }
    case 'Palette': {
      switch(v) {
        case 1:return g.loadPalette(a[1])??0;
        case 2:case 3:g.setPaletteFlags(a[1],a[2],a[3],v===2);return 0;
        case 4:return g.setIntensity?.(a[1],a[2],a[3])??0;
        case 5:return g.findColor(a[1],a[2],a[3]);
        case 6:return g.rotatePalette(a[1],a[2],a[3])??0;
        case 7:return structuredClone(g.palette);case 8:g.palette=structuredClone(a[1]);return 0;
        default:throw new Error(`Unknown Palette ${v}`);
      }
    }
    case 'Animate': {
      await animate(rt,v,!!a[1]);return 0;
    }
    case 'AddToPic': {
      const port=g.getPort();g.setPort(2);
      if(v?.kind==='list')for(const o of items(v).sort((x,y)=>rt.get(x,'y')-rt.get(y,'y')||rt.get(x,'z')-rt.get(y,'z'))){
        if(rt.get(o,'priority')===-1)rt.set(o,'priority',g.coordinatePriority(rt.get(o,'y')));
        const r=drawActor(rt,o,true);
        if(!(rt.get(o,'signal')&0x4000))g.fillRect({...r,top:Math.max(r.top,Math.min(r.bottom-1,g.priorityCoordinate(rt.get(o,'priority'))-1))},-1,-1,15);
      } else if(a.length>=6){
        const priority=a[5]<0?g.coordinatePriority(a[4]):a[5],r=g.getCelRect(v,a[1],a[2],a[3],a[4]);
        g.drawCel(v,a[1],a[2],r.left,r.top,priority);
        if(a[6]>=0)g.fillRect({...r,top:Math.max(r.top,Math.min(r.bottom-1,g.priorityCoordinate(priority)-1))},-1,-1,a[6]);
      }
      g.picNotValid=1;g.setPort(port);return 0;
    }
    case 'BaseSetter': {
      const r=bounds(rt,v);
      rt.set(v,'brLeft',r.left);rt.set(v,'brRight',r.right);rt.set(v,'brBottom',rt.get(v,'y')+1);rt.set(v,'brTop',rt.get(v,'y')-rt.get(v,'yStep')+1);return v;
    }
    case 'DirLoop': {
      if(rt.get(v,'signal')&0x800)return v;
      const angle=a[1],count=g.assets.views[rt.get(v,'view')].loops.length;
      const loop=angle>315||angle<45?3:angle>135&&angle<225?2:angle>=180?1:0;
      if(loop<2||count>=4)rt.set(v,'loop',loop);return v;
    }
    case 'OnControl': {
      const base=a.length===2||a.length===4?0:1,left=a[base],top=a[base+1];
      return g.onControl({left,top,right:a.length>3?a[base+2]:left+1,bottom:a.length>3?a[base+3]:top+1},base?v:4);
    }
    case 'CanBeHere':return 1;
    case 'InitBresen':initBresen(rt,v,a[1]??1);return 0;
    case 'DoBresen':await doBresen(rt,v);return 0;
    case 'StrLen':return rt.text(v).length;
    case 'StrCpy':return rt.writeText(v,a.length>=3?rt.text(a[1]).slice(0,a[2]):rt.text(a[1]));
    case 'StrCat':return rt.writeText(v,rt.text(v)+rt.text(a[1]));
    case 'StrCmp': {
      const left=rt.text(v),right=rt.text(a[1]),limit=a.length>2?Number(a[2])&65535:Math.max(left.length,right.length)+1;
      // strcmp/strncmp compare unsigned game-codepage bytes, not locale order.
      const byte=(text:string,index:number)=>{if(index>=text.length||text[index]==='\0')return 0;const mapped=rt.manifest?.codePage?.indexOf(text[index]);return mapped===undefined?text.charCodeAt(index)&255:mapped<0?63:mapped;};
      for(let index=0;index<limit;index++){const x=byte(left,index),y=byte(right,index);if(x!==y)return x-y;if(!x)return 0;}
      return 0;
    }
    case 'StrAt': {const text=rt.text(v);if(a.length>=3)rt.writeText(v,text.slice(0,a[1])+String.fromCharCode(a[2])+text.slice(a[1]+1));return text.charCodeAt(a[1])||0;}
    case 'StrEnd':return {...v,byte:v.byte+rt.text(v).length};
    case 'ReadNumber':return parseInt(rt.text(v),10)||0;
    case 'GetFarText':return rt.writeText(a[2],textResource(rt,v,a[1]));
    case 'Format':return rt.writeText(v,format(rt,a.slice(1)));
    case 'Memory': {
      switch(v){case 1:case 2:return rt.ref('array',new Array(Math.ceil(a[1]/2)).fill(0),0);case 3:return 0;case 4:for(let i=0;i<a[3]/2;i++)rt.refSet(a[1],rt.readRef(a[2],i),i);return a[1];case 5:return rt.readRef(a[1]);case 6:return rt.refSet(a[1],a[2]);default:throw new Error(`Unknown Memory ${v}`);}
    }
    case 'MemoryInfo':return 32760;
    case 'GetSaveDir':return rt.ref('array',new Array(64).fill(0),0);
    case 'GetCWD':return rt.writeText(v,'/');
    case 'ValidPath':return 1;
    case 'DeviceInfo':if(v===3)return 0;if(v===2)return +(rt.text(a[1])===rt.text(a[2]));return rt.writeText(a[a.length-1],'/');
    case 'FileIO':if(v===0)return rt.text(a[1])==='version'?1:0;if(v===5)return rt.writeText(a[1],'1.000.060');return 0;
    case 'GameIsRestarting':if(a.length)rt.restarting=!!v;return +rt.restarting;
    case 'RestartGame':throw new RestartSignal();
    case 'SaveGame':{try{const save=rt.serialize();rt.onSave?.(save);rt.saved=save;return 1;}catch{ return 0; }}
    case 'GetSaveFiles':if(rt.saved){rt.writeText(a[1],'Jones in the Fast Lane');rt.refSet(a[2],1);return 1;}return 0;
    case 'CheckSaveGame':return +!!rt.saved;
    case 'RestoreGame':if(!rt.saved)return 0;throw new RestoreSignal();
    case 'SetMenu':for(let i=1;i+1<a.length;i+=2)setMenuAttribute(rt,v,a[i],a[i+1]);return 0;
    case 'GetMenu':return getMenuAttribute(rt,v,a[1]);
    case 'AddMenu':rt.menus.push(a);return 0;
    case 'DrawMenuBar':drawMenuBar(rt,!v);return 0;
    case 'MenuSelect':return selectMenu(rt,v);
    case 'DoSound': return applySoundKernel(rt, a);
    default:throw new Error(`Native kernel not implemented: ${name}`);
  }
}
