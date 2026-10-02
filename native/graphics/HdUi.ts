// SPDX-License-Identifier: GPL-3.0-or-later
// Presentation only: flat original button art redrawn with sharp bundled fonts.
// Original source cels/labels were inspected; no hit boxes, events or SCI state change.
import { decodeBytes } from './bytes.js';
import type { NativeAssetManifest, RGB } from './types.js';

/** Reference table: select1.sc233, select2.sc235, select3.sc236; DONE also
 * appears in original shop dialogs, e.g. bank.sc204 and lowcost.sc200.
 * Only these exact original cels are supported. In particular, character art,
 * player numbers, title panels and dynamic labels are never substituted. */
export const HD_UI_BUTTONS = [
  { view: 10, loop: 1, cel: 0, label: 'PLAY GAME', width: 133, height: 20, face: 146, ink: 0, family: 'Jones HD Serif' },
  { view: 10, loop: 1, cel: 1, label: 'WATCH DEMO', width: 133, height: 20, face: 146, ink: 0, family: 'Jones HD Serif' },
  { view: 10, loop: 1, cel: 2, label: 'RESTORE GAME', width: 133, height: 20, face: 146, ink: 0, family: 'Jones HD Serif' },
  { view: 250, loop: 0, cel: 0, label: 'DONE', width: 32, height: 9, face: 47, ink: 130, family: 'Jones HD Mono' },
  { view: 250, loop: 7, cel: 0, label: 'SELECT', width: 34, height: 9, face: 47, ink: 130, family: 'Jones HD Mono' },
  { view: 250, loop: 8, cel: 0, label: 'NEXT', width: 32, height: 9, face: 47, ink: 130, family: 'Jones HD Mono' },
  { view: 250, loop: 11, cel: 0, label: 'PLAY', width: 32, height: 9, face: 47, ink: 130, family: 'Jones HD Mono' },
] as const;

/** Call after the bundled Jones HD fonts have loaded. The returned canvas uses
 * exactly 8x the source dimensions. The renderer MUST retain the frame owner
 * mask: original HiliteControl changes pressed pixels through raster inversion,
 * clearing their owner, so those pixels correctly fall back to original pressed
 * colors. There is no invented pressed cel/state or interaction here. */
export function createHdUiCanvas(view: number, loop: number, cel: number, assets: NativeAssetManifest): HTMLCanvasElement | null {
  const button = HD_UI_BUTTONS.find(b => b.view === view && b.loop === loop && b.cel === cel);
  if (!button) return null;
  const source = assets.views[view], bitmap = source?.loops[loop]?.cels[cel];
  if (!bitmap || bitmap.width !== button.width || bitmap.height !== button.height) return null;
  const pixels = decodeBytes(bitmap.pixels), { width, height } = bitmap;
  if (pixels.length !== width * height) return null;
  const colors = assets.palette.map(c => [...c] as RGB);
  for (const [index, r, g, b, used = 1] of source.paletteUpdates) if (used && index > 0 && index < 255) colors[index] = [r, g, b];
  colors[0] = [0, 0, 0]; colors[255] = [255, 255, 255];
  const color = (index: number) => `rgb(${colors[index].join(',')})`;

  // Derive the label's exact original bounds, excluding the two-pixel bevel.
  // This retains the distinct margins of PLAY/SELECT and the three main labels.
  let left: number = width, top: number = height, right = 0, bottom = 0;
  for (let y = 2; y < height - 2; y++) for (let x = 2; x < width - 2; x++) if (pixels[y * width + x] === button.ink) {
    left = Math.min(left, x); top = Math.min(top, y); right = Math.max(right, x + 1); bottom = Math.max(bottom, y + 1);
  }
  if (right <= left || bottom <= top) return null;
  const scale = 8, canvas = document.createElement('canvas');
  canvas.width = width * scale; canvas.height = height * scale;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  ctx.fillStyle = color(button.face); ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw only the original flat border as vector rectangles. The bitmap text
  // is not scaled or copied: the interior is a clean face and new font outlines.
  for (let y = 0; y < height; y++) {
    let x = 0;
    while (x < width) {
      if (y >= 2 && y < height - 2 && x >= 2 && x < width - 2) { x = width - 2; continue; }
      const index = pixels[y * width + x], start = x;
      while (++x < width && pixels[y * width + x] === index && (y < 2 || y >= height - 2 || x < 2 || x >= width - 2)) { /* one flat border run */ }
      if (index === bitmap.clear) ctx.clearRect(start * scale, y * scale, (x - start) * scale, scale);
      else { ctx.fillStyle = color(index); ctx.fillRect(start * scale, y * scale, (x - start) * scale, scale); }
    }
  }

  ctx.font = `${button.family === 'Jones HD Serif' ? 'bold ' : ''}${(bottom - top) * scale}px "${button.family}"`;
  ctx.textBaseline = 'alphabetic';
  const metrics = ctx.measureText(button.label);
  const inkWidth = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
  const inkHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
  if (!(inkWidth > 0 && inkHeight > 0)) return null;
  ctx.save(); ctx.beginPath(); ctx.rect(2 * scale, 2 * scale, (width - 4) * scale, (height - 4) * scale); ctx.clip();
  ctx.translate(left * scale, top * scale);
  ctx.scale((right - left) * scale / inkWidth, (bottom - top) * scale / inkHeight);
  ctx.fillStyle = color(button.ink);
  ctx.fillText(button.label, metrics.actualBoundingBoxLeft, metrics.actualBoundingBoxAscent);
  ctx.restore();
  return canvas;
}
