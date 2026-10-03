// SPDX-License-Identifier: GPL-3.0-or-later
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { HD_UI_BUTTONS, HD_UI_CEL_KEYS, getHdUiSpec, getHdUiTextBounds } from './HdUi.js';
import type { NativeAssetManifest } from './types.js';
const assets = JSON.parse(readFileSync(new URL('../public/assets/manifest.json', import.meta.url), 'utf8')) as NativeAssetManifest;

test('every authored UI label has real original ink inside its unchanged cel dimensions', () => {
  const before = JSON.stringify(assets);
  assert.equal(new Set(HD_UI_CEL_KEYS).size, HD_UI_CEL_KEYS.length);
  for (const key of HD_UI_CEL_KEYS) {
    const [v,l,c] = key.split(':').map(Number), spec = getHdUiSpec(v,l,c,assets), bounds = getHdUiTextBounds(v,l,c,assets);
    assert(spec, key); assert(bounds?.length, key);
    const source = assets.views[v].loops[l].cels[c];
    assert.deepEqual([spec.width,spec.height], [source.width,source.height], key);
    for (const r of bounds) assert(r.left >= 0 && r.top >= 0 && r.right <= spec.width && r.bottom <= spec.height && r.right > r.left && r.bottom > r.top, `${key}: ${JSON.stringify(r)}`);
  }
  assert.equal(JSON.stringify(assets), before, 'DOM-free queries must not change game assets');
});

test('all fourteen distinct original action loops and exact red-choice labels are covered', () => {
  assert.deepEqual(HD_UI_BUTTONS.filter(b => b.view===250).map(b=>[b.loop,b.label]),
    ['DONE','WORK','DONE','RELAX','BUY','SELL','PAWN','SELECT','NEXT','?','ENROLL','PLAY','RETIRE','EXIT'].map((s,i)=>[i,s]));
  assert.deepEqual(HD_UI_BUTTONS.filter(b=>b.view===10&&b.loop===2).map(b=>b.label), ['take it easy?','play fair?','go for broke?']);
  assert.deepEqual(HD_UI_BUTTONS.filter(b=>b.view===10&&b.loop===3).map(b=>b.label), ['yes','no']);
});

test('selection text is a top-only overlay and never replaces portrait art or photographic cels', () => {
  const spec = getHdUiSpec(500,0,0,assets)!;
  assert.equal(spec.overlay,true);
  assert.deepEqual(spec.regions,[{left:0,top:0,right:183,bottom:14}]);
  spec.regions![0].bottom=112;
  assert.equal(getHdUiSpec(500,0,0,assets)!.regions![0].bottom,14,'callers cannot mutate cached regions');
  for (const v of [11,274,280,340,354,609]) assert.equal(getHdUiSpec(v,0,0,assets),null,`${v} artwork must use its own pack`);
  assert.equal(getHdUiSpec(0,3,4,assets),null,'Jones face beside player numbers remains artwork');
});

test('unknown or structurally different source cels retain the original fallback', () => {
  assert.equal(getHdUiSpec(9999,0,0,assets),null);
  assert.equal(getHdUiSpec(250,14,0,assets),null);
  const source=assets.views[250].loops[0].cels[0];
  const altered={...assets,views:{...assets.views,250:{...assets.views[250],loops:[{cels:[{...source,width:source.width+1}]}]}}};
  assert.equal(getHdUiSpec(250,0,0,altered),null);
});

// These resources are drawn separately by select3 and the original office dialogs.
test('primary setup and office headers plus their original choice rows stay covered', () => {
  const keys = ['506:0:0','506:0:1','696:0:0','701:0:0','701:0:1','706:0:0','706:0:1','712:0:0',
    ...Array.from({length:6},(_,i)=>`696:1:${i}`), ...Array.from({length:3},(_,i)=>`712:1:${i}`)];
  for (const key of keys) { const [v,l,c] = key.split(':').map(Number); assert(getHdUiSpec(v,l,c,assets),key); }
  assert.equal(getHdUiSpec(701,1,0,assets),null,'blank rent-room panel needs no invented lettering');
});

test('factory title is the sole ink-only photographic overlay', () => {
  const spec = getHdUiSpec(705,0,0,assets)!;
  assert.equal(spec.overlay,true); assert.equal(spec.replaceInk,true);
  assert.deepEqual(spec.regions,[{left:25,top:11,right:153,bottom:26}]);
  assert.deepEqual(HD_UI_CEL_KEYS.filter(key=>{const [v,l,c]=key.split(':').map(Number);return getHdUiSpec(v,l,c,assets)?.replaceInk}),['705:0:0']);
});
