// SPDX-License-Identifier: GPL-3.0-or-later
// Original SCI1 string semantics, checked against pinned engine/kstring.cpp.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Runtime} from '../native/runtime/runtime.js';
import {kernel} from '../native/runtime/kernels.js';
import {registerAll} from '../native/generated/index.js';
import {GraphicsState} from '../native/graphics/GraphicsState.js';
const manifest=JSON.parse(readFileSync(new URL('../native/public/assets/manifest.json',import.meta.url),'utf8'));
function runtime(){const rt=new Runtime({seed:1,manifest});registerAll(rt);return rt;}
const buffer=(rt:Runtime)=>rt.ref('array',Array(700).fill(0));
async function formatted(rt:Runtime,...args:any[]){const dest=buffer(rt);assert.equal(await kernel(rt,'Format',[dest,...args]),dest);return rt.text(dest);}

test('original inventory Format resolves resource/index string arguments and advances parameters',async()=>{
  const rt=runtime();
  assert.equal(await formatted(rt,231,1,700,81),'Works at Monolith        ');
  assert.equal(await formatted(rt,231,2,700,43),'As a Janitor             ');
  assert.equal(await formatted(rt,231,4,231,5),'Unemployed               ');
  assert.equal(await formatted(rt,231,18,3,700,21),'  3 Refrigerator         ');
  assert.equal(await formatted(rt,231,21,7,700,65),'7 T-BillS');
  assert.equal(await formatted(rt,'%s / %s / %d',700,81,'literal',12),'Monolith / literal / 12');
});

test('original centered headers and adjacent StrEnd appends occupy their exact 25-byte rows',async()=>{
  const rt=runtime(),dest=buffer(rt);
  await kernel(rt,'Format',[dest,231,0,'Player 1']);
  const end=await kernel(rt,'StrEnd',[dest]);
  await kernel(rt,'Format',[end,231,0,231,13]);
  assert.equal(rt.text(dest),'        Player 1         '+'     -----GOODS-----     ');
  assert.equal(await formatted(rt,231,0,231,19),'     ---EDUCATION---     ');
  assert.equal(await formatted(rt,231,0,231,20),'     --INVESTMENTS--     ');
  assert.equal(await formatted(rt,'%=3s','longer'),'longer','Width does not truncate original text');
});

test('SCI numeric padding, signed words, percent escapes and byte characters retain native behavior',async()=>{
  const rt=runtime();
  assert.equal(await formatted(rt,231,3,5),'Hourly wage: $5          ');
  assert.equal(await formatted(rt,'%05d/%u/%x/%-4d',-12,-1,-1,65535),'00-12/65535/ffff/-1  ');
  assert.equal(await formatted(rt,'%% %03s %c %3c','x',128,65),'%   x Ç   A');
  assert.equal(await formatted(rt,'%X %.2s %q'),'%X %.2s %q','Unsupported format verbs remain literal');
});

test('StrCmp uses unsigned original codepage bytes and its optional 16-bit length',async()=>{
  const rt=runtime();
  assert.equal(await kernel(rt,'StrCmp',['Z','a']),90-97,'ASCII byte order must not use locale collation');
  assert.equal(await kernel(rt,'StrCmp',['Ç','é']),128-130,'Original CP437 bytes differ from Unicode order');
  assert.equal(await kernel(rt,'StrCmp',['é','Ç']),2);
  assert.equal(await kernel(rt,'StrCmp',['abcX','abcY',3]),0);
  assert.equal(await kernel(rt,'StrCmp',['abcX','abcY',4]),-1);
  assert.equal(await kernel(rt,'StrCmp',['different','words',0]),0);
  assert.equal(await kernel(rt,'StrCmp',['a','ab']),-98);
  assert.equal(await kernel(rt,'StrCmp',['ab\0Z','ab\0A']),0);
  const left=buffer(rt),right=buffer(rt);rt.writeText(left,'Trade School');rt.writeText(right,'Trade School!');
  assert.equal(await kernel(rt,'StrCmp',[left,right,12]),0);
  assert.equal(await kernel(rt,'StrCmp',[left,right]),-33);
});

test('the translated original inventory procedure builds actual names, employment and section headings',async()=>{
  const rt=runtime(),player=rt.object(1,'player1');
  rt.setGlobal(302,player);await rt.send(player,'init');
  rt.set(player,'worksAt',10);rt.set(player,'occupation',43);rt.set(player,'wage',5);
  await rt.call(231,'localproc_0',[]);
  const text=rt.text(rt.ref('local',231,0)),rows=text.match(/.{1,25}/g)!;
  assert(rows.some(row=>row==='Works at Monolith        '));
  assert(rows.some(row=>row==='As a Janitor             '));
  for(const heading of ['-----GOODS-----','---EDUCATION---','--INVESTMENTS--'])assert(rows.some(row=>row.trim()===heading));
  assert(!text.includes('%=')&&!text.includes('700'));
  assert(rows.every(row=>row.length===25));
});

test('original inventory selector draws its pointer-addressed rows and scrolls through original DSelector code',async()=>{
  const graphics=new GraphicsState(manifest),rt=new Runtime({seed:1,manifest,graphics});registerAll(rt);
  const player=rt.object(1,'player1');rt.setGlobal(302,player);await rt.send(player,'init');await rt.call(231,'localproc_0',[]);
  const control=rt.object(231,'invSelector'),text=rt.ref('local',231,0);
  rt.set(control,'text',text);await rt.send(control,'moveTo',[17,20]);await rt.send(control,'setSize');
  await kernel(rt,'DrawControl',[control]);
  const rows=()=>graphics.drainFrame().commands.filter(c=>c.op==='text').map(c=>c.args[0] as string).filter(s=>s.length===25);
  assert.deepEqual(rows(),['        Player 1         ','Unemployed               ','Cash: $200               ','Savings: $0              ','Rent Owed: $0            ','Loan Balance: $0         ','Total Goods: $0          ']);
  assert(graphics.presented.some(byte=>byte!==0),'Actual original glyphs must reach the graphics frame');
  let finished=false;
  const scrolling=rt.send(control,'advance',[1]).finally(()=>{finished=true;});
  for(let ticks=0;!finished&&ticks<10;ticks++){rt.tick();await new Promise(resolve=>setImmediate(resolve));}
  await scrolling;
  assert.equal(rt.get(control,'brTop').byte,25);
  assert.equal(rows()[0],'Unemployed               ');
  rt.set(control,'type',6);rt.set(control,'cursor',{...text,byte:50});
  await kernel(rt,'DrawControl',[control]);
  assert(graphics.drainFrame().commands.some(c=>c.op==='invert'),'Selectable list highlights its cursor reference by byte address');
  rt.writeText(text,' '.repeat(25));rt.set(control,'type',7);rt.set(control,'brTop',text);rt.set(control,'cursor',text);
  await kernel(rt,'DrawControl',[control]);
  const frame=graphics.snapshot(),pixels=Buffer.from(frame.pixels,'base64'),top=rt.get(control,'nsTop')+10,left=rt.get(control,'nsLeft'),right=rt.get(control,'nsRight');
  for(let y=top;y<top+manifest.fonts[4].lineHeight;y++)for(let x=left;x<right;x++)assert.equal(pixels[y*320+x],graphics.port.backColor,'An empty first row must erase the tall arrow glyph beneath it');
});
