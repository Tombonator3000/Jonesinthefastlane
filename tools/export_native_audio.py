#!/usr/bin/env python3
"""Decode original SCI1 sound and render its AdLib patches with Nuked-OPL3.

SPDX-License-Identifier: GPL-3.0-or-later
SCI parser, voice allocation and register calculations are adapted from the
ScummVM team's GPL-3.0-or-later SCI sound implementation, pinned at
fed42f2068dcafc6aafa1c28c77e4c88def74b66. No ScummVM executable is used.
Sierra music/instrument data retain their original rights.
"""
from __future__ import annotations
import argparse
import collections
import hashlib
import json
import os
from pathlib import Path
import shutil
import struct
import subprocess
import tempfile
from sci_core import FormatError, read_game

ROOT = Path(__file__).resolve().parents[1]
REFERENCE = 'https://github.com/scummvm/scummvm/tree/fed42f2068dcafc6aafa1c28c77e4c88def74b66/engines/sci'
OFFSETS = [0, 1, 2, 8, 9, 10, 16, 17, 18]
VELOCITY1 = [0,12,13,14,15,17,18,19,20,22,23,24,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,43,45,45,46,47,48,49,50,50,51,52,52,53,54,54,55,56,56,57,58,59,59,59,60,60,60,61,61,61,62,62,62,62,63,63,63]
VELOCITY2 = [0,20,21,22,23,24,25,26,27,28,29,30,31,32,33,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,47,48,49,50,50,51,52,52,53,54,54,55,56,56,57,57,58,58,59,59,59,60,60,60,61,61,61,62,62,62,62,63,63,63]
FREQUENCIES = [0x157,0x15c,0x161,0x166,0x16b,0x171,0x176,0x17b,0x181,0x186,0x18c,0x192,0x198,0x19e,0x1a4,0x1aa,0x1b0,0x1b6,0x1bd,0x1c3,0x1ca,0x1d0,0x1d7,0x1de,0x1e5,0x1ec,0x1f3,0x1fa,0x202,0x209,0x211,0x218,0x220,0x228,0x230,0x238,0x241,0x249,0x252,0x25a,0x263,0x26c,0x275,0x27e,0x287,0x290,0x29a,0x2a4]

def decode_sound(raw: bytes, number: int) -> dict:
    pos = 0
    tracks = []
    while pos < len(raw) and raw[pos] != 255:
        kind = raw[pos]; pos += 1; channels = []
        while pos < len(raw) and raw[pos] != 255:
            if pos + 6 > len(raw): raise FormatError(f'Sound {number}: truncated track header')
            unknown, offset, size = struct.unpack_from('<HHH', raw, pos); pos += 6
            if offset + size > len(raw) or size < 2: raise FormatError(f'Sound {number}: invalid channel extent')
            channels.append({'offset': offset, 'size': size, 'number': raw[offset] & 15, 'flags': raw[offset] >> 4, 'poly': raw[offset+1] & 15, 'priority': raw[offset+1] >> 4})
        pos += 1; tracks.append({'type': kind, 'channels': channels})
    if pos >= len(raw): raise FormatError(f'Sound {number}: no header terminator')
    track = next((t for t in tracks if t['type'] == 0), None)
    if track is None: raise FormatError(f'Sound {number}: missing original AdLib track')
    events = []; end_ticks = []; counts = collections.Counter(); cues = []; loop_start = 0
    for channel_index, channel in enumerate(track['channels']):
        start = channel['offset']; data = raw[start + 2:start + channel['size']]
        if raw[start] == 0xfe: raise FormatError('Digital sound requires a dedicated sample decoder')
        i = 0; tick = 0; running = 0; ended = False
        while i < len(data):
            delay = data[i]; i += 1; tick += 240 if delay == 248 else delay
            if delay == 248: continue
            if i >= len(data): raise FormatError(f'Sound {number}: missing status')
            status = data[i]
            if status >= 128: i += 1
            else: status = running
            if status == 252:
                ended = True; end_ticks.append(tick); break
            if status == 240:
                end = data.find(b'\xf7', i)
                if end < 0: raise FormatError('Unterminated sound SysEx')
                params = list(data[i:end+1]); i = end+1
            else:
                if not 0x80 <= status <= 0xef: raise FormatError(f'Unsupported sound event {status:02x}')
                length = 1 if status >> 4 in [12, 13] else 2
                if i + length > len(data): raise FormatError('Truncated MIDI parameters')
                params = list(data[i:i+length]); i += length; running = status
                if any(p > 127 for p in params): raise FormatError('Invalid MIDI parameter')
            events.append({'tick': tick, 'status': status, 'data': params, 'channelIndex': channel_index})
            counts[f'{status:02x}'] += 1
        if not ended: raise FormatError(f'Sound {number}: channel has no end marker')
    events.sort(key=lambda e: (e['tick'], e['channelIndex']))
    for event in events:
        if event['status'] == 0xcf:
            if event['data'][0] == 127: loop_start = event['tick']
            elif event['tick'] > 0: cues.append({'tick': event['tick'], 'signal': event['data'][0]})
        elif event['status'] == 0xbf and event['data'][0] == 0x60:
            cues.append({'tick': event['tick'], 'dataInc': 1})
    return {'id': number, 'sourceSha256': hashlib.sha256(raw).hexdigest(), 'durationTicks': max(end_ticks, default=0), 'loopStartTick': loop_start,
            'cues': cues, 'events': events, 'channels': track['channels'], 'trackTypes': [t['type'] for t in tracks], 'eventCounts': dict(counts)}

class AdLib:
    """SCI1 nine-voice driver; the independent OPL chip supplies actual FM synthesis."""
    def __init__(self, patch: bytes):
        if len(patch) != 48 * 28: raise FormatError('Expected Jones original 48-instrument AdLib bank')
        self.patches = [patch[i:i+28] for i in range(0, len(patch), 28)]
        self.channels = [dict(patch=0, volume=63, pan=64, hold=0, extra=0, pitch=8192, last=0) for _ in range(16)]
        self.voices = [dict(channel=-1, mapped=-1, note=-1, patch=-1, velocity=0, sustained=False, age=0) for _ in range(9)]
        self.tick = 0; self.writes = []; self.dropped = 0
        for register, value in [(0xbd, 0), (8, 0), (1, 32)]: self.write(register, value)

    def write(self, register, value, chip=None):
        for which in [0, 1] if chip is None else [chip]: self.writes.append((self.tick, which, register, value & 255))

    def off(self, index):
        voice = self.voices[index]
        if voice['note'] >= 0: self.note(index, voice['note'], False)
        voice['note'] = -1; voice['age'] = 0; voice['sustained'] = False

    def mapping(self, channel, requested):
        state = self.channels[channel]
        current = sum(v['mapped'] == channel for v in self.voices) + state['extra']
        if current < requested: self.assign(channel, requested-current)
        elif current > requested:
            release = current-requested; from_extra = min(release, state['extra']); release -= from_extra; state['extra'] -= from_extra
            for idle in [True, False]:
                for i, voice in enumerate(self.voices):
                    if not release: break
                    if voice['mapped'] == channel and (not idle or voice['note'] == -1):
                        self.off(i); voice['mapped'] = -1; release -= 1
            for c, ch in enumerate(self.channels):
                free = sum(v['mapped'] == -1 for v in self.voices)
                give = min(ch['extra'], free)
                if give: ch['extra'] -= give; self.assign(c, give)

    def assign(self, channel, count):
        for i, voice in enumerate(self.voices):
            if voice['mapped'] == -1:
                self.off(i); voice['mapped'] = channel; count -= 1
                if count == 0: return
        self.channels[channel]['extra'] += count

    def patch(self, index, number):
        number = number if 0 <= number < len(self.patches) else 0
        patch = self.patches[number]; self.voices[index]['patch'] = number
        for op in range(2):
            offset = OFFSETS[index] + op*3; data = patch[op*13:op*13+13]
            self.write(0x40+offset, ((data[0]&3)<<6) | (data[8]&63))
            self.write(0x60+offset, ((data[3]&15)<<4) | (data[6]&15))
            self.write(0x80+offset, ((data[4]&15)<<4) | (data[7]&15))
            self.write(0x20+offset, (bool(data[9])<<7) | (bool(data[10])<<6) | (bool(data[5])<<5) | (bool(data[11])<<4) | (data[1]&15))
            self.write(0xe0+offset, patch[26+op]&3)
        self.write(0xc0+index, ((patch[2]&7)<<1) | int(not patch[12]))

    def note(self, index, note, key):
        voice = self.voices[index]; channel = self.channels[voice['channel']]; voice['note'] = note
        delta = channel['pitch']-8192; pitch = note*4 + (abs(delta)//171)*(1 if delta > 0 else -1)
        pitch = min(508, max(0, pitch)); frequency = FREQUENCIES[pitch % 48]
        octave = min(7, max(0, pitch//48-1))
        self.write(0xa0+index, frequency&255); self.write(0xb0+index, (int(key)<<5) | (octave<<2) | (frequency>>8))
        patch = self.patches[voice['patch']]
        for op in [1, 0] if not patch[12] else [1]:
            data = patch[op*13:op*13+13]
            velocity = (channel['volume']+1)*(VELOCITY1[voice['velocity']]+1)//64
            velocity = VELOCITY2[max(0, velocity-1)]*(63-(data[8]&63))//63
            left = velocity*(127-channel['pan'])//63 if channel['pan'] > 64 else velocity
            right = velocity*channel['pan']//64 if channel['pan'] < 64 else velocity
            for chip, level in enumerate([left, right]): self.write(0x40+OFFSETS[index]+op*3, ((data[0]&3)<<6) | (63-level), chip)

    def renew(self, channel):
        for i, voice in enumerate(self.voices):
            if voice['channel'] == channel and voice['note'] >= 0: self.note(i, voice['note'], True)

    def on(self, channel, note, velocity):
        if velocity == 0: return self.note_off(channel, note)
        if note < 12 or note > 107: return
        chosen = next((i for i,v in enumerate(self.voices) if v['channel'] == channel and v['note'] == note), -1)
        if chosen >= 0: self.off(chosen)
        else:
            oldest = -1; age = 0
            for n in range(9):
                i = (self.channels[channel]['last']+n+1)%9; voice = self.voices[i]
                if voice['mapped'] != channel: continue
                if voice['note'] == -1: chosen = i; break
                if voice['age'] >= age: oldest = i; age = voice['age']
            if chosen < 0 and age > 0: chosen = oldest; self.off(chosen)
            if chosen < 0: self.dropped += 1; return
            self.channels[channel]['last'] = chosen
        voice = self.voices[chosen]; voice['channel'] = channel; voice['age'] = 0; voice['velocity'] = velocity >> 1
        if voice['patch'] != self.channels[channel]['patch']: self.patch(chosen, self.channels[channel]['patch'])
        self.note(chosen, note, True)

    def note_off(self, channel, note):
        for i, voice in enumerate(self.voices):
            if voice['channel'] == channel and voice['note'] == note:
                if self.channels[channel]['hold']: voice['sustained'] = True
                else: self.off(i)
                return

    def send(self, status, data):
        channel = status & 15; kind = status >> 4; state = self.channels[channel]
        if channel == 15: return
        if kind == 8: self.note_off(channel, data[0])
        elif kind == 9: self.on(channel, data[0], data[1])
        elif kind == 12: state['patch'] = data[0]
        elif kind == 14: state['pitch'] = data[0] | data[1]<<7; self.renew(channel)
        elif kind == 11:
            control, value = data
            if control == 7: state['volume'] = value >> 1; self.renew(channel)
            elif control == 10: state['pan'] = value; self.renew(channel)
            elif control == 64:
                state['hold'] = value
                if not value:
                    for i, voice in enumerate(self.voices):
                        if voice['channel'] == channel and voice['sustained']: self.off(i)
            elif control == 75: self.mapping(channel, value)
            elif control == 123:
                for i, voice in enumerate(self.voices):
                    if voice['channel'] == channel and voice['note'] >= 0: self.off(i)

    def render_trace(self, sound):
        # Voice counts are part of the original channel header, not GM defaults.
        for channel in sound['channels']:
            if channel['number'] != 15: self.mapping(channel['number'], channel['poly'])
        for event in sound['events']:
            elapsed = event['tick']-self.tick
            for voice in self.voices:
                if voice['note'] >= 0: voice['age'] = min(65535, voice['age']+elapsed)
            self.tick = event['tick']; self.send(event['status'], event['data'])
        self.tick = sound['durationTicks']
        for i in range(9): self.off(i)
        return self.writes

def find_renderer(explicit: Path | None) -> Path:
    if explicit: return explicit.resolve()
    out = ROOT/'build/native-audio-renderer'; out.parent.mkdir(parents=True, exist_ok=True)
    sources = [ROOT/'native/audio/render_opl.c', ROOT/'native/audio/vendor/opl3.c']
    if out.exists() and out.stat().st_mtime >= max(p.stat().st_mtime for p in sources): return out
    compiler = os.environ.get('CC') or shutil.which('cc') or shutil.which('gcc') or shutil.which('clang')
    if not compiler: raise RuntimeError('Audio export needs a native C compiler (CC) or --renderer PATH. The browser does not need a compiler or emulator.')
    subprocess.run([compiler, '-O2', *map(str, sources), '-o', str(out)], check=True)
    return out

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--original', type=Path, default=ROOT/'original')
    parser.add_argument('--out', type=Path, default=ROOT/'native/public/assets')
    parser.add_argument('--renderer', type=Path)
    parser.add_argument('--metadata-only', action='store_true')
    args = parser.parse_args(); _, resources, _ = read_game(args.original)
    out = args.out/'audio'; out.mkdir(parents=True, exist_ok=True)
    renderer = None
    previous_path = args.out/'audio-manifest.json'
    previous = json.loads(previous_path.read_text()) if previous_path.exists() else {}
    render_sources = [ROOT/'native/audio/render_opl.c', ROOT/'native/audio/vendor/opl3.c', ROOT/'native/audio/vendor/opl3.h']
    render_source_hash = hashlib.sha256(b''.join(p.read_bytes() for p in render_sources)).hexdigest()
    manifest = {'schema': 1, 'ticksPerSecond': 60, 'sampleRate': 44100, 'format': 'FLAC lossless stereo, original SCI1 AdLib instrument bank', 'reference': REFERENCE,
                'renderSourceSha256': render_source_hash, 'chip': json.loads((ROOT/'native/audio/vendor/provenance.json').read_text()), 'rights': 'Original Sierra sound resources retain their original rights.', 'sounds': {}, 'patches': {}}
    for (kind, number), raw in sorted(resources.items()):
        if kind == 9:
            name = f'patch-{number:04d}.bin'; (out/name).write_bytes(raw)
            manifest['patches'][number] = {'path': f'audio/{name}', 'bytes': len(raw), 'sha256': hashlib.sha256(raw).hexdigest()}
        if kind != 4: continue
        sound = decode_sound(raw, number); driver = AdLib(resources[(9, 3)]); writes = driver.render_trace(sound)
        trace = struct.pack('<III', len(writes), sound['durationTicks']+120, 44100) + b''.join(struct.pack('<IBHB', *w) for w in writes)
        sound['registerTraceSha256'] = hashlib.sha256(trace).hexdigest(); sound['registerWrites'] = len(writes); sound['unallocatedNotes'] = driver.dropped
        sound['path'] = f'audio/sound-{number:04d}.flac'
        audio = args.out/sound['path']; fingerprint = audio.with_suffix('.sha256')
        cache_valid = (audio.exists() and fingerprint.exists() and fingerprint.read_text().strip() == sound['registerTraceSha256'] and
                       previous.get('renderSourceSha256') == render_source_hash and
                       hashlib.sha256(audio.read_bytes()).hexdigest() == previous.get('sounds', {}).get(str(number), {}).get('audioSha256'))
        if not args.metadata_only and not cache_valid:
            if renderer is None: renderer = find_renderer(args.renderer)
            with tempfile.TemporaryDirectory(prefix='jones-opl-') as folder:
                source = Path(folder)/'sound.trace'; wav = Path(folder)/'sound.wav'; source.write_bytes(trace)
                subprocess.run([str(renderer), str(source), str(wav)], check=True)
                subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(wav), '-c:a', 'flac', '-compression_level', '8', str(audio)], check=True)
            fingerprint.write_text(sound['registerTraceSha256']+'\n')
        if audio.exists(): sound['audioSha256'] = hashlib.sha256(audio.read_bytes()).hexdigest(); sound['audioBytes'] = audio.stat().st_size
        sound['rendered'] = audio.exists()
        manifest['sounds'][number] = sound
        print(f"Sound {number}: {sound['durationTicks']/60:.2f}s, {len(sound['events'])} events, {len(sound['cues'])} cues, {len(writes)} OPL writes", flush=True)
    (args.out/'audio-manifest.json').write_text(json.dumps(manifest, separators=(',', ':'))+'\n')
    timelines = {'schema': 1, 'ticksPerSecond': 60, 'sounds': {number: {key: sound[key] for key in ['id', 'durationTicks', 'loopStartTick', 'cues', 'sourceSha256']} for number, sound in manifest['sounds'].items()}}
    (ROOT/'native/audio/timelines.json').write_text(json.dumps(timelines, separators=(',', ':'))+'\n')
    print(f"Exported {len(manifest['sounds'])} sounds and {len(manifest['patches'])} patches")

if __name__ == '__main__': main()
