# Original turn readiness follow-up

The first main-branch publication [stopped in the peer journey](https://github.com/Tombonator3000/Jonesinthefastlane/actions/runs/36991400825).
Player 2 owned the turn and remained connected, but the test sent its Home click
without waiting for original turn setup to finish. The original player card
remained on screen and no lowcost dialog opened. The failed result and screenshot
are retained in `peer-evidence/ci-turn-handoff-failure.*`.

Original `players.doit` selects the next player before the marble transition and
`startTrn` finish. The state now exposes three existing values as read-only
observations: global474 (location input), global460 (turn transition), global481
(original turn starts). No input handling, original script, timing, rules or save
format changed. The original counter is reset/restored by F7 and saved games;
it is not a monotonic network epoch.

The browser test records the counter after F7 has restored the bank, then waits
for the second player, their seat ownership, no dialog, enabled location input,
no turn transition and a changed start count. It still sends exactly **one**
Home click and requires the actual original lowcost dialog to open. It adds no
extra confirmation, forced state change or click retry.

The follow-up passed TypeScript, all **68** native tests, production build and
both **11-check** original-input WebRTC journeys (local signaling and public
PeerJS Cloud). Both loaded `index-DRNMc4UY.js`, SHA-256
`8340d1985d32408476f95d59e6f60188273885b42fcaa3a590f8a06b41c77292`. [Full results](peer_turn_readiness_verification.json)
include the observed ready ticks, flags and before/after original turn counts.

[Guest controls the original home](peer-evidence/turn-ready-guest.png).
The [full publishing workflow](https://github.com/Tombonator3000/Jonesinthefastlane/actions/runs/36993114787) passed native,
reference verification and Pages deployment. The public Pages URL then passed
all 11 peer checks with the same production JavaScript hash. See
[the delivery record](peer_multiplayer_delivery.json). Physical cross-network/TURN tests
remain outside the verified scope.
