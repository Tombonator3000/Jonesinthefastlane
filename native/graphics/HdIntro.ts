// SPDX-License-Identifier: GPL-3.0-or-later
// Precise, code-authored decoration for the six original intro backgrounds.
// The title, palette, dot positions and logical dimensions come from the source.
import { decodeBytes } from './bytes.js';
import { HD_PROP_SCALE } from './HdProps.js';
import type { NativeAssetManifest, Rect, RGB } from './types.js';

export interface HdIntroSpec {
  key: string; width: number; height: number; background: RGB;
  dots: { x: number; y: number; color: RGB }[];
  originalRegions: readonly Readonly<Rect>[];
}

export function getHdIntroSpec(pic: number, assets: NativeAssetManifest): HdIntroSpec | null {
  if (!Number.isSafeInteger(pic) || pic < 0 || pic > 5) return null;
  const source = assets.pics[pic];
  if (!source || source.width !== 320 || source.height !== 200) return null;
  const pixels = decodeBytes(source.pixels);
  if (pixels.length !== 64000) return null;
  const backgroundIndex = [144, 148, 146, 147, 149, 144][pic];
  const dotIndex = [178, 178, 178, 187, 207, 178][pic];
  if (!source.palette[backgroundIndex] || !source.palette[dotIndex]) return null;
  // Find the entire title/attribution, rather than reproducing its typography.
  const titlePixels: { x: number; y: number }[] = [];
  const dots: HdIntroSpec['dots'] = [];
  for (let y = 0; y < 200; y++) for (let x = 0; x < 320; x++) {
    const index = pixels[y * 320 + x];
    if (index === dotIndex) dots.push({ x: x + .5, y: y + .5, color: [...source.palette[index]] });
    else if (index !== backgroundIndex) titlePixels.push({ x, y });
  }
  // Unexpected artwork is not silently interpreted as a patterned background.
  if (pic !== 0 && titlePixels.length) return null;
  const originalRegions = titlePixels.length ? [{
    left: Math.min(...titlePixels.map(p => p.x)), top: Math.min(...titlePixels.map(p => p.y)),
    right: Math.max(...titlePixels.map(p => p.x)) + 1, bottom: Math.max(...titlePixels.map(p => p.y)) + 1,
  }] : [];
  return { key: `intro-${pic}`, width: 320, height: 200, background: [...source.palette[backgroundIndex]], dots, originalRegions };
}

export function createHdIntroCanvas(spec: HdIntroSpec): HTMLCanvasElement | null {
  const canvas = document.createElement('canvas');
  canvas.width = spec.width * HD_PROP_SCALE; canvas.height = spec.height * HD_PROP_SCALE;
  const ctx = canvas.getContext('2d'); if (!ctx) return null;
  ctx.scale(HD_PROP_SCALE, HD_PROP_SCALE);
  ctx.fillStyle = `rgb(${spec.background.join(',')})`; ctx.fillRect(0, 0, spec.width, spec.height);
  // Each original dot becomes a small smooth stud in exactly its original cell.
  // Keeping the flat background avoids a visible seam around the original logo.
  for (const dot of spec.dots) {
    const g = ctx.createRadialGradient(dot.x - .15, dot.y - .16, .01, dot.x, dot.y, .5);
    g.addColorStop(0, `rgb(${dot.color.map(v => Math.min(255, v + 32)).join(',')})`);
    g.addColorStop(.6, `rgb(${dot.color.join(',')})`);
    g.addColorStop(1, `rgb(${dot.color.map(v => Math.max(0, v - 22)).join(',')})`);
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(dot.x, dot.y, .5, 0, Math.PI * 2); ctx.fill();
  }
  return canvas;
}
