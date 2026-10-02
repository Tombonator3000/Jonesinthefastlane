# Free multiplayer verification — 2 October 2026

The native edition now defaults to a browser-hosted PeerJS/WebRTC room. GitHub
Pages serves the game; PeerJS Cloud discovers the peers. No separate game
server or paid account was started for the public-signaling journey.

| Check | Result |
| --- | --- |
| Native TypeScript unit/integration tests | 68 passed |
| TypeScript check | Passed |
| Static site + local PeerServer + actual WebRTC | 11 passed |
| Static site + public PeerJS Cloud + actual WebRTC | 11 passed |
| Existing original-input single-player journey | 10 passed |
| Existing dedicated WebSocket journey | 6 passed |

The two final peer journeys loaded `index-D9Quyh4l.js` with SHA-256
`638f97683b7dd27b501b2e306a83f22724cc8e8a114ca6c1e74c24bf78d1a121` on every observed page load. Complete hashes, timestamps,
check names and sanitized RTC counters are in
[the machine-readable report](peer_multiplayer_verification.json).

The peer journeys exercise invitation creation/joining, wrong-seat rejection,
real guest reload and private-seat resume, original player-count validation,
both players' original character/goal screens, Connection staying open during
incoming game frames, original bank/F5/F7 Save/Restore, a complete human turn
and handoff, actual host closure, then a fresh host page/new invitation loading
the saved game through the original Restore Game menu. Host/guest indexed
frames are compared. No test mutates the game state to advance these steps.

The single-player and WebSocket local results preceded the final peer recovery
and Connection-dialog changes. GitHub's full workflow reruns all journeys on
the exact PR commit before publication. Published Pages verification is recorded
separately in `peer_multiplayer_delivery.json` after deployment succeeds.

One earlier run froze a guest at tick462. Its cause remains undetermined and
its [failure report is retained](peer-evidence/earlier-disconnect.json), with
screenshots preserved locally. Repeated later journeys passed. The final
code exposes terminal disconnect reasons and fixes a separately verified bug:
transient queue pressure/timeouts had disabled automatic reconnection. A unit
regression now checks actual wire queue failure followed by private-seat resume;
malformed messages still stop without a retry loop.

These are two isolated Chromium contexts on one machine, including real public
signaling. They do **not** verify two physical internet connections or TURN.
The creator must keep the page open and device awake. Their original F5 save
survives closing the page; unsaved state and automatic host migration do not.
Original gameplay rules were not replaced, and exhaustive 1:1 parity is not
claimed from these journeys.

- [Guest original goals](peer-evidence/guest-goals.png)
- [Second human's original turn](peer-evidence/guest-turn.png)
- [Saved game restored into a new room](peer-evidence/restored-new-room.png)
