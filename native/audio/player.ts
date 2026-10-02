// SPDX-License-Identifier: GPL-3.0-or-later
import type { AudioSnapshot } from './kernel.js';

interface ActiveSound { source: AudioBufferSourceNode; gain: GainNode; generation: number; startedAt: number; offset: number; loopStart: number; loopEnd: number; looping: boolean; naturalEnd: boolean }
export interface NativeAudioOptions { baseUrl: string; onError?: (error: Error) => void }

/** Plays the exported original FM waveform. SCI time and cues remain on the host. */
export class NativeAudioPlayer {
  private context: AudioContext | null = null;
  private master: GainNode | null = null;
  private active = new Map<number, ActiveSound>();
  private loading = new Map<number, Promise<AudioBuffer>>();
  private buffers = new Map<number, AudioBuffer>();
  private latest: AudioSnapshot | null = null;
  private disposed = false;
  private failed = new Set<number>();

  constructor(private readonly options: NativeAudioOptions) {}
  /** Call directly from the user's Play gesture, before waiting for network work. */
  async unlock(): Promise<void> {
    if (this.disposed) return;
    if (!this.context) {
      this.context = new AudioContext({ sampleRate: 44100 });
      this.master = this.context.createGain(); this.master.connect(this.context.destination);
    }
    await this.context.resume();
    // The five-tick original click must be decoded before its first use.
    for (const id of [23, 31, 28, 45]) void this.buffer(id).catch(failure => {
      if (!this.failed.has(id)) { this.failed.add(id); this.options.onError?.(failure instanceof Error ? failure : new Error(String(failure))); }
    });
    if (this.latest) this.sync(this.latest);
  }
  private async buffer(id: number): Promise<AudioBuffer> {
    const cached = this.buffers.get(id);
    if (cached) { this.buffers.delete(id); this.buffers.set(id, cached); return cached; }
    const pending = this.loading.get(id); if (pending) return pending;
    const request = (async () => {
      const response = await fetch(new URL(`audio/sound-${String(id).padStart(4, '0')}.flac`, this.options.baseUrl));
      if (!response.ok) throw new Error(`Original sound ${id} could not be loaded (${response.status}).`);
      const data = await this.context!.decodeAudioData(await response.arrayBuffer());
      this.buffers.set(id, data);
      // Keep recently used tracks; playing nodes retain their own AudioBuffers.
      while (this.buffers.size > 6) this.buffers.delete(this.buffers.keys().next().value!);
      return data;
    })();
    this.loading.set(id, request);
    try { return await request; } finally { this.loading.delete(id); }
  }
  private stop(instance: number) {
    const sound = this.active.get(instance); if (!sound) return;
    this.active.delete(instance);
    try { sound.source.stop(); } catch { /* already ended */ }
    sound.source.disconnect(); sound.gain.disconnect();
  }
  private position(sound: ActiveSound) {
    let position = sound.offset + (this.context!.currentTime - sound.startedAt);
    if (sound.looping && sound.loopEnd > sound.loopStart && position >= sound.loopEnd) position = sound.loopStart + (position - sound.loopEnd) % (sound.loopEnd - sound.loopStart);
    return position;
  }
  sync(snapshot: AudioSnapshot): void {
    if (this.disposed) return;
    if (this.latest && snapshot.tick < this.latest.tick) for (const id of [...this.active.keys()]) this.stop(id);
    this.latest = snapshot;
    if (!this.context || !this.master || this.context.state !== 'running') return;
    this.master.gain.setValueAtTime(snapshot.enabled ? snapshot.masterVolume / 15 : 0, this.context.currentTime);
    const present = new Set(snapshot.sounds.map(sound => sound.instance));
    for (const id of [...this.active.keys()]) if (!present.has(id)) this.stop(id);
    for (const state of snapshot.sounds) {
      let active = this.active.get(state.instance);
      if (!state.playing || state.paused) {
        if (active && state.ended && !state.paused && active.generation === state.generation) {
          active.source.loop = false; active.looping = false; active.naturalEnd = true;
        } else this.stop(state.instance);
        continue;
      }
      const position = state.positionTicks / 60;
      const looping = state.loop < 0 || state.loop > 1;
      if (active && (active.generation !== state.generation || active.naturalEnd || Math.abs(this.position(active) - position) > 0.35)) { this.stop(state.instance); active = undefined; }
      if (active) {
        active.gain.gain.setTargetAtTime(state.volume / 127, this.context.currentTime, 0.01);
        active.source.loop = looping; active.looping = looping; continue;
      }
      if (this.failed.has(state.id)) continue;
      void this.buffer(state.id).then(buffer => {
        const current = this.latest?.sounds.find(sound => sound.instance === state.instance);
        if (this.disposed || !current?.playing || current.paused || current.generation !== state.generation || this.active.has(state.instance) || this.context?.state !== 'running') return;
        const source = this.context.createBufferSource(), gain = this.context.createGain();
        source.buffer = buffer; gain.gain.value = current.volume / 127;
        source.loopStart = current.loopStartTick / 60; source.loopEnd = current.durationTicks / 60;
        source.loop = current.loop < 0 || current.loop > 1;
        source.connect(gain); gain.connect(this.master!);
        const playing: ActiveSound = { source, gain, generation: current.generation, startedAt: this.context.currentTime, offset: current.positionTicks / 60,
          loopStart: source.loopStart, loopEnd: source.loopEnd, looping: source.loop, naturalEnd: false };
        this.active.set(current.instance, playing);
        source.onended = () => { if (this.active.get(current.instance) === playing) this.active.delete(current.instance); source.disconnect(); gain.disconnect(); };
        source.start(0, Math.min(playing.offset, Math.max(0, buffer.duration - .001)));
      }).catch(failure => { if (!this.failed.has(state.id)) { this.failed.add(state.id); this.options.onError?.(failure instanceof Error ? failure : new Error(String(failure))); } });
    }
  }
  async dispose() {
    this.disposed = true;
    for (const id of [...this.active.keys()]) this.stop(id);
    this.buffers.clear(); this.latest = null;
    await this.context?.close(); this.context = null; this.master = null;
  }
}
