# Original SCI1 audio

`tools/export_native_audio.py` reads all 34 original sound resources directly
from the original resource volumes. It retains the original channel events,
60 Hz timing, ten intro/loop markers and all three instrument patches. There
are no incremental or nonzero-time signal cues in this Jones release; resource
end cues and loop counts are handled by `kernel.ts`.

The exporter translates the AdLib track (device 0) using Jones' 48 instruments
in patch 3, the SCI1 velocity/frequency tables and nine-voice allocation. Its
register traces are rendered with two independent Nuked-OPL3 chips in OPL2
mode, reproducing the stereo presentation used by the earlier browser port.
The resulting 44.1 kHz stereo FLAC files are lossless. Two seconds of release
tail are retained after the original logical resource duration.

The SCI resource parser and AdLib register calculations are derived from
[ScummVM's SCI audio implementation](https://github.com/scummvm/scummvm/tree/fed42f2068dcafc6aafa1c28c77e4c88def74b66/engines/sci/sound),
copyright the ScummVM team, GPL-3.0-or-later. This is build-time format/driver
code; no ScummVM interpreter or executable is linked into the native game.
`vendor/provenance.json` pins the unmodified [Nuked-OPL3](https://github.com/nukeykt/Nuked-OPL3)
sources and their hashes; its LGPL-2.1 licence is in `vendor/LICENSE`.
Sierra's original sound and patch data retain their existing rights.

To regenerate, provide a C compiler and FFmpeg, then run:

```sh
python3 tools/export_native_audio.py
```

`CC` selects a compiler. `--renderer /path/to/render_opl` reuses an already
compiled `native/audio/render_opl.c` plus `native/audio/vendor/opl3.c` executable.
The game needs neither tool at runtime. `--metadata-only` audits resource data
without claiming to render missing audio. Generated `timelines.json` supplies
the authoritative native sound kernel; browser playback uses only FLAC and
Web Audio. `NativeAudioPlayer.unlock()` must run from the Play gesture.

Limits: these are genuine original FM instrument/event renders, not a
bit-identical recording of a physical AdLib board. Mixing separately rendered
simultaneous sounds does not reproduce shared-chip voice stealing between
different Sound objects. Master/object volume and fades are PCM gain changes,
which are not bit-identical to the original FM operator-level quantization.
Dynamic scripted MIDI changes require live synthesis and fail explicitly;
the unmodified Jones scripts define `Sound.send` but never invoke it.
