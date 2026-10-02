// SPDX-License-Identifier: GPL-3.0-or-later
import { randomBytes, randomInt, timingSafeEqual } from 'node:crypto';
import { createServer, type Server as HttpServer } from 'node:http';
import { WebSocket, WebSocketServer } from 'ws';
import { parseGameInput, type GameInput, type PlayerCount, type RoomInfo, type Serializable, type ServerMessage, type SessionFactory, type SessionRuntime } from './types.js';

interface Seat { token: string; socket: WebSocket | null; lastSeq: number }
interface PendingInput { seat: Seat; index: number; input: GameInput; seq: number; requestId?: string }
interface Room {
  id: string; joinToken: string; count: PlayerCount; seats: Seat[];
  status: RoomInfo['status']; runtime: SessionRuntime | null; tick: number; revision: number;
  frame: Serializable; state: Serializable; frameDirty: boolean; stateDirty: boolean;
  lastOwner: number | null; queue: PendingInput[]; nextTickAt: number; emptySince: number | null;
}
interface Connection { room?: Room; seat?: Seat; index?: number; alive: boolean; windowAt: number; messages: number }
export interface MultiplayerServerOptions {
  createSession: SessionFactory;
  assetManifest?: Serializable;
  httpServer?: HttpServer;
  path?: string;
  allowedOrigins?: string[];
  maxRooms?: number;
  reconnectWindowMs?: number;
  onRuntimeError?: (error: unknown) => void;
}
const TICK_MS = 1000 / 60;
const secret = (bytes: number) => randomBytes(bytes).toString('base64url');
const sameSecret = (a: string, b: unknown) => typeof b === 'string' && Buffer.byteLength(a) === Buffer.byteLength(b) && timingSafeEqual(Buffer.from(a), Buffer.from(b));

export function createMultiplayerServer(options: MultiplayerServerOptions) {
  const rooms = new Map<string, Room>();
  const connections = new Map<WebSocket, Connection>();
  const httpServer = options.httpServer || createServer((request, response) => {
    if (request.url === '/health') {
      response.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
      response.end(JSON.stringify({ ok: true, protocol: 1, rooms: rooms.size }));
    } else { response.writeHead(404).end('Not found'); }
  });
  const wss = new WebSocketServer({ noServer: true, maxPayload: 4096, perMessageDeflate: {serverNoContextTakeover:true,clientNoContextTakeover:true,threshold:1024} });
  let closed = false;
  const send = (socket: WebSocket | null, message: ServerMessage) => {
    if (!socket || socket.readyState !== WebSocket.OPEN) return;
    if (socket.bufferedAmount > 8 * 1024 * 1024) { socket.close(1013, 'Connection is too slow; reconnect to resume.'); return; }
    socket.send(JSON.stringify(message));
  };
  const error = (socket: WebSocket, code: string, message: string, requestId?: string) => send(socket, { type: 'error', code, message, ...(requestId ? { requestId } : {}) });
  const broadcast = (room: Room, message: ServerMessage) => { for (const seat of room.seats) send(seat.socket, message); };
  const info = (room: Room): RoomInfo => ({ roomId: room.id, playerCount: room.count, status: room.status, seats: room.seats.map((seat, i) => ({ seat: i, connected: seat.socket?.readyState === WebSocket.OPEN })), inputOwner: room.runtime?.inputOwner() ?? null });
  const roomChanged = (room: Room) => broadcast(room, { type: 'room', room: info(room) });
  const snapshot = (room: Room, socket: WebSocket) => {
    if (!room.runtime) return;
    // Reconnect to the last committed tick, exactly as existing peers saw it.
    // The async original script may be drawing its next frame between ticks;
    // reading the runtime here would mislabel that partial frame with old time.
    send(socket, { type: 'snapshot', tick: room.tick, revision: room.revision, frame: room.frame, state: room.state, inputOwner: room.lastOwner });
  };
  function dispose(room: Room) {
    rooms.delete(room.id);
    try { room.runtime?.stop(); } catch (failure) { options.onRuntimeError?.(failure); }
    room.runtime = null;
    room.queue.length = 0;
  }
  function failed(room: Room, failure: unknown) {
    options.onRuntimeError?.(failure);
    broadcast(room, { type: 'error', code: 'runtime_failed', message: 'The game session stopped because its runtime failed.' });
    dispose(room);
    for (const seat of room.seats) seat.socket?.close(1011, 'Game session stopped.');
  }
  function attach(socket: WebSocket, connection: Connection, room: Room, seat: Seat, index: number, requestId?: string) {
    const previous = seat.socket;
    seat.socket = socket;
    connection.room = room; connection.seat = seat; connection.index = index;
    room.emptySince = null;
    if (previous && previous !== socket) previous.close(4001, 'This seat reconnected in another connection.');
    send(socket, { type: 'joined', roomId: room.id, seat: index, sessionToken: seat.token, joinToken: room.joinToken, lastInputSeq: seat.lastSeq, room: info(room), ...(requestId ? { requestId } : {}) });
    snapshot(room, socket);
    roomChanged(room);
  }
  async function receive(socket: WebSocket, connection: Connection, raw: Buffer, binary: boolean) {
    const now = performance.now();
    if (now - connection.windowAt >= 1000) { connection.windowAt = now; connection.messages = 0; }
    if (++connection.messages > 180) { socket.close(1008, 'Too many messages.'); return; }
    let request: Record<string, unknown>;
    try {
      if (binary) throw new Error('Text required');
      request = JSON.parse(raw.toString());
      if (!request || typeof request !== 'object' || Array.isArray(request)) throw new Error('Object required');
    } catch { error(socket, 'invalid_message', 'Send a valid JSON message.'); return; }
    const requestId = typeof request.requestId === 'string' && request.requestId.length <= 64 ? request.requestId : undefined;
    if (request.type === 'create' || request.type === 'join' || request.type === 'resume') {
      if (connection.room) { error(socket, 'already_joined', 'This connection already has a seat.', requestId); return; }
      if (request.type === 'create') {
        if (![1, 2, 3, 4].includes(Number(request.playerCount)) || typeof request.playerCount !== 'number') { error(socket, 'invalid_player_count', 'Choose one to four players.', requestId); return; }
        if (rooms.size >= (options.maxRooms ?? 64)) { error(socket, 'server_full', 'The server has no free game sessions.', requestId); return; }
        const seat: Seat = { token: secret(32), socket: null, lastSeq: 0 };
        const room: Room = { id: secret(12), joinToken: secret(24), count: request.playerCount as PlayerCount, seats: [seat], status: 'waiting', runtime: null, tick: 0, revision: 0, frame: null, state: null, frameDirty: false, stateDirty: false, lastOwner: null, queue: [], nextTickAt: now, emptySince: null };
        rooms.set(room.id, room); attach(socket, connection, room, seat, 0, requestId); return;
      }
      const room = typeof request.roomId === 'string' ? rooms.get(request.roomId) : undefined;
      if (!room) { error(socket, 'room_unavailable', 'The room does not exist or has expired.', requestId); return; }
      if (request.type === 'resume') {
        const index = room.seats.findIndex(seat => sameSecret(seat.token, request.sessionToken));
        if (index < 0) { error(socket, 'invalid_session', 'The reconnect credential is invalid.', requestId); return; }
        attach(socket, connection, room, room.seats[index], index, requestId); return;
      }
      if (!sameSecret(room.joinToken, request.joinToken)) { error(socket, 'invalid_invitation', 'The room invitation is invalid.', requestId); return; }
      if (room.status !== 'waiting') { error(socket, 'already_started', 'This game has already started. Existing players can reconnect.', requestId); return; }
      if (room.seats.length >= room.count) { error(socket, 'room_full', 'All player seats are reserved.', requestId); return; }
      const seat: Seat = { token: secret(32), socket: null, lastSeq: 0 };
      room.seats.push(seat); attach(socket, connection, room, seat, room.seats.length - 1, requestId); return;
    }
    const room = connection.room, seat = connection.seat;
    if (!room || !seat || seat.socket !== socket || !rooms.has(room.id)) { error(socket, 'not_joined', 'Join a game before sending commands.', requestId); return; }
    if (request.type === 'start') {
      if (connection.index !== 0) { error(socket, 'host_only', 'Only the room creator can start the game.', requestId); return; }
      if (room.status !== 'waiting') { error(socket, 'already_started', 'This game is already starting or running.', requestId); return; }
      if (room.seats.length !== room.count || room.seats.some(player => player.socket?.readyState !== WebSocket.OPEN)) { error(socket, 'players_missing', 'All chosen players must be connected before starting.', requestId); return; }
      room.status = 'starting'; roomChanged(room);
      try {
        const runtime = await options.createSession({ seed: randomInt(0x100000000), playerCount: room.count, assetManifest: options.assetManifest,
          onFrame: frame => { room.frame = frame; room.frameDirty = true; },
          onState: state => { room.state = state; room.stateDirty = true; } });
        if (closed || !rooms.has(room.id)) { runtime.stop(); return; }
        room.runtime = runtime; runtime.start(); room.status = 'running'; room.nextTickAt = performance.now() + TICK_MS;
        room.lastOwner = runtime.inputOwner(); room.frame = runtime.getFrame(); room.state = runtime.getState();
        room.frameDirty = false; room.stateDirty = false;
        for (const player of room.seats) if (player.socket) snapshot(room, player.socket);
        send(socket, { type: 'started', ...(requestId ? { requestId } : {}) }); roomChanged(room);
      } catch (failure) { failed(room, failure); }
      return;
    }
    if (request.type === 'input') {
      if (!room.runtime || room.status !== 'running') { error(socket, 'not_started', 'Start the game before sending game input.', requestId); return; }
      if (room.runtime.inputOwner() !== connection.index) { error(socket, 'not_your_turn', 'Only the player controlling this original screen can send input.', requestId); return; }
      const input = parseGameInput(request.input);
      if (!input || !Number.isSafeInteger(request.seq) || Number(request.seq) <= seat.lastSeq) { error(socket, 'invalid_input', 'Input or input sequence is invalid.', requestId); return; }
      if (room.queue.length >= 256) { error(socket, 'input_queue_full', 'Wait for pending input before sending more.', requestId); return; }
      seat.lastSeq = Number(request.seq);
      room.queue.push({ seat, index: connection.index!, input, seq: seat.lastSeq, requestId });
      return;
    }
    error(socket, 'invalid_message', 'Unknown command.', requestId);
  }
  function advance(room: Room) {
    const runtime = room.runtime!;
    room.tick++;
    for (const input of room.queue.splice(0)) {
      if (runtime.inputOwner() !== input.index) { if (input.seat.socket) error(input.seat.socket, 'not_your_turn', 'Control moved to another player before this input was applied.', input.requestId); continue; }
      runtime.handleInput(input.input);
      send(input.seat.socket, { type: 'ack', seq: input.seq, tick: room.tick, ...(input.requestId ? { requestId: input.requestId } : {}) });
    }
    runtime.tick();
    const owner = runtime.inputOwner();
    if (owner !== room.lastOwner) { room.lastOwner = owner; room.state = runtime.getState(); room.stateDirty = true; roomChanged(room); }
    if (room.frameDirty || room.stateDirty) room.revision++;
    if (room.frameDirty) { broadcast(room, { type: 'frame', tick: room.tick, revision: room.revision, frame: room.frame }); room.frameDirty = false; }
    if (room.stateDirty) { broadcast(room, { type: 'state', tick: room.tick, revision: room.revision, state: room.state, inputOwner: owner }); room.stateDirty = false; }
  }
  const timer = setInterval(() => {
    const now = performance.now();
    for (const room of rooms.values()) {
      if (room.emptySince !== null && now - room.emptySince > (options.reconnectWindowMs ?? 30 * 60 * 1000)) { dispose(room); continue; }
      if (!room.runtime || room.status !== 'running' || room.emptySince !== null) { room.nextTickAt = now + TICK_MS; continue; }
      try {
        let catchup = 0;
        while (now >= room.nextTickAt && catchup++ < 6) { room.nextTickAt += TICK_MS; advance(room); }
        if (now >= room.nextTickAt) room.nextTickAt = now + TICK_MS;
      } catch (failure) { failed(room, failure); }
    }
  }, 8);
  timer.unref();
  const heartbeat = setInterval(() => {
    for (const [socket, connection] of connections) {
      if (!connection.alive) { socket.terminate(); continue; }
      connection.alive = false; socket.ping();
    }
  }, 30000);
  heartbeat.unref();
  // Keep the listener reference so an externally supplied HTTP server can be reused.
  const onUpgrade = (request: import('node:http').IncomingMessage, socket: import('node:stream').Duplex, head: Buffer) => {
    if (new URL(request.url || '/', 'http://localhost').pathname !== (options.path ?? '/multiplayer') ||
        (options.allowedOrigins && (!request.headers.origin || !options.allowedOrigins.includes(request.headers.origin)))) {
      socket.write('HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n'); socket.destroy(); return;
    }
    wss.handleUpgrade(request, socket, head, client => wss.emit('connection', client, request));
  };
  httpServer.on('upgrade', onUpgrade);
  wss.on('connection', socket => {
    const connection: Connection = { alive: true, windowAt: performance.now(), messages: 0 };
    connections.set(socket, connection);
    socket.on('pong', () => { connection.alive = true; });
    socket.on('error', () => {}); // Close handler owns cleanup, including protocol/oversize failures.
    socket.on('message', (data, binary) => { void receive(socket, connection, data as Buffer, binary).catch(failure => {
      if (connection.room) failed(connection.room, failure); else error(socket, 'invalid_message', 'Unable to process this message.');
    }); });
    socket.on('close', () => {
      connections.delete(socket);
      const room = connection.room, seat = connection.seat;
      if (!room || !seat || seat.socket !== socket || !rooms.has(room.id)) return;
      seat.socket = null;
      if (room.seats.every(player => !player.socket)) room.emptySince = performance.now();
      roomChanged(room);
    });
    send(socket, { type: 'welcome', protocol: 1 });
  });
  return {
    httpServer,
    async listen(port = 8787, host = '127.0.0.1') {
      await new Promise<void>((resolve, reject) => {
        const failedListen = (failure: Error) => { httpServer.off('listening', ready); reject(failure); };
        const ready = () => { httpServer.off('error', failedListen); resolve(); };
        httpServer.once('error', failedListen); httpServer.once('listening', ready); httpServer.listen(port, host);
      });
      return httpServer.address();
    },
    async close() {
      if (closed) return; closed = true;
      clearInterval(timer); clearInterval(heartbeat); httpServer.off('upgrade', onUpgrade);
      for (const room of rooms.values()) dispose(room);
      for (const socket of connections.keys()) socket.terminate();
      await new Promise<void>(resolve => wss.close(() => resolve()));
      if (!options.httpServer && httpServer.listening) await new Promise<void>((resolve, reject) => httpServer.close(failure => failure ? reject(failure) : resolve()));
    },
  };
}
