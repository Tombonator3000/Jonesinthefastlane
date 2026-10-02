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
A public room directory is outside this slice; invitation links connect friends.

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
assembly and applies backpressure. Frame ordering must remain the same as on
the authoritative host; stale frames cannot replace a later reconnect snapshot.
Original artwork is still drawn by Three.js with local display options.

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

Actual results and limitations belong in the delivery report. Do not call
cross-network or TURN behavior verified without running those conditions.
