# Free peer multiplayer

## Accepted experience

The game remains on GitHub Pages. The creator selects **Play online**, chooses
one to four players and presses **Create game**. They share the invitation,
wait for the other players, and select **Start game**. The original English
Jones menus follow, including the same player count, characters, goals and
Jones challenge. Each human controls their own original setup and turn.

No paid game server, hosting account or server address is required for the
default peer mode. This adopts Guild Life Adventures' host-browser architecture:
[PeerManager reference](https://github.com/Tombonator3000/guild-life-adventures/blob/1fa067156a62de8837bb5c0df091716cd172e569/src/network/PeerManager.ts).
It does not import Guild Life's gameplay, action rules or automatic turn skips.
Invitation links connect friends. **Find games** also lists waiting public rooms
by name, player count and available seats. Rooms are private by default; the host
must explicitly choose **Public room** and a room name to advertise one.

## In-game online menu

The online menu uses the town backdrop and the original cream/turquoise palette.
It is available from the launch screen and the added **Play online** button in
the unused header strip above the original Play/Restore/Demo controls. During an
online game, **Connection** reopens the same panel. A local game exposes the entry
only at its original main menu, so it cannot discard an ongoing solo turn.

Create/Join, Find games and the waiting room are separate views. Room seats show
connected players and available or reserved places. **Copy invitation** copies
the shared link, with manual selection if clipboard access is unavailable.
**Back** or Escape closes the panel; **Leave online game** disconnects. The host
can change a waiting room's public listing without leaving the room.

The backdrop is a standalone graphics snapshot, with no local game simulation.
DOM controls preserve text entry, keyboard navigation and screen-reader labels.
Modal controls block game input; closing returns focus to the game. Online
simulation and incoming frames continue while the panel is open. No original
menu scripts, game coordinates, networking protocol or game rules are replaced.
The same presentation works with Original and HD graphics, including portrait
viewports. `pnpm test:browser:lobby` exercises these original-input UI journeys.

## Public room directory

`native/network/discovery.ts` uses MQTT over secure WebSocket to the shared free
HiveMQ public broker, following [Guild Life's directory approach](https://github.com/Tombonator3000/guild-life-adventures/blob/1fa067156a62de8837bb5c0df091716cd172e569/src/network/gameListing.ts). It advertises
only the room name, host peer ID, shared invitation token, capacity and occupied
seats. Private reconnect credentials and game state are never published there.
Room names are public, and anyone can join a public room's available seats.

Announcements are renewed every 30 seconds and expire from clients after 90
seconds without renewal. Closed, full and started rooms are removed; broker
Last Will also removes an abruptly disconnected advertiser. Refresh performs a
real resubscription, and stale entries are pruned without needing new traffic.
The list filters compatible game versions and signaling configurations. It
validates and bounds untrusted records, renders names as text, and preserves
keyboard focus while unchanged rooms receive renewal messages.

This directory is best effort. HiveMQ describes its public broker as intended
for temporary testing, not production/private data:
[official public broker guidance](https://www.hivemq.com/mqtt/public-mqtt-broker/).
An unavailable directory does not stop private invitations or an established
game. A room listing does not remove the host-lifetime or restrictive-network
limitations described below.

For a separately operated broker or the real local test fixture, use the page's
`lobby=ws(s)://.../mqtt` query parameter. No broker account, private credentials or
paid service is provisioned by the default implementation. A production directory
can later replace this dependency without changing Jones' gameplay or PeerJS rooms.

## Authority and transport

`native/network/authority.ts` owns room membership, private seat tokens, input
validation, original tick ordering and reconnect snapshots. Both the optional
Node/WebSocket adapter and the browser peer host use this same authority.
Only one `createNativeSession()` runs per game. The creator also sends inputs
through authority validation, rather than bypassing the current turn.

`native/network/peer.ts` uses PeerJS data connections. PeerJS Cloud handles the
initial signaling; the actual gameplay messages travel over ordered WebRTC
data channels. Google STUN servers help establish direct connections. The free
cloud is a shared external dependency, not a service operated by this repo.
See [PeerJS connection documentation](https://peerjs.com/client/faq).

The indexed frame is larger than a single conservative data-channel packet.
The transport therefore bounds, compresses and splits messages, checks their
assembly and applies receive-side backpressure. Wire version 2 permits one message
in flight per direction; the receiver acknowledges it only after decoding and
handling it. This bounds inflated HD data even when compressed packets arrive fast.
A slow guest retains the newest complete unsent presentation snapshot, with frame,
state and input owner from the authoritative committed tick. Input acknowledgments,
room changes and other control messages remain ordered and cannot be replaced.
The host's original 60 Hz simulation is unchanged. Stale frames cannot replace a
later reconnect snapshot. A wire-version mismatch asks both players to reload or
update the page and does not enter an automatic reconnect loop.
Network pointer motion is coalesced before allocating input requests: while an
unacknowledged move is in flight, only the newest unsent position is retained.
Before a click or key event, that preceding position is flushed in order. All
clicks, key events and already-issued requests remain intact. This matches the
original runtime, where MOVE updates a pointer position and creates no SCI event.
Pending motion is discarded on disconnect, ownership change or a new session.
Original artwork is still drawn by Three.js with local display options.
Complete optional HD scene descriptions travel with each authoritative frame.
Peers load the static HD art locally and choose their own Original/HD settings;
the host does not stream large high-resolution images. See [HD graphics](HD_GRAPHICS.md).

Invitations contain a host peer ID, room ID and shared join token. They never
contain private seat credentials. Each guest stores their own reconnect token
in that tab's session storage. A reload followed by **Resume online game**
restores the same seat while the host still owns the room. Do not publish
private reconnect records, full invitation URLs or peer IP addresses in evidence.

## Saves and host lifetime

The original **Save Game / F5** action writes the native save to the creator's
local storage, even when a guest controls that original action. Peer saves use
`jones-peer-save-v1-N`, where N is the room's player count. They do not overwrite
single-player saves. The original **Restore Game / F7** flow restores the shared
session through the same game logic.

The host must keep the page open and their device awake. Closing or reloading
the host ends the live room. A new room with the same player count can load the
last original save through **Restore Game**. An unsaved mid-turn state is not
recoverable, and automatic host migration is not implemented. Guests receive
frames and public game summaries, not the complete resumable runtime.

The connection panel explains the host requirement. **Leave online game** asks
the host before ending everyone's connection. Guest disconnects do not replace
an original turn with a timeout, AI or a skipped turn. A lost active player can
reconnect; the original game does not silently change its rules.

Browser background throttling, device sleep and mobile screen locking can
suspend the host. Reconnection does not make a closed host continue running.
Some restrictive networks cannot form direct WebRTC connections without TURN.
No paid or third-party TURN account is provisioned here, and the default STUN
path cannot guarantee connectivity for every pair of networks.

## Custom signaling and dedicated servers

For a self-hosted PeerServer, pass its full base URL in the page's `signal`
query parameter, for example `?signal=http://127.0.0.1:9000/peerjs`.
The invitation retains that address. For an explicitly local/LAN deployment,
add `ice=local` to omit external STUN servers; this does not bypass WebRTC or
run a replacement game simulation. HTTPS pages require secure signaling when
connecting across the public internet. URLs must not contain credentials.

The normal build has no custom signaling parameter and uses PeerJS Cloud.
The **Advanced connection → Dedicated server** option retains the existing
Node/WebSocket deployment for users who want a continuously hosted game.
Its room state and original saves remain in server memory; restarting that
server loses them. Rooms with no connected players expire after 30 minutes.
Only peer mode stores original saves on the creator's device.

## Verification gates

- Shared room-authority tests cover seat ownership, bad input, count validation,
  queued old-seat input, reconnect takeover, expiry and runtime cleanup.
- Peer wire tests cover bounded message assembly and large original frames.
- `pnpm test:browser:peer` serves the production build as static files, starts
  an actual local PeerServer for deterministic signaling and uses real WebRTC
  between isolated Chromium contexts. It must use original gameplay inputs.
- A separate cloud-signaling run uses `JONES_PEER_CLOUD=1`; passing local
  signaling is not evidence that the public signaling service was reachable.
- Public Pages verification must target the published build and preserve the
  distinction between two isolated browser contexts and two physical networks.
- `pnpm test:browser:discovery` uses a real local MQTT WebSocket broker and real
  PeerJS/WebRTC to create, discover, search, refresh and join a public room. It
  checks renewal, private defaults, full-room removal, fullscreen and focus.
  `JONES_DISCOVERY_CLOUD=1` separately exercises the public HiveMQ and PeerJS services.
  `JONES_PEER_GUEST_CPU_RATE=3` additionally throttles the actual guest browser for
  the peer journey. Any send/receive queue overflow fails the test even if an
  automatic reconnect later succeeds.

Actual results and limitations belong in the delivery report. Do not call
cross-network or TURN behavior verified without running those conditions.
