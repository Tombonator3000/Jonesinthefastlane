// SPDX-License-Identifier: GPL-3.0-or-later
// Self-contained ownership masks shared by the authoritative rasterizer and HD renderer.
import { decodeBytes, encodeBytes } from './bytes.js';

/** Base64 little-endian uint32 pairs [run length, owner id]. Zero is raster fallback. */
export function encodeOwners(owners: Uint32Array): string {
  if (!owners.length) return '';
  let runs = 1;
  for (let i = 1; i < owners.length; i++) if (owners[i] !== owners[i - 1]) runs++;
  const bytes = new Uint8Array(runs * 8), view = new DataView(bytes.buffer);
  let begin = 0, offset = 0;
  for (let i = 1; i <= owners.length; i++) if (i === owners.length || owners[i] !== owners[begin]) {
    view.setUint32(offset, i - begin, true); view.setUint32(offset + 4, owners[begin], true);
    begin = i; offset += 8;
  }
  return encodeBytes(bytes);
}

/** Bounded, strict decoding; malformed optional HD data can fall back to raster. */
export function decodeOwners(encoded: string, length = 64000): Uint32Array {
  if (!Number.isSafeInteger(length) || length < 0 || length > 64000) throw new Error('Invalid ownership dimensions');
  if (typeof encoded !== 'string' || encoded.length > Math.ceil(length * 8 / 3) * 4) throw new Error('Invalid ownership data');
  const bytes = decodeBytes(encoded);
  if (bytes.length % 8) throw new Error('Invalid ownership run');
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength), owners = new Uint32Array(length);
  let offset = 0;
  for (let i = 0; i < bytes.length; i += 8) {
    const count = view.getUint32(i, true), owner = view.getUint32(i + 4, true);
    if (!count || offset + count > length) throw new Error('Invalid ownership run length');
    owners.fill(owner, offset, offset + count); offset += count;
  }
  if (offset !== length) throw new Error('Incomplete ownership plane');
  return owners;
}
