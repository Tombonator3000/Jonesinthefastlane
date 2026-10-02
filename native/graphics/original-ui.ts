// SPDX-License-Identifier: GPL-3.0-or-later
import { decodeBytes } from './bytes.js';
import type { HdDrawOp, PicAsset } from './types.js';

/** The original town picture contains the menu's cream panel and black frame.
 * Protect the exact source pixels, allowing buildings that protrude over the
 * lower edge to receive new artwork without cutting them at a rectangular edge. */
export function originalTownUiMask(pic: PicAsset | undefined): Uint8Array {
  if (!pic) return new Uint8Array();
  const pixels = decodeBytes(pic.pixels), mask = new Uint8Array(pic.width * pic.height);
  for (let y = 44; y < Math.min(155, pic.height); y++) for (let x = 68; x < Math.min(251, pic.width); x++) {
    const color = pic.palette[pixels[y * pic.width + x]];
    if (color && ((color[0] === 248 && color[1] === 248 && (color[2] === 240 || color[2] === 224)) || color.every(v => v === 0))) {
      mask[y * pic.width + x] = 1;
    }
  }
  return mask;
}

export function isOriginalTownUiPixel(mask: Uint8Array, width: number,
  op: Extract<HdDrawOp, { kind: 'pic' }>, x: number, y: number): boolean {
  const localX = x - op.dest.left, localY = y - op.dest.top;
  if (localX < 0 || localY < 0 || x >= op.dest.right || y >= op.dest.bottom) return false;
  const sourceX = op.source.left + (op.mirror ? op.dest.right - op.dest.left - 1 - localX : localX);
  const sourceY = op.source.top + localY;
  return sourceX >= 0 && sourceX < width && sourceY >= 0 && mask[sourceY * width + sourceX] === 1;
}
