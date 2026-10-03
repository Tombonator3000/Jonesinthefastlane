// SPDX-License-Identifier: GPL-3.0-or-later
// Presentation fixtures only. These are not injected into a running game session.
import { GraphicsState } from '../../native/graphics/GraphicsState.js';
import { ThreeRenderer } from '../../native/graphics/ThreeRenderer.js';
import { decodeBytes } from '../../native/graphics/bytes.js';
import { decodeOwners } from '../../native/graphics/provenance.js';
import { getHdUiSpec } from '../../native/graphics/HdUi.js';
import { getHdIntroSpec } from '../../native/graphics/HdIntro.js';
const assets = await (await fetch('assets/manifest.json')).json();
const hd = await (await fetch('hd/manifest.json')).json();
const canvas = document.querySelector('canvas')!;
const renderer = new ThreeRenderer(canvas, assets, { pack: 'hd', mode: 'original', lighting: false, drawCursor: false, resolutionHeight: 1000 });
const ticks = () => new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
while (!renderer.hdStatus.ready && !renderer.hdStatus.failed) await new Promise(resolve => setTimeout(resolve, 50));
if (!renderer.renderer || renderer.hdStatus.failed) throw new Error('Actual WebGL HD renderer is required');
(window as any).hdCompletion = async (key: string, pack = 'hd') => {
  const g = new GraphicsState(assets); g.setCursor(999, false);
  let source: any, art: any, redrawInk = false, left = 0, top = 0;
  if (key.startsWith('pic:')) {
    const pic = Number(key.slice(4)); g.drawPic(pic); source = assets.pics[pic]; art = getHdIntroSpec(pic, assets);
  } else {
    const [v,l,c] = key.split(':').map(Number); source = assets.views[v].loops[l].cels[c]; art = hd.cels[key]; redrawInk = !!getHdUiSpec(v,l,c,assets)?.replaceInk && renderer.hdStatus.fonts;
    left = Math.floor((320 - source.width) / 2); top = Math.floor((200 - source.height) / 2);
    g.fillRect({ left: 0, top: 0, right: 320, bottom: 200 }, 141);
    g.drawCel(v,l,c,left,top); g.drawText('Original text: $1234', 8, 184, { color: 0, font: 0 });
  }
  const frame = g.snapshot(), before = JSON.stringify(frame);
  renderer.setOptions({ pack: pack as 'hd' | 'original' }); renderer.applyFrame(frame); await ticks();
  const copy = document.createElement('canvas'); copy.width = canvas.width; copy.height = canvas.height;
  const ctx = copy.getContext('2d')!; ctx.drawImage(canvas,0,0);
  const rgb = ctx.getImageData(0,0,copy.width,copy.height).data, pixels = decodeBytes(frame.pixels), owners = decodeOwners(frame.hd!.owners);
  const textIds = new Set(frame.hd!.ops.filter(op => op.kind === 'text').map(op => op.id));
  const original = decodeBytes(source.pixels), colors = new Set(art?.preserveSourceColors || []);
  const rects = art?.originalRegions || [];
  let protectedPixels = 0, differences = 0, detailPixels = 0;
  const scale = copy.width / 320;
  const sample = (x: number,y: number) => (Math.floor(y * scale) * copy.width + Math.floor(x * scale)) * 4;
  for (let y=0;y<200;y++) for (let x=0;x<320;x++) {
    const sx=x-left,sy=y-top, inside=sx>=0 && sx<source.width && sy>=0 && sy<source.height;
    const inInkRegion = !art?.preserveSourceColorRegions?.length || art.preserveSourceColorRegions.some((r:any)=>sx>=r.left&&sx<r.right&&sy>=r.top&&sy<r.bottom);
    const keep = !textIds.has(owners[y*320+x]) && inside && ((!redrawInk && inInkRegion && colors.has(original[sy*source.width+sx])) || rects.some((r:any)=>sx>=r.left&&sx<r.right&&sy>=r.top&&sy<r.bottom));
    if (keep) {
      protectedPixels++;
      const at=sample(x+.5,y+.5), expected=frame.palette[pixels[y*320+x]];
      if (expected.some((n:number,c:number)=>n!==rgb[at+c])) differences++;
    } else if (inside) {
      const a=sample(x+.2,y+.2), b=sample(x+.8,y+.8);
      if (Math.abs(rgb[a]-rgb[b])+Math.abs(rgb[a+1]-rgb[b+1])+Math.abs(rgb[a+2]-rgb[b+2])>3) detailPixels++;
    }
  }
  return { key, pack, protectedPixels, differences, detailPixels, unchanged: before===JSON.stringify(g.snapshot()), status: renderer.hdStatus,
    crop: { x:left*scale,y:top*scale,width:source.width*scale,height:source.height*scale } };
};
(window as any).hdCompletionReady = true;
