// SPDX-License-Identifier: GPL-3.0-or-later
import { NativeAudioPlayer } from './audio/player.js';
import { ThreeRenderer, type DisplayMode } from './graphics/ThreeRenderer.js';
import { GraphicsState, type GraphicsFrame, type NativeAssetManifest } from './graphics/index.js';
import { createNativeSession, type NativeSession } from './session.js';
import { BrowserNetworkClient } from './network/client.js';
import { BrowserPeerClient } from './network/peer.js';
import { NetworkInputProducer } from './network/input-producer.js';
import type { PeerOptions } from 'peerjs';
import { PublicRoomBrowser, PublicRoomAnnouncer, discoveryScope, type PublicRoom } from './network/discovery.js';
import type { GameInput, PlayerCount, Serializable, Credentials, RoomInfo } from './network/types.js';

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;
const canvas = $<HTMLCanvasElement>('game'), screen = $('screen');
type ConnectionMode = 'peer' | 'server';
type NetworkClient = BrowserNetworkClient | BrowserPeerClient;
type Resume = { mode: ConnectionMode; server?: string; hostPeerId?: string; signal?: string; ice?: string; credentials: Credentials };
const query = new URLSearchParams(location.search);
$<HTMLInputElement>('server').value = `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.port === '8767' ? location.hostname + ':8787' : location.host}/multiplayer`;
let assets: NativeAssetManifest, renderer: ThreeRenderer, session: NativeSession | undefined, network: NetworkClient | undefined;
let networkInput: NetworkInputProducer | undefined;
const heldKeys = new Set<string>();
const heldPointers = new Map<number, Extract<GameInput, { type: 'pointer' }>>();
let timer: ReturnType<typeof setInterval> | undefined, onlineState: Serializable = null, onlineFrame: Serializable = null;
let connectionMode: ConnectionMode = 'peer', busy = false, connectionNotice = '', networkGeneration = 0;
let openingNetwork = false, fullscreenRequest: Promise<void> | undefined;
let peerSignal = query.get('signal') ?? '', peerIce = query.get('ice') ?? '';
const saveKey = 'jones-native-save-v1';
const displayKey = 'jones-display-v1';
let roomBrowser: PublicRoomBrowser | undefined, roomAnnouncer: PublicRoomAnnouncer | undefined, listedRooms: PublicRoom[] = [];
const lobbyBroker = query.get('lobby') ?? undefined;
let displayPreferences = { mode: 'original' as DisplayMode, resolutionHeight: 0, pack: 'original' as 'original' | 'hd', lighting: false, intensity: .4 };
try {
  const saved = JSON.parse(localStorage.getItem(displayKey) ?? 'null');
  if (saved && ['original','smooth','modern','crt'].includes(saved.mode)) displayPreferences.mode = saved.mode;
  if (saved && [0,720,1080,1440,2160].includes(saved.resolutionHeight)) displayPreferences.resolutionHeight = saved.resolutionHeight;
  if (saved?.pack === 'hd') displayPreferences.pack = 'hd';
  if (typeof saved?.lighting === 'boolean') displayPreferences.lighting = saved.lighting;
  if (typeof saved?.intensity === 'number' && Number.isFinite(saved.intensity)) displayPreferences.intensity = Math.max(0,Math.min(1,saved.intensity));
} catch { /* Display choices remain available when local storage is blocked. */ }

const audio = new NativeAudioPlayer({ baseUrl: new URL('./assets/', location.href).href, onError: error => showNetworkNotice(error.message) });
let resume: Resume | undefined;
try {
  const value = JSON.parse(sessionStorage.getItem('jones-online-session') ?? 'null');
  if (value?.credentials?.sessionToken && (value.server || value.hostPeerId)) resume = { ...value, mode: value.mode ?? 'server' };
} catch { /* An unavailable or malformed old reconnect record cannot create a seat. */ }
function status(message: string) { $('connection').textContent = message; }
function showNetworkNotice(message: string) {
  connectionNotice = message;
  $('network-status').hidden = !message;
  $('network-status').textContent = message;
}
function fail(error: unknown) { $('error').textContent = error instanceof Error ? error.message : String(error); $('failure').hidden = false; console.error(error); }
function updateMenuEntry(state: Serializable = session?.getState() ?? null) {
  $('menu-online').hidden = !!network || !$('launch').hidden || (state as any)?.dialog !== 'select1';
}
function showTownBackdrop() {
  if (!renderer || !assets) return;
  // Presentation only: the lobby never starts a second game or changes a save.
  const backdrop = new GraphicsState(assets);
  backdrop.drawPic(0); backdrop.drawPic(11); backdrop.setCursor(-1, false);
  renderer.setPointer(); renderer.applyFrame(backdrop.snapshot());
}
function showLaunch() { $('launch').hidden = false; updateMenuEntry(); showTownBackdrop(); }
function restoreGameFocus() {
  if (document.querySelector('dialog[open]')) return;
  if ($('launch').hidden && (session || network?.room?.status === 'running')) canvas.focus();
  else $('online').focus();
}
function controls() {
  const joined = !!network?.room;
  $<HTMLButtonElement>('create').disabled = busy || joined;
  $<HTMLButtonElement>('join').disabled = busy || joined;
  $<HTMLSelectElement>('players').disabled = busy || joined;
  $<HTMLSelectElement>('connection-mode').disabled = busy || joined;
  $<HTMLInputElement>('server').disabled = busy || joined;
  const ownWaitingRoom = network instanceof BrowserPeerClient && network.peerRole === 'host' && network.room?.status === 'waiting';
  $('public-options').hidden = connectionMode !== 'peer' || (joined && !ownWaitingRoom);
  $<HTMLInputElement>('public-room').disabled = busy || (joined && !ownWaitingRoom);
  $<HTMLInputElement>('room-name').disabled = busy || (joined && !ownWaitingRoom);
  $<HTMLButtonElement>('find-games').disabled = busy || joined || connectionMode !== 'peer';
  $('room-name-label').hidden = !$<HTMLInputElement>('public-room').checked;
  $('leave-online').hidden = !network;
  $('connection-settings').hidden = !network;
  $('resume-online').hidden = !resume || joined;
  $<HTMLButtonElement>('resume-online').disabled = busy;
  $<HTMLButtonElement>('copy-invite').disabled = !$<HTMLInputElement>('invite-link').value;
  const dialog = $('network'), room = network?.room;
  if (room) dialog.dataset.view = 'room';
  else if (dialog.dataset.view !== 'games') dialog.dataset.view = 'home';
  const seats = document.createDocumentFragment();
  if (room) for (let index = 0; index < room.playerCount; index++) {
    const seat = room.seats.find(value => value.seat === index), row = document.createElement('li');
    const name = document.createElement('strong'), state = document.createElement('span');
    row.dataset.connected = String(!!seat?.connected);
    name.textContent = `Player ${index + 1}`; state.textContent = seat?.connected ? 'Connected' : seat ? 'Reserved' : 'Waiting';
    row.append(name, state);
    seats.append(row);
  }
  $('room-seats').replaceChildren(seats);
  $('room-summary').textContent = room ? `${room.seats.filter(seat => seat.connected).length} of ${room.playerCount} players connected${room.status === 'running' ? ' · Game in progress' : room.status === 'starting' ? ' · Starting game' : ''}` : '';
  updateMenuEntry();
}
function chooseMode(mode: ConnectionMode) {
  connectionMode = mode;
  $<HTMLSelectElement>('connection-mode').value = mode;
  $('server-label').hidden = mode !== 'server';
  if (mode !== 'peer') closeRoomBrowser();
  controls();
  $('online-help').textContent = mode === 'peer'
    ? 'Create a room, find a game, or join with an invitation. The host keeps the game open.'
    : 'Play through a dedicated game server.';
}
async function action(fn: () => Promise<void>) {
  if (busy) return;
  busy = true; controls();
  try { await fn(); } catch (error) { status(error instanceof Error ? error.message : String(error)); }
  finally { busy = false; controls(); }
}
function stopCurrent() {
  roomAnnouncer?.stop(); roomAnnouncer = undefined; $('public-status').textContent = ''; closeRoomBrowser();
  networkGeneration++;
  networkInput?.dispose(); networkInput = undefined;
  forgetHeldInput();
  clearInterval(timer); session?.stop(); session = undefined;
  const previous = network; network = undefined; previous?.disconnect();
  audio.sync({ tick: 0, masterVolume: 0, enabled: false, sounds: [] });
  onlineState = null; onlineFrame = null; connectionNotice = '';
}
function leaveOnline() {
  if (network instanceof BrowserPeerClient && network.peerRole === 'host' && !window.confirm('Leave this game? All players will disconnect. Your last original Save Game stays on this device.')) return;
  stopCurrent(); showLaunch(); showNetworkNotice(''); $('invite-label').hidden = true; $('start-online').hidden = true;
  $<HTMLDialogElement>('network').close(); controls();
}
function updateState(state: Serializable, owner?: number | null) {
  updateMenuEntry(state);
  if (network) onlineState = state;
  if ((state as any)?.audio) audio.sync((state as any).audio);
  if ((state as any)?.error) fail((state as any).error);
  if ((state as any)?.finished) {
    const finalFrame = session?.getFrame() ?? onlineFrame;
    stopCurrent(); onlineState = state; onlineFrame = finalFrame;
    showNetworkNotice(''); showLaunch(); $<HTMLDialogElement>('network').close(); controls(); return;
  }
  if (network) {
    if (owner !== network.credentials?.seat) { networkInput?.reset(); forgetHeldInput(); renderer?.setPointer(); }
    $('network-status').hidden = false;
    $('network-status').textContent = connectionNotice || (state as any)?.connectionNotice || ((state as any)?.dialog === 'select1b'
      ? `Choose ${network.room?.playerCount} players in the original menu.`
      : owner == null ? 'Please wait…' : owner === network.credentials?.seat ? 'Your turn' : `Player ${owner + 1}'s turn`);
  }
}
async function enterFullscreen() {
  if (document.fullscreenElement) return;
  if (!fullscreenRequest) fullscreenRequest = screen.requestFullscreen().then(() => {
    // A fullscreen element enters the top layer above an earlier modal. This
    // occurs when an invitation opened before the user's Join gesture. Reinsert
    // open dialogs above fullscreen without changing their form or room state.
    const focused = document.activeElement;
    document.querySelectorAll<HTMLDialogElement>('dialog[open]').forEach(element => {
      element.close(); element.showModal();
    });
    if (focused instanceof HTMLElement && focused.isConnected && focused.closest('dialog[open]')) focused.focus();
  }).finally(() => { fullscreenRequest = undefined; });
  await fullscreenRequest;
}
async function fullscreen() { if (!document.fullscreenElement) await enterFullscreen(); else await document.exitFullscreen(); }
function begin() { $('launch').hidden = true; updateMenuEntry(); canvas.focus(); }
function localPlay() {
  stopCurrent(); controls(); begin(); const bytes = new Uint32Array(1); crypto.getRandomValues(bytes);
  let save: string | null = null; try { save = localStorage.getItem(saveKey); } catch { /* Save is optional until requested. */ }
  session = createNativeSession({ seed: bytes[0], playerCount: 4, assetManifest: assets as unknown as Serializable,
    onFrame: frame => renderer.applyFrame(frame as unknown as GraphicsFrame), onState: updateState, save: save ?? undefined,
    onSave: value => { try { localStorage.setItem(saveKey, value); } catch { throw new Error('The browser could not save your game.'); } } });
  session.start(); timer = setInterval(() => session?.tick(), 1000 / 60);
}
function gameInputAllowed() { return !openingNetwork && $('launch').hidden && $('failure').hidden && !document.querySelector('dialog[open]'); }
function send(input: GameInput) {
  if (!gameInputAllowed()) return;
  if (network) networkInput?.send(input);
  else session?.handleInput(input);
}
function forgetHeldInput() {
  heldKeys.clear();
  for (const id of heldPointers.keys()) if (canvas.hasPointerCapture(id)) canvas.releasePointerCapture(id);
  heldPointers.clear();
}
function releaseGameInput() {
  networkInput?.reset();
  for (const input of heldPointers.values()) send({ ...input, action: 'up' });
  for (const key of heldKeys) send({ type: 'key', action: 'up', key });
  forgetHeldInput(); renderer?.setPointer();
}
async function openNetwork(fromGesture = true) {
  if (openingNetwork) return;
  releaseGameInput(); openingNetwork = true; screen.dataset.networkOpen = 'true';
  try {
    if (fromGesture) await enterFullscreen().catch(() => {});
    controls();
    const dialog = $<HTMLDialogElement>('network');
    if (!dialog.open) dialog.showModal();
  } finally { openingNetwork = false; }
}
for (const [event, action] of [['pointermove', 'move'], ['pointerdown', 'down'], ['pointerup', 'up']] as const) canvas.addEventListener(event, e => {
  if (!gameInputAllowed()) return;
  e.preventDefault(); const point = renderer?.clientToGame(e.clientX, e.clientY); if (!point) return;
  if (!network || network.canInput) renderer.setPointer(point); if (action === 'down') canvas.setPointerCapture(e.pointerId);
  const input: Extract<GameInput, { type: 'pointer' }> = { type: 'pointer', action, x: point.x, y: point.y, button: Math.min(2, e.button < 0 ? 0 : e.button) as 0 | 1 | 2 };
  if (action === 'down') heldPointers.set(e.pointerId, input);
  else if (action === 'up') heldPointers.delete(e.pointerId);
  else if (heldPointers.has(e.pointerId)) heldPointers.set(e.pointerId, { ...heldPointers.get(e.pointerId)!, x: point.x, y: point.y });
  send(input);
});
canvas.addEventListener('pointercancel', e => { const input = heldPointers.get(e.pointerId); heldPointers.delete(e.pointerId); if (input) send({ ...input, action: 'up' }); });
canvas.addEventListener('contextmenu', e => e.preventDefault());
const interfaceTarget = (target: EventTarget | null) => target instanceof Element && !!target.closest('button,input,select,textarea,summary,[contenteditable]');
window.addEventListener('keydown', e => { if (!gameInputAllowed() || interfaceTarget(e.target)) return; e.preventDefault(); if (!e.repeat) { heldKeys.add(e.key); send({ type: 'key', action: 'down', key: e.key }); } });
window.addEventListener('keyup', e => { const held = heldKeys.delete(e.key); if (!gameInputAllowed() || (!held && interfaceTarget(e.target))) return; e.preventDefault(); send({ type: 'key', action: 'up', key: e.key }); });
$('play').onclick = () => { void audio.unlock(); void enterFullscreen().catch(() => {}); localPlay(); };
$('fullscreen').onclick = () => void fullscreen().catch(fail);
$('reload').onclick = () => location.reload();
$('settings').onclick = () => { releaseGameInput(); $<HTMLDialogElement>('display').showModal(); };
$('display').addEventListener('close', () => { if (!$<HTMLDialogElement>('display').open) restoreGameFocus(); });
function configure() {
  displayPreferences = { mode: $<HTMLSelectElement>('mode').value as DisplayMode, resolutionHeight: Number($<HTMLSelectElement>('resolution').value), pack: $<HTMLSelectElement>('graphics-pack').value as 'original' | 'hd', lighting: $<HTMLInputElement>('lighting').checked, intensity: Number($<HTMLInputElement>('effect-strength').value) };
  if (displayPreferences.pack === 'original') $('graphics-status').textContent = 'Original artwork.';
  renderer.setOptions(displayPreferences);
  try { localStorage.setItem(displayKey, JSON.stringify(displayPreferences)); } catch { /* This browser can still use the current choice. */ }
}
for (const id of ['mode','resolution','graphics-pack','lighting','effect-strength']) $(id).onchange = configure;

$('online').onclick = $('menu-online').onclick = $('connection-settings').onclick = () => { void openNetwork().catch(fail); };
$('close-online').onclick = () => $<HTMLDialogElement>('network').close();
$('network').addEventListener('close', () => {
  // close is queued: a modal reinserted after fullscreen is already open again.
  if ($<HTMLDialogElement>('network').open) return;
  delete screen.dataset.networkOpen; closeRoomBrowser(); restoreGameFocus();
});
$('copy-invite').onclick = async () => {
  const invitation = $<HTMLInputElement>('invite-link');
  if (!invitation.value) return;
  try { await navigator.clipboard.writeText(invitation.value); $('copy-status').textContent = 'Invitation copied.'; }
  catch { invitation.focus(); invitation.select(); $('copy-status').textContent = 'Invitation selected. Press Ctrl+C or use Copy.'; }
};
$('leave-online').onclick = leaveOnline;
$('connection-mode').onchange = () => chooseMode($<HTMLSelectElement>('connection-mode').value as ConnectionMode);

function closeRoomBrowser() { roomBrowser?.close(); roomBrowser = undefined; listedRooms = []; $('public-browser').hidden = true; $('network').dataset.view = network?.room ? 'room' : 'home'; }
function renderPublicRooms() {
  const list = $('public-games'), filter = $<HTMLInputElement>('room-search').value.trim().toLocaleLowerCase();
  list.replaceChildren();
  const visible = listedRooms.filter(room => room.name.toLocaleLowerCase().includes(filter));
  for (const room of visible) {
    const row = document.createElement('li'), info = document.createElement('div'), name = document.createElement('strong'), seats = document.createElement('span'), join = document.createElement('button');
    info.className = 'room-info'; name.textContent = room.name; seats.textContent = `${room.players}/${room.capacity} players · ${room.capacity - room.players} free ${room.capacity - room.players === 1 ? 'seat' : 'seats'}`;
    join.textContent = 'Join'; join.setAttribute('aria-label', `Join ${room.name}`); join.disabled = busy || !!network?.room;
    join.onclick = () => void action(async () => {
      void audio.unlock(); void enterFullscreen().catch(() => {}); chooseMode('peer');
      await connect(undefined, room.hostPeerId).joinRoom(room.roomId, room.joinToken);
    });
    info.append(name, seats); row.append(info, join); list.append(row);
  }
  if (!visible.length) { const empty = document.createElement('li'); empty.textContent = filter ? 'No matching public rooms.' : 'No open rooms found. Create one or use an invitation.'; list.append(empty); }
}
function findPublicRooms() {
  closeRoomBrowser(); $('network').dataset.view = 'games'; $('public-browser').hidden = false;
  roomBrowser = new PublicRoomBrowser({ brokerUrl: lobbyBroker, scope: discoveryScope(peerSignal,peerIce),
    onStatus: value => { $('discovery-status').textContent = value.message; },
    onRooms: rooms => { listedRooms = rooms; renderPublicRooms(); } });
  roomBrowser.refresh();
}
function updateAnnouncement() {
  const client = network, room = client?.room;
  const eligible = $<HTMLInputElement>('public-room').checked && client instanceof BrowserPeerClient && client.peerRole === 'host' && room?.status === 'waiting' && room.seats.length < room.playerCount && !!client.credentials;
  if (!eligible) { roomAnnouncer?.stop(); roomAnnouncer = undefined; $('public-status').textContent = $<HTMLInputElement>('public-room').checked && room ? 'Public listing removed: this room is full or has started.' : ''; return; }
  const name = $<HTMLInputElement>('room-name').value.trim();
  if (!name || /[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/u.test(name)) { roomAnnouncer?.stop(); roomAnnouncer = undefined; $('public-status').textContent = 'Enter a room name to list your game.'; return; }
  if (!roomAnnouncer) roomAnnouncer = new PublicRoomAnnouncer({ brokerUrl: lobbyBroker, scope: discoveryScope(peerSignal,peerIce), onStatus: value => { $('public-status').textContent = value.message; } });
  roomAnnouncer.update({ roomId:room.roomId, hostPeerId:client.hostPeerId, joinToken:client.credentials!.joinToken, name, players:room.seats.length, capacity:room.playerCount, status:'waiting', scope:discoveryScope(peerSignal,peerIce) });
}
$('find-games').onclick = findPublicRooms;
$('refresh-games').onclick = () => roomBrowser?.refresh();
$('close-games').onclick = closeRoomBrowser;
$('room-search').oninput = renderPublicRooms;
$('public-room').onchange = () => { controls(); updateAnnouncement(); };
$('room-name').onchange = updateAnnouncement;

// An explicit custom signaling URL supports self-hosted/LAN PeerServer deployments.
// It only changes connection discovery; the same WebRTC channels and game run in all modes.
function peerOptions(): PeerOptions | undefined {
  if (!peerSignal) return undefined;
  const url = new URL(peerSignal);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash) throw new Error('Use an HTTP or HTTPS signaling address without credentials or query parameters.');
  return { host: url.hostname, port: Number(url.port || (url.protocol === 'https:' ? 443 : 80)), path: url.pathname, secure: url.protocol === 'https:',
    ...(peerIce === 'local' ? { config: { iceServers: [] } } : {}) };
}
function connect(credentials?: Credentials, hostPeerId?: string) {
  stopCurrent(); showLaunch(); $('invite-label').hidden = true; $('start-online').hidden = true;
  $<HTMLInputElement>('invite-link').value = ''; $('copy-status').textContent = '';
  const mode = connectionMode, server = $<HTMLInputElement>('server').value, generation = networkGeneration;
  let enteredGame = false;
  const callbacks = {
    credentials,
    onFrame: (frame: Serializable) => { if (generation !== networkGeneration) return; onlineFrame = frame; renderer.applyFrame(frame as unknown as GraphicsFrame); if (!enteredGame && network?.room?.status === 'running') { enteredGame = true; $<HTMLDialogElement>('network').close(); begin(); } },
    onState: (state: Serializable, owner: number | null) => { if (generation === networkGeneration) updateState(state, owner); },
    onStatus: (value: 'connecting' | 'connected' | 'reconnecting' | 'disconnected') => {
      if (generation !== networkGeneration) return;
      if (value !== 'connected') { networkInput?.reset(); forgetHeldInput(); }
      const message = value === 'connected' ? 'Connected' : value === 'reconnecting' ? 'Reconnecting…' : value === 'connecting' ? 'Connecting…' : 'Disconnected. Open Connection to retry or leave.';
      status(message);
      if (value === 'connected') { connectionNotice = ''; if (onlineState) updateState(onlineState, network?.inputOwner); }
      else if ($('launch').hidden) showNetworkNotice(message);
    },
    onError: (error: Error & { code?: string }) => {
      if (generation !== networkGeneration || error.code === 'not_your_turn') return;
      status(error.message);
      if ($('launch').hidden && ['runtime_failed', 'host_closed', 'connection_closed'].includes(error.code ?? '')) showNetworkNotice(error.message);
    },
    onCredentials: (value: Credentials | null) => {
      if (generation !== networkGeneration) return;
      try {
        // A closed host cannot be resumed by a private seat token; its original save remains local.
        resume = value && !(network instanceof BrowserPeerClient && network.peerRole === 'host')
          ? { mode, credentials: value, ...(mode === 'server' ? { server } : { hostPeerId: (network as BrowserPeerClient)?.hostPeerId || hostPeerId, signal: peerSignal, ice: peerIce }) } : undefined;
        if (resume) sessionStorage.setItem('jones-online-session', JSON.stringify(resume)); else sessionStorage.removeItem('jones-online-session');
      } catch { /* Live play still works without session storage; reload recovery does not. */ }
      controls();
    },
    onRoom: (room: RoomInfo) => {
      if (generation !== networkGeneration) return;
      if (room.inputOwner !== network?.credentials?.seat || room.status !== 'running') { networkInput?.reset(); forgetHeldInput(); }
      const connected = room.seats.filter(seat => seat.connected).length;
      status(`${connected} of ${room.playerCount} players connected. Choose ${room.playerCount} players in the original game menu.`);
      $('start-online').hidden = network?.credentials?.seat !== 0 || room.status !== 'waiting';
      $<HTMLButtonElement>('start-online').disabled = connected !== room.playerCount; controls(); updateAnnouncement();
    },
  };
  network = mode === 'server' ? new BrowserNetworkClient({ ...callbacks, url: server }) : new BrowserPeerClient({ ...callbacks, hostPeerId, peerOptions: peerOptions(),
    createSession: options => {
      const key = `jones-peer-save-v1-${options.playerCount}`;
      let save: string | null = null; try { save = localStorage.getItem(key); } catch { /* Original Save/Restore reports writes explicitly. */ }
      return createNativeSession({ ...options, assetManifest: assets as unknown as Serializable, enforceRoomPlayerCount: true, save: save ?? undefined,
        onSave: value => { try { localStorage.setItem(key, value); } catch { throw new Error('The creator’s browser could not save this game.'); } } });
    } });
  const client = network;
  networkInput = new NetworkInputProducer({
    canInput: () => generation === networkGeneration && client === network && client.canInput && gameInputAllowed(),
    sendInput: input => client.sendInput(input),
    onError: error => { if ((error as any)?.code !== 'not_your_turn') status(error instanceof Error ? error.message : String(error)); },
  });
  controls(); return network;
}
$('create').onclick = () => void action(async () => {
  void audio.unlock(); const client = connect(), credentials = await client.createRoom(Number($<HTMLSelectElement>('players').value) as PlayerCount);
  const invite = new URL(location.href);
  if (client instanceof BrowserPeerClient) {
    if (peerSignal) invite.searchParams.set('signal', peerSignal); else invite.searchParams.delete('signal');
    if (peerSignal && peerIce) invite.searchParams.set('ice', peerIce); else invite.searchParams.delete('ice');
  } else { invite.searchParams.delete('signal'); invite.searchParams.delete('ice'); }
  invite.hash = new URLSearchParams({ room: credentials.roomId, invite: credentials.joinToken,
    ...(client instanceof BrowserPeerClient ? { peer: client.hostPeerId } : { server: $<HTMLInputElement>('server').value }) }).toString();
  $('invite-label').hidden = false; $<HTMLInputElement>('invite-link').value = invite.href;
  status(`Share the invitation. Choose ${client.room!.playerCount} players in the original game menu.`); updateAnnouncement();
});
$('join').onclick = () => void action(async () => {
  void audio.unlock(); void enterFullscreen().catch(() => {});
  const invite = new URL($<HTMLInputElement>('invitation').value), params = new URLSearchParams(invite.hash.slice(1));
  if (!params.get('room') || !params.get('invite') || !(params.get('peer') || params.get('server'))) throw new Error('Paste a valid Jones invitation link.');
  chooseMode(params.has('peer') ? 'peer' : 'server');
  if (params.has('server')) $<HTMLInputElement>('server').value = params.get('server')!;
  peerSignal = invite.searchParams.get('signal') ?? ''; peerIce = invite.searchParams.get('ice') ?? '';
  await connect(undefined, params.get('peer') ?? undefined).joinRoom(params.get('room')!, params.get('invite')!);
});
$('start-online').onclick = () => void action(async () => { void audio.unlock(); void enterFullscreen().catch(() => {}); await network?.start(); });
$('resume-online').onclick = () => void action(async () => {
  if (!resume) return;
  const saved = resume; chooseMode(saved.mode); peerSignal = saved.signal ?? ''; peerIce = saved.ice ?? '';
  if (saved.server) $<HTMLInputElement>('server').value = saved.server;
  void audio.unlock(); void enterFullscreen().catch(() => {}); await connect(saved.credentials, saved.hostPeerId).connect();
});
window.addEventListener('pagehide', () => { roomAnnouncer?.stop(); closeRoomBrowser(); networkInput?.dispose(); clearInterval(timer); session?.stop(); network?.disconnect(); renderer?.dispose(); void audio.dispose(); });
void (async () => {
  const response = await fetch('./assets/manifest.json'); if (!response.ok) throw new Error('Game artwork could not be loaded.');
  assets = await response.json();
  $<HTMLSelectElement>('mode').value = displayPreferences.mode; $<HTMLSelectElement>('resolution').value = String(displayPreferences.resolutionHeight);
  $<HTMLSelectElement>('graphics-pack').value = displayPreferences.pack; $<HTMLInputElement>('lighting').checked = displayPreferences.lighting; $<HTMLInputElement>('effect-strength').value = String(displayPreferences.intensity);
  renderer = new ThreeRenderer(canvas, assets, { ...displayPreferences, onStatus: value => { if (value.message) $('graphics-status').textContent = value.message; } });
  showTownBackdrop();
  // Diagnostics expose snapshots, never private network credentials or a second simulation.
  (window as any).jonesNative = { getState: () => session?.getState() ?? onlineState, getFrame: () => session?.getFrame() ?? onlineFrame,
    getRoom: () => network?.room, getSeat: () => network?.credentials?.seat,
    getTransport: () => network ? network instanceof BrowserPeerClient ? 'peer' : 'server' : 'local',
    getPeerRole: () => network instanceof BrowserPeerClient ? network.peerRole : undefined,
    getDisplay: () => ({ preferences: { ...displayPreferences }, hd: renderer.hdStatus }),
    get runtime() { return session?.runtime; } };
  chooseMode('peer'); controls(); $('loading').textContent = ''; $<HTMLButtonElement>('play').disabled = false; $<HTMLButtonElement>('online').disabled = false;
  if (new URLSearchParams(location.hash.slice(1)).has('room')) { $<HTMLInputElement>('invitation').value = location.href; await openNetwork(false); }
})().catch(fail);
