// SPDX-License-Identifier: GPL-3.0-or-later
// SCI1 early Sound.sc services. Timing is derived from the original resources,
// not from audio-device time, so muted/background/multiplayer games still cue.
import timelines from './timelines.json';
import type { Runtime } from '../runtime/runtime.js';

interface Cue { tick: number; signal?: number; dataInc?: number }
interface Timeline { id: number; durationTicks: number; loopStartTick: number; cues: Cue[] }
interface PlayingSound {
  obj: any; number: number; generation: number; playing: boolean; paused: number;
  position: number; lastTick: number; loop: number; volume: number; priority: number;
  signal: number; dataInc: number; bed: boolean; ended: boolean;
  fade?: { target: number; step: number; interval: number; next: number; stop: boolean };
}
export interface AudioSnapshot {
  tick: number; masterVolume: number; enabled: boolean;
  sounds: { instance: number; id: number; generation: number; positionTicks: number; durationTicks: number; loopStartTick: number; loop: number; volume: number; priority: number; playing: boolean; paused: boolean; ended: boolean; bed: boolean }[];
}
const signed = (n: number) => (n << 16) >> 16;
const clamp = (n: number, max: number) => Math.min(max, Math.max(0, Number(n) || 0));
function settings(rt: Runtime): { settings: true; volume: number; enabled: boolean } {
  // This entry lives in the normal serialized sound map, including Save/Restore.
  if (!rt.soundState.has(-1)) rt.soundState.set(-1, { settings: true, volume: 12, enabled: true });
  return rt.soundState.get(-1);
}
function timeline(number: number): Timeline {
  const sound = (timelines.sounds as Record<string, Timeline>)[number];
  if (!sound) throw new Error(`Original sound resource ${number} has no exported timeline.`);
  return sound;
}
function end(rt: Runtime, sound: PlayingSound, natural: boolean) {
  sound.playing = false; sound.ended = natural; sound.signal = -1; sound.dataInc = 0;
  delete sound.fade; rt.set(sound.obj, 'handle', 0);
}
function applyCues(sound: PlayingSound, data: Timeline, from: number, to: number) {
  for (const cue of data.cues) if (cue.tick > from && cue.tick <= to) {
    if (cue.signal !== undefined) sound.signal = cue.signal;
    if (cue.dataInc) sound.dataInc += cue.dataInc;
  }
}
function advance(rt: Runtime, sound: PlayingSound) {
  const elapsed = Math.max(0, rt.ticks - sound.lastTick); sound.lastTick = rt.ticks;
  if (!sound.playing || sound.paused || !elapsed) return;
  const data = timeline(sound.number);
  let remaining = elapsed;
  while (remaining > 0 && sound.playing) {
    const length = data.durationTicks - sound.position;
    const step = Math.min(remaining, Math.max(0, length));
    applyCues(sound, data, sound.position, sound.position + step);
    sound.position += step; remaining -= step;
    if (sound.position >= data.durationTicks) {
      if (sound.loop > 0) sound.loop--;
      rt.set(sound.obj, 'loop', sound.loop);
      if (sound.loop && data.durationTicks > data.loopStartTick) sound.position = data.loopStartTick;
      else { end(rt, sound, true); break; }
    }
    if (step === 0 && data.durationTicks <= data.loopStartTick) { end(rt, sound, true); break; }
  }
  const fade = sound.fade;
  if (fade && sound.playing) {
    while (rt.ticks >= fade.next && sound.fade) {
      fade.next += fade.interval;
      sound.volume = clamp(sound.volume + fade.step, 127);
      if ((fade.step >= 0 && sound.volume >= fade.target) || (fade.step <= 0 && sound.volume <= fade.target)) {
        sound.volume = fade.target; sound.signal = -1;
        delete sound.fade; if (fade.stop) end(rt, sound, false);
      }
    }
  }
  const ticks = Math.floor(sound.position);
  rt.set(sound.obj, 'min', Math.floor(ticks / 3600)); rt.set(sound.obj, 'sec', Math.floor(ticks / 60) % 60); rt.set(sound.obj, 'frame', ticks % 60);
}
export function applySoundKernel(rt: Runtime, args: any[]): number {
  const command = Number(args[0]), obj = args[1], config = settings(rt);
  if (command === 0) { const previous = config.volume; if (args.length > 1) config.volume = clamp(args[1], 15); return previous; }
  if (command === 1) { const previous = +config.enabled; if (args.length > 1) config.enabled = !!args[1]; return previous; }
  if (command === 2) return 0;
  if (command === 3) return 9;
  if (command === 9 && !obj) {
    for (const [id, sound] of rt.soundState) if (id >= 0) { advance(rt, sound); sound.paused = Math.max(0, sound.paused + (args[2] ? 1 : -1)); if (sound.fade) sound.fade.next = rt.ticks + sound.fade.interval; }
    return 0;
  }
  if (!obj || obj.kind !== 'object') return 0;
  let sound = rt.soundState.get(obj.id) as PlayingSound | undefined;
  if (sound) advance(rt, sound);
  if (command === 5) {
    const number = rt.get(obj, 'number'); timeline(number);
    sound = { obj, number, generation: (sound?.generation ?? 0) + 1, playing: false, paused: 0, position: 0, lastTick: rt.ticks,
      loop: signed(rt.get(obj, 'loop')) || 1, volume: clamp(rt.get(obj, 'vol'), 127), priority: rt.get(obj, 'priority'), signal: 0, dataInc: 0, bed: false, ended: false };
    rt.soundState.set(obj.id, sound); rt.set(obj, 'nodePtr', 1); rt.set(obj, 'handle', 0); rt.set(obj, 'signal', 0); rt.set(obj, 'dataInc', 0); return 0;
  }
  if (command === 6) { if (sound) end(rt, sound, false); rt.soundState.delete(obj.id); rt.set(obj, 'nodePtr', 0); rt.set(obj, 'handle', 0); return 0; }
  if (!sound) return 0;
  if (command === 7) {
    sound.playing = true; sound.ended = false; sound.paused = 0; sound.position = 0; sound.lastTick = rt.ticks; sound.signal = 0; sound.dataInc = 0; sound.bed = !!args[2];
    sound.loop = signed(rt.get(obj, 'loop')) || 1; sound.volume = clamp(rt.get(obj, 'vol'), 127);
    rt.set(obj, 'handle', 1); rt.set(obj, 'signal', 0); return 0;
  }
  if (command === 8) { end(rt, sound, false); rt.set(obj, 'signal', -1); return 0; }
  if (command === 9) { sound.paused = Math.max(0, sound.paused + (args[2] ? 1 : -1)); if (sound.fade) sound.fade.next = rt.ticks + sound.fade.interval; return 0; }
  if (command === 10) {
    const target = clamp(args[2], 127), step = Math.abs(Number(args[4]) || 1), interval = Math.max(1, Number(args[3]) || 1);
    if (sound.volume === target && !args[5]) return 0;
    sound.fade = { target, step: sound.volume > target ? -step : step, interval, next: rt.ticks + 1, stop: !!args[5] }; return 0;
  }
  if (command === 11) {
    if (sound.signal) { rt.set(obj, 'signal', sound.signal); sound.signal = 0; }
    else if (sound.dataInc !== rt.get(obj, 'dataInc')) { rt.set(obj, 'dataInc', sound.dataInc); rt.set(obj, 'signal', sound.dataInc + 127); }
    return 0;
  }
  if (command === 4) { sound.loop = signed(rt.get(obj, 'loop')); sound.volume = clamp(rt.get(obj, 'vol'), 127); sound.priority = rt.get(obj, 'priority'); return 0; }
  if (command === 12) {
    // Sound.send is defined but never invoked by the unmodified Jones scripts.
    // A mod cannot silently ask a pre-rendered PCM track to change instruments.
    throw new Error('Dynamic scripted MIDI requires live OPL synthesis; original Jones does not call Sound.send.');
  }
  throw new Error(`Unknown original SCI1 sound command ${command}`);
}
export function soundSnapshot(rt: Runtime): AudioSnapshot {
  const config = settings(rt); const sounds: AudioSnapshot['sounds'] = [];
  for (const [id, sound] of rt.soundState as Map<number, PlayingSound>) {
    if (id < 0) continue;
    advance(rt, sound); const data = timeline(sound.number);
    sounds.push({ instance: id, id: sound.number, generation: sound.generation, positionTicks: sound.position, durationTicks: data.durationTicks,
      loopStartTick: data.loopStartTick, loop: sound.loop, volume: sound.volume, priority: sound.priority, playing: sound.playing, paused: !!sound.paused, ended: sound.ended, bed: sound.bed });
  }
  return { tick: rt.ticks, masterVolume: config.volume, enabled: config.enabled, sounds };
}
