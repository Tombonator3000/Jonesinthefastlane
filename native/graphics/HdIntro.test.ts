// SPDX-License-Identifier: GPL-3.0-or-later
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { getHdIntroSpec } from './HdIntro.js';
import { decodeBytes } from './bytes.js';
import type { NativeAssetManifest } from './types.js';
const assets = JSON.parse(readFileSync(new URL('../public/assets/manifest.json', import.meta.url), 'utf8')) as NativeAssetManifest;

test('HD intro keeps every original dot and the full title without altering source pixels', () => {
  const before = JSON.stringify(assets.pics);
  for (let pic = 0; pic <= 5; pic++) {
    const spec = getHdIntroSpec(pic, assets); assert(spec);
    assert.equal(spec.width, 320); assert.equal(spec.height, 200);
    const source = assets.pics[pic], pixels = decodeBytes(source.pixels);
    for (const dot of spec.dots) assert.deepEqual(dot.color, source.palette[pixels[Math.floor(dot.y) * 320 + Math.floor(dot.x)]]);
    if (pic === 0) {
      assert.deepEqual(spec.originalRegions, [{ left: 79, top: 10, right: 245, bottom: 161 }]);
      const r = spec.originalRegions[0];
      for (let y = 0; y < 200; y++) for (let x = 0; x < 320; x++)
        if (![144, 178].includes(pixels[y * 320 + x])) assert(x >= r.left && x < r.right && y >= r.top && y < r.bottom);
    } else { assert.equal(spec.dots.length, 156); assert.deepEqual(spec.originalRegions, []); }
  }
  assert.equal(JSON.stringify(assets.pics), before);
});

test('HD intro rejects other scenes, damaged sources and unexpected illustration content', () => {
  for (const pic of [-1, 6, 11, NaN, .5]) assert.equal(getHdIntroSpec(pic, assets), null);
  const copy = structuredClone(assets);
  copy.pics[1].pixels = Buffer.from([0]).toString('base64'); assert.equal(getHdIntroSpec(1, copy), null);
  copy.pics[1] = structuredClone(assets.pics[1]);
  const data = Buffer.from(copy.pics[1].pixels, 'base64'); data[0] = 2; copy.pics[1].pixels = data.toString('base64');
  assert.equal(getHdIntroSpec(1, copy), null);
});
