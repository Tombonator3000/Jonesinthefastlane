// SPDX-License-Identifier: GPL-3.0-or-later
import test, { type TestContext } from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { readFileSync } from 'node:fs';
import { WebSocket } from 'ws';
import { createMultiplayerServer } from '../native/network/server.js';
import { BrowserNetworkClient } from '../native/network/client.js';
import type { GameInput, ServerMessage, SessionOptions, SessionRuntime } from '../native/network/types.js';

// This deliberately small adapter is ONLY a transport fixture. It does not
// claim to reproduce Jones. Production server.ts imports the real session.
class TransportFixture implements SessionRuntime {
  owner = 0; ticks = 0; stopped = false; inputs: GameInput[] = [];
  constructor(readonly options: SessionOptions) {}
  start() { this.options.onFrame(this.getFrame()); this.options.onState(this.getState()); }
  tick() { this.ticks++; }
  stop() { this.stopped = true; }
  inputOwner() { return this.owner; }
  getFrame() { return { transportFixture: true, serial: this.inputs.length, pixels: [0, 1, this.owner] }; }
  getState() { return { transportFixture: true, owner: this.owner, inputs: this.inputs.length }; }
  handleInput(input: GameInput) {
    this.inputs.push(input);
    if (input.type === 'key' && input.key === 'Enter') this.owner = (this.owner + 1) % this.options.playerCount;
    this.options.onFrame(this.getFrame()); this.options.onState(this.getState());
  }
}
class Peer {
  messages: ServerMessage[] = [];
  private waiters = new Set<() => void>();
  private sequence = 0;
  constructor(readonly socket: WebSocket) {
    socket.on('message', data => { this.messages.push(JSON.parse(data.toString())); for (const notify of [...this.waiters]) notify(); });
  }
  wait(predicate: (message: ServerMessage) => boolean): Promise<ServerMessage> {
    return new Promise((resolve, reject) => {
      const check = () => {
        const message = this.messages.find(predicate);
        if (message) { clearTimeout(timer); this.waiters.delete(check); resolve(message); }
      };
      const timer = setTimeout(() => { this.waiters.delete(check); reject(new Error(`Expected WebSocket message not received: ${JSON.stringify(this.messages)}`)); }, 3000);
      this.waiters.add(check); check();
    });
  }
  request(message: object) {
    const requestId = String(++this.sequence);
    this.socket.send(JSON.stringify({ ...message, requestId }));
    return this.wait(response => 'requestId' in response && response.requestId === requestId);
  }
}
async function setup(t: TestContext, settings: { reconnectWindowMs?: number; allowedOrigins?: string[] } = {}) {
  const runtimes: TransportFixture[] = [];
  const server = createMultiplayerServer({ ...settings, createSession: options => { const runtime = new TransportFixture(options); runtimes.push(runtime); return runtime; } });
  const address = await server.listen(0);
  assert(address && typeof address === 'object');
  const url = `ws://127.0.0.1:${address.port}/multiplayer`;
  t.after(() => server.close());
  const peer = async () => {
    const socket = new WebSocket(url);
    const client = new Peer(socket); await once(socket, 'open'); await client.wait(message => message.type === 'welcome'); return client;
  };
  return { server, runtimes, url, peer };
}
const key = (value: string): GameInput => ({ type: 'key', action: 'down', key: value });

test('real WebSocket room uses explicit start, private seats and one authoritative frame', async t => {
  const { peer, runtimes } = await setup(t);
  const host = await peer(), guest = await peer(), extra = await peer();
  const created = await host.request({ type: 'create', playerCount: 2 }); assert.equal(created.type, 'joined');
  if (created.type !== 'joined') throw new Error('No credentials');
  assert.match(created.roomId, /^[A-Za-z0-9_-]{16}$/);
  assert.match(created.sessionToken, /^[A-Za-z0-9_-]{43}$/);
  assert.match(created.joinToken, /^[A-Za-z0-9_-]{32}$/);
  assert.equal(runtimes.length, 0, 'The adapter must not start during connection setup');
  assert.equal((await host.request({ type: 'start' }) as any).code, 'players_missing');
  assert.equal((await guest.request({ type: 'join', roomId: created.roomId, joinToken: 'wrong' }) as any).code, 'invalid_invitation');
  const joined = await guest.request({ type: 'join', roomId: created.roomId, joinToken: created.joinToken }); assert.equal(joined.type, 'joined');
  if (joined.type !== 'joined') throw new Error('No guest credentials');
  assert.equal(joined.seat, 1); assert.notEqual(joined.sessionToken, created.sessionToken);
  assert.equal((await extra.request({ type: 'join', roomId: created.roomId, joinToken: created.joinToken }) as any).code, 'room_full');
  assert.equal((await guest.request({ type: 'start' }) as any).code, 'host_only');
  assert.equal((await host.request({ type: 'start' })).type, 'started');
  assert.equal(runtimes.length, 1); assert.equal(runtimes[0].options.playerCount, 2);
  assert(Number.isInteger(runtimes[0].options.seed));
  const hostInitial = await host.wait(message => message.type === 'snapshot');
  const guestInitial = await guest.wait(message => message.type === 'snapshot');
  assert.deepEqual(hostInitial, guestInitial, 'Both peers receive the same authoritative starting frame and state');
  assert.equal((await guest.request({ type: 'input', seq: 1, input: key('a') }) as any).code, 'not_your_turn');
  assert.equal((await host.request({ type: 'input', seq: 1, input: { type: 'pointer', action: 'down', button: 0, x: 320, y: 100 } }) as any).code, 'invalid_input');
  assert.equal((await host.request({ type: 'input', seq: 1, input: { ...key('a'), cash: 999999 } }) as any).code, 'invalid_input');
  assert.equal(runtimes[0].inputs.length, 0);
  assert.equal((await host.request({ type: 'input', seq: 1, input: key('Enter') })).type, 'ack');
  const hostFrame = await host.wait(message => message.type === 'frame' && (message.frame as any).serial === 1);
  const guestFrame = await guest.wait(message => message.type === 'frame' && (message.frame as any).serial === 1);
  assert.deepEqual(hostFrame, guestFrame);
  assert.equal(runtimes[0].inputOwner(), 1, 'The runtime decides which setup/turn seat owns input');
  assert.equal((await host.request({ type: 'input', seq: 2, input: key('a') }) as any).code, 'not_your_turn');
  assert.equal((await guest.request({ type: 'input', seq: 1, input: key('b') })).type, 'ack');
  assert.equal((await guest.request({ type: 'input', seq: 1, input: key('c') }) as any).code, 'invalid_input');
  assert.deepEqual(runtimes[0].inputs, [key('Enter'), key('b')]);
  assert(runtimes[0].ticks > 0, 'Logical ticks are delivered by the server');
});

test('reconnect restores the same reserved seat and current authoritative snapshot', async t => {
  const { peer, runtimes } = await setup(t);
  const host = await peer(), guest = await peer();
  const created = await host.request({ type: 'create', playerCount: 2 }) as Extract<ServerMessage, { type: 'joined' }>;
  const joined = await guest.request({ type: 'join', roomId: created.roomId, joinToken: created.joinToken }) as Extract<ServerMessage, { type: 'joined' }>;
  await host.request({ type: 'start' }); await host.request({ type: 'input', seq: 1, input: key('Enter') });
  await guest.request({ type: 'input', seq: 1, input: key('x') });
  guest.socket.close(); await once(guest.socket, 'close');
  await host.wait(message => message.type === 'room' && message.room.status === 'running' && message.room.seats[1].connected === false);
  const stranger = await peer();
  assert.equal((await stranger.request({ type: 'resume', roomId: created.roomId, sessionToken: created.joinToken }) as any).code, 'invalid_session', 'Invite tokens cannot take over seats');
  assert.equal((await stranger.request({ type: 'join', roomId: created.roomId, joinToken: created.joinToken }) as any).code, 'already_started');
  const returned = await stranger.request({ type: 'resume', roomId: created.roomId, sessionToken: joined.sessionToken }) as Extract<ServerMessage, { type: 'joined' }>;
  assert.equal(returned.seat, 1); assert.equal(returned.lastInputSeq, 1); assert.equal(returned.sessionToken, joined.sessionToken);
  const snapshot = await stranger.wait(message => message.type === 'snapshot') as Extract<ServerMessage, { type: 'snapshot' }>;
  assert.deepEqual(snapshot.frame, runtimes[0].getFrame()); assert.equal(snapshot.inputOwner, 1);
  assert.equal((await stranger.request({ type: 'input', seq: 1, input: key('z') }) as any).code, 'invalid_input');
  assert.equal((await stranger.request({ type: 'input', seq: 2, input: key('y') })).type, 'ack');
  const takeover = await peer(); const closed = once(stranger.socket, 'close');
  await takeover.request({ type: 'resume', roomId: created.roomId, sessionToken: joined.sessionToken });
  assert.equal((await closed)[0], 4001);
  assert.equal((await takeover.request({ type: 'input', seq: 3, input: key('q') })).type, 'ack');
  assert.equal(runtimes[0].inputs.length, 4);
});

test('one to four seats are enforced and malformed wire input does not mutate runtime', async t => {
  const { peer, runtimes } = await setup(t);
  const host = await peer();
  assert.equal((await host.request({ type: 'create', playerCount: 5 }) as any).code, 'invalid_player_count');
  const room = await host.request({ type: 'create', playerCount: 4 }) as Extract<ServerMessage, { type: 'joined' }>;
  for (let seat = 1; seat < 4; seat++) { const player = await peer(); const joined = await player.request({ type: 'join', roomId: room.roomId, joinToken: room.joinToken }) as any; assert.equal(joined.seat, seat); }
  assert.equal((await host.request({ type: 'start' })).type, 'started');
  host.socket.send('not json'); await host.wait(message => message.type === 'error' && message.code === 'invalid_message');
  assert.equal((await host.request({ type: 'state', cash: 999 }) as any).code, 'invalid_message');
  assert.equal((await host.request({ type: 'input', seq: Number.MAX_SAFE_INTEGER + 1, input: key('a') }) as any).code, 'invalid_input');
  assert.equal((await host.request({ type: 'input', seq: 1, input: key('UnsupportedKey') }) as any).code, 'invalid_input');
  assert.equal(runtimes[0].inputs.length, 0);
  const single = await peer(); await single.request({ type: 'create', playerCount: 1 });
  assert.equal((await single.request({ type: 'start' })).type, 'started'); assert.equal(runtimes[1].options.playerCount, 1);
});

test('browser client uses real WebSockets and resumes credentials without local game simulation', async t => {
  const { url, runtimes } = await setup(t);
  const frames: unknown[] = [];
  const client = new BrowserNetworkClient({ url, autoReconnect: false, onFrame: frame => frames.push(frame) });
  t.after(() => client.disconnect());
  const credentials = await client.createRoom(1); await client.start();
  assert(client.canInput); await client.sendInput(key('a'));
  assert.equal(runtimes[0].inputs.length, 1);
  const saved = { ...client.credentials! }; assert.equal(saved.sessionToken, credentials.sessionToken);
  client.disconnect();
  const resumed = new BrowserNetworkClient({ url, credentials: saved, autoReconnect: false, onFrame: frame => frames.push(frame) });
  t.after(() => resumed.disconnect()); await resumed.connect();
  assert(resumed.canInput); assert.equal(resumed.credentials!.seat, 0);
  await resumed.sendInput({ type: 'pointer', action: 'down', x: 160, y: 100, button: 0 });
  assert.equal(runtimes[0].inputs.length, 2); assert(frames.length >= 2);
});

test('empty rooms expire and stop their runtime after the reconnect window', async t => {
  const { peer, runtimes } = await setup(t, { reconnectWindowMs: 25 });
  const host = await peer(); const created = await host.request({ type: 'create', playerCount: 1 }) as any;
  await host.request({ type: 'start' }); host.socket.close(); await once(host.socket, 'close');
  await new Promise(resolve => setTimeout(resolve, 70));
  const resumed = await peer();
  assert.equal((await resumed.request({ type: 'resume', roomId: created.roomId, sessionToken: created.sessionToken }) as any).code, 'room_unavailable');
  assert.equal(runtimes[0].stopped, true);
});

test('actual translated original session broadcasts the same game pixels and accepts only its controlling seat', async t => {
  const { createNativeSession } = await import('../native/session.js');
  const assetManifest = JSON.parse(readFileSync(new URL('../native/public/assets/manifest.json', import.meta.url), 'utf8'));
  const server = createMultiplayerServer({ createSession: createNativeSession, assetManifest });
  const address = await server.listen(0); assert(address && typeof address === 'object');
  t.after(() => server.close());
  const connect = async () => { const socket = new WebSocket(`ws://127.0.0.1:${address.port}/multiplayer`); const peer = new Peer(socket); await once(socket, 'open'); return peer; };
  const host = await connect(), guest = await connect();
  const created = await host.request({ type: 'create', playerCount: 2 }) as Extract<ServerMessage, { type: 'joined' }>;
  await guest.request({ type: 'join', roomId: created.roomId, joinToken: created.joinToken });
  assert.equal((await host.request({ type: 'start' })).type, 'started');
  const initial = await host.wait(message => message.type === 'frame' && new Set(Buffer.from((message.frame as any).pixels, 'base64')).size > 1) as Extract<ServerMessage, { type: 'frame' }>;
  const matched = await guest.wait(message => message.type === 'frame' && message.tick === initial.tick && message.revision === initial.revision);
  assert.deepEqual(matched, initial);
  assert.equal(Buffer.from((initial.frame as any).pixels, 'base64').length, 64000);
  assert.equal((await guest.request({ type: 'input', seq: 1, input: { type: 'pointer', action: 'down', x: 160, y: 100, button: 0 } }) as any).code, 'not_your_turn');
  assert.equal((await host.request({ type: 'input', seq: 1, input: { type: 'pointer', action: 'down', x: 160, y: 100, button: 0 } })).type, 'ack');
  assert.equal((await host.request({ type: 'input', seq: 2, input: { type: 'pointer', action: 'up', x: 160, y: 100, button: 0 } })).type, 'ack');
  const next = await host.wait(message => message.type === 'frame' && message.tick > initial.tick && (message.frame as any).pixels !== (initial.frame as any).pixels) as Extract<ServerMessage, { type: 'frame' }>;
  assert.deepEqual(await guest.wait(message => message.type === 'frame' && message.tick === next.tick && message.revision === next.revision), next);
  assert(!host.messages.some(message => message.type === 'state' && (message.state as any).error), 'The actual original session must not report a runtime failure');
});
