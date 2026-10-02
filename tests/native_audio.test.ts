// SPDX-License-Identifier: GPL-3.0-or-later
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { Runtime } from '../native/runtime/runtime.js';
import { registerAll } from '../native/generated/index.js';
import { applySoundKernel, soundSnapshot } from '../native/audio/kernel.js';
import timelines from '../native/audio/timelines.json';

const assets = new URL('../native/public/assets/', import.meta.url);
const manifest = JSON.parse(readFileSync(new URL('audio-manifest.json', assets), 'utf8'));
const hash = (data: Buffer) => createHash('sha256').update(data).digest('hex');
function sound(number = 23, loop = 1) {
  const rt = new Runtime({ graphics: { saveState: () => ({}), loadState: () => {} } });
  registerAll(rt); const obj = rt.object(989, 'Sound');
  rt.set(obj, 'number', number); rt.set(obj, 'loop', loop); rt.set(obj, 'vol', 127);
  applySoundKernel(rt, [5, obj]); applySoundKernel(rt, [7, obj, 0]);
  return { rt, obj };
}

test('all 34 original resources and three patches have traced, lossless PCM exports', () => {
  assert.equal(Object.keys(manifest.sounds).length, 34); assert.equal(Object.keys(manifest.patches).length, 3);
  assert.equal(Object.keys(timelines.sounds).length, 34);
  let loopMarkers = 0;
  for (const resource of Object.values(manifest.sounds) as any[]) {
    const raw = readFileSync(new URL(`../extracted/raw/04_${String(resource.id).padStart(4, '0')}.bin`, import.meta.url));
    assert.equal(hash(raw), resource.sourceSha256);
    assert(resource.rendered); assert(resource.durationTicks > 0); assert(resource.registerWrites > 0);
    const flac = readFileSync(new URL(resource.path, assets));
    assert.equal(hash(flac), resource.audioSha256); assert.equal(flac.subarray(0, 4).toString(), 'fLaC');
    const stream = flac.readBigUInt64BE(18);
    assert.equal(Number(stream >> 44n), 44100);
    assert.equal(Number((stream >> 41n) & 7n) + 1, 2);
    assert.equal(Number((stream >> 36n) & 31n) + 1, 16);
    assert.equal(Number(stream & 0xfffffffffn), (resource.durationTicks + 120) * 735, 'Lossless audio includes the original time plus two seconds of release tail');
    if (resource.loopStartTick) loopMarkers++;
    assert.deepEqual((timelines.sounds as any)[resource.id].cues, resource.cues);
  }
  assert.equal(loopMarkers, 10);
  for (const [id, resource] of Object.entries(manifest.patches) as [string, any][]) {
    const raw = readFileSync(new URL(`../extracted/raw/09_${id.padStart(4, '0')}.bin`, import.meta.url));
    assert.equal(hash(raw), resource.sha256); assert.equal(hash(readFileSync(new URL(resource.path, assets))), resource.sha256);
  }
});

test('original short sound ends at its five resource ticks, not an invented timeout', () => {
  const { rt, obj } = sound();
  assert.equal(timelines.sounds['23'].durationTicks, 5);
  rt.ticks = 4; applySoundKernel(rt, [11, obj]); assert.equal(rt.get(obj, 'signal'), 0);
  rt.ticks = 5; applySoundKernel(rt, [11, obj]); assert.equal(rt.get(obj, 'signal'), -1); assert.equal(rt.get(obj, 'handle'), 0);
  assert.equal(soundSnapshot(rt).sounds[0].playing, false);
  rt.set(obj, 'signal', 0); rt.ticks = 6; applySoundKernel(rt, [11, obj]); assert.equal(rt.get(obj, 'signal'), 0, 'An end cue is delivered once');
});

test('finite and infinite sound loops preserve the original intro loop marker', () => {
  const { rt, obj } = sound(7, 2); const track = timelines.sounds['7'];
  assert.equal(track.loopStartTick, 86);
  rt.ticks = track.durationTicks + 7;
  let playing = soundSnapshot(rt).sounds[0]; assert.equal(playing.positionTicks, 93); assert.equal(playing.loop, 1); assert(playing.playing);
  rt.ticks = track.durationTicks * 2 - track.loopStartTick; applySoundKernel(rt, [11, obj]); assert.equal(rt.get(obj, 'signal'), -1);
  const forever = sound(7, -1); forever.rt.ticks = track.durationTicks * 30;
  playing = soundSnapshot(forever.rt).sounds[0]; assert(playing.playing); assert.equal(playing.loop, -1); assert(playing.positionTicks >= 86);
});

test('pause counters freeze sound time and mute leaves authoritative cues running', () => {
  const { rt, obj } = sound(7);
  rt.ticks = 50; applySoundKernel(rt, [9, obj, 1]); applySoundKernel(rt, [9, obj, 1]);
  rt.ticks = 4000; assert.equal(soundSnapshot(rt).sounds[0].positionTicks, 50);
  applySoundKernel(rt, [9, obj, 0]); rt.ticks = 5000; assert.equal(soundSnapshot(rt).sounds[0].positionTicks, 50);
  applySoundKernel(rt, [9, obj, 0]); rt.ticks = 5007; assert.equal(soundSnapshot(rt).sounds[0].positionTicks, 57);
  const muted = sound(); assert.equal(applySoundKernel(muted.rt, [1, 0]), 1);
  muted.rt.ticks = 5; applySoundKernel(muted.rt, [11, muted.obj]); assert.equal(muted.rt.get(muted.obj, 'signal'), -1); assert.equal(soundSnapshot(muted.rt).enabled, false);
});

test('original fade parameters advance on host ticks and cue when completed', () => {
  const { rt, obj } = sound(6, -1);
  applySoundKernel(rt, [10, obj, 15, 20, 10, 1]);
  rt.ticks = 1; assert.equal(soundSnapshot(rt).sounds[0].volume, 117);
  rt.ticks = 20; assert.equal(soundSnapshot(rt).sounds[0].volume, 117);
  rt.ticks = 21; assert.equal(soundSnapshot(rt).sounds[0].volume, 107);
  rt.ticks = 221; applySoundKernel(rt, [11, obj]);
  assert.equal(rt.get(obj, 'signal'), -1); assert.equal(soundSnapshot(rt).sounds[0].volume, 15); assert.equal(soundSnapshot(rt).sounds[0].playing, false);
});

test('native Save/Restore preserves audio position, loop state and master settings', () => {
  const { rt, obj } = sound(7, -1);
  rt.ticks = 720; applySoundKernel(rt, [0, 8]); const before = soundSnapshot(rt); const save = rt.serialize();
  rt.ticks = 5000; applySoundKernel(rt, [8, obj]); applySoundKernel(rt, [0, 0]);
  rt.restore(save); assert.deepEqual(soundSnapshot(rt), before);
  const restored = rt.object(989, 'Sound'); assert.equal(rt.soundState.get(restored.id).obj, restored);
});
