// SPDX-License-Identifier: GPL-3.0-or-later
// Isolated graphics fixture. No game runtime, session, input, save or networking.
import { GraphicsState } from '../../native/graphics/GraphicsState.js';
import { ThreeRenderer } from '../../native/graphics/ThreeRenderer.js';
import { decodeBytes } from '../../native/graphics/bytes.js';
import { decodeOwners } from '../../native/graphics/provenance.js';
import { HD_UI_CEL_KEYS, getHdUiSpec, getHdUiTextBounds } from '../../native/graphics/HdUi.js';
import type { GraphicsFrame, NativeAssetManifest, Rect } from '../../native/graphics/types.js';
const assets = await (await fetch('assets/manifest.json')).json() as NativeAssetManifest;
const canvas = document.querySelector('canvas')!;
const renderer = new ThreeRenderer(canvas, assets, { pack: 'hd', mode: 'original', lighting: false, drawCursor: false, resolutionHeight: 1000 });
const tick = () => new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
const deadline = performance.now() + 60000;
while ((!renderer.hdStatus.ready || !renderer.hdStatus.fonts) && !renderer.hdStatus.failed && performance.now() < deadline)
  await new Promise(resolve => setTimeout(resolve, 40));
if (!renderer.renderer || !renderer.hdStatus.ready || !renderer.hdStatus.fonts || renderer.hdStatus.failed)
  throw new Error('Actual WebGL renderer, HD pack and bundled fonts are required');
const copy = document.createElement('canvas');
copy.width = canvas.width; copy.height = canvas.height;
const context = copy.getContext('2d', { willReadFrequently: true })!;
function capture() { context.drawImage(canvas, 0, 0); return context.getImageData(0, 0, copy.width, copy.height).data; }
async function render(frame: GraphicsFrame, pack: 'hd' | 'original') {
  renderer.setOptions({ pack }); renderer.applyFrame(frame); await tick(); return capture();
}
function digest(bytes: Uint8ClampedArray) { let hash = 2166136261; for (const b of bytes) hash = Math.imul(hash ^ b, 16777619); return (hash >>> 0).toString(16).padStart(8, '0'); }
function countDifferences(a: Uint8ClampedArray, b: Uint8ClampedArray) { let n = 0; for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) n++; return n; }
const local = (left: number, top: number, right: number, bottom: number): Rect => ({ left, top, right, bottom });

(window as any).hdInterface = {
  keys: HD_UI_CEL_KEYS,
  async inspect(key: string, variant: 'normal' | 'clipped' | 'pressed' | 'occluded' = 'normal') {
    const [view, loop, cel] = key.split(':').map(Number), source = assets.views[view].loops[loop].cels[cel];
    const spec = getHdUiSpec(view, loop, cel, assets), fields = getHdUiTextBounds(view, loop, cel, assets);
    if (!spec || !fields?.length) throw new Error(`Unknown authored UI cel ${key}`);
    const g = new GraphicsState(assets); g.setCursor(-1, false);
    g.fillRect(local(0, 0, 320, 200), 141);
    const left = Math.floor((320 - source.width) / 2), top = Math.floor((200 - source.height) / 2);
    if (variant === 'clipped') {
      // Real GraphicsState port origin/clip rules, not a modified serialized frame.
      g.port.left = 7; g.port.top = 5;
      g.port.rect = local(left + 7, top + 2, left + source.width - 7, top + source.height - 2);
    }
    g.drawCel(view, loop, cel, left, top);
    const sourcePixels = decodeBytes(source.pixels), beforeEffect = g.visual.slice();
    if (variant === 'pressed') {
      const indexOfColor = (color: number) => {
        const p = sourcePixels.indexOf(color);
        if (p < 0) throw new Error(`Missing expected original button color ${color}`);
        return g.visual[(top + Math.floor(p / source.width)) * 320 + left + p % source.width];
      };
      g.invertRect(local(left + 2, top + 2, left + source.width - 2, top + source.height - 2), indexOfColor(47), indexOfColor(130));
    }
    if (variant === 'occluded') g.fillRect(local(left + Math.floor(source.width / 3), top, left + Math.floor(source.width * 2 / 3), top + source.height), 255);
    const frame = g.snapshot(), authoritative = JSON.stringify(frame), framePixels = decodeBytes(frame.pixels), owners = decodeOwners(frame.hd!.owners);
    const op = frame.hd!.ops.find(o => o.kind === 'cel' && o.view === view && o.loop === loop && o.cel === cel);
    if (!op) throw new Error(`${key} was not drawn with live original ownership`);
    const original = await render(frame, 'original'), hd = await render(frame, 'hd');
    const scale = canvas.width / 320;
    const at = (x: number, y: number) => (Math.floor(y * scale) * canvas.width + Math.floor(x * scale)) * 4;
    let originalSourceDifferences = 0, protectedPixels = 0, protectedDifferences = 0;
    let textCells = 0, subpixelCells = 0, originalSubpixelCells = 0, changedTextCells = 0;
    // Check actual raster correspondence throughout the frame, including every
    // protected subpixel inside the UI cel (clip holes, source clear and inversion).
    for (let y = 0; y < 200; y++) for (let x = 0; x < 320; x++) {
      const expected = frame.palette[framePixels[y * 320 + x]], center = at(x + .5, y + .5);
      if (expected.some((value, c) => original[center + c] !== value)) originalSourceDifferences++;
      const inCel = x >= op.dest.left && x < op.dest.right && y >= op.dest.top && y < op.dest.bottom;
      if (inCel && owners[y * 320 + x] !== op.id) {
        protectedPixels++;
        for (let yy = 0; yy < scale; yy++) for (let xx = 0; xx < scale; xx++) {
          const p = at(x + (xx + .5) / scale, y + (yy + .5) / scale);
          if (expected.some((value, c) => hd[p + c] !== value)) protectedDifferences++;
        }
      }
      if (!inCel || owners[y * 320 + x] !== op.id || !fields.some(r => x >= op.dest.left + r.left && x < op.dest.left + r.right && y >= op.dest.top + r.top && y < op.dest.top + r.bottom)) continue;
      textCells++;
      const points = [at(x + .2, y + .2), at(x + .8, y + .2), at(x + .2, y + .8), at(x + .8, y + .8)];
      const variation = (rgba: Uint8ClampedArray) => [0,1,2].reduce((n, channel) => {
        const values = points.map(p => rgba[p + channel]); return n + Math.max(...values) - Math.min(...values);
      }, 0);
      if (variation(hd) > 12) subpixelCells++;
      if (variation(original) > 0) originalSubpixelCells++;
      if (points.some(p => [0,1,2].some(c => hd[p+c] !== original[p+c]))) changedTextCells++;
    }
    const back = await render(frame, 'original'), backDifferences = countDifferences(original, back);
    // Leave the final actual HD compositor result available for the screenshot.
    await render(frame, 'hd');
    let changedRaster = 0; for (let i = 0; i < beforeEffect.length; i++) if (beforeEffect[i] !== g.visual[i]) changedRaster++;
    const generatedUiLayers: number[] = [];
    let inkOnlyLayer: { paintedPixels: number; transparentTitlePixels: number; paintedOutsideTitle: number } | undefined;
    renderer.scene.traverse(object => {
      const material = (object as any).material, image = material?.uniforms?.art?.value?.image;
      if (image instanceof HTMLCanvasElement && image.width === source.width * 8 && image.height === source.height * 8) {
        generatedUiLayers.push(object.id);
        if (spec.replaceInk) {
          const data = image.getContext('2d')!.getImageData(0,0,image.width,image.height).data;
          inkOnlyLayer = { paintedPixels: 0, transparentTitlePixels: 0, paintedOutsideTitle: 0 };
          for (let yy=0;yy<image.height;yy++) for (let xx=0;xx<image.width;xx++) {
            const inside = spec.regions!.some(r=>xx>=r.left*8&&xx<r.right*8&&yy>=r.top*8&&yy<r.bottom*8);
            if (data[(yy*image.width+xx)*4+3] > 0) { inkOnlyLayer.paintedPixels++; if(!inside) inkOnlyLayer.paintedOutsideTitle++; }
            else if(inside) inkOnlyLayer.transparentTitlePixels++;
          }
        }
      }
    });
    return { key, variant, status: renderer.hdStatus, dimensions: [source.width, source.height],
      originalSourceDifferences, protectedPixels, protectedDifferences, textCells, subpixelCells, originalSubpixelCells, changedTextCells,
      originalShaFNV: digest(original), backShaFNV: digest(back), backDifferences, changedRaster,
      unchanged: authoritative === JSON.stringify(g.snapshot()), generatedUiLayerCount: generatedUiLayers.length,
      sourceClearPixels: sourcePixels.filter(p => p === source.clear).length,
      fields, overlay: spec.overlay, replaceInk: !!spec.replaceInk, inkOnlyLayer, crop: { x: op.dest.left * scale, y: op.dest.top * scale, width: source.width * scale, height: source.height * scale } };
  },
};
(window as any).hdInterfaceReady = true;
