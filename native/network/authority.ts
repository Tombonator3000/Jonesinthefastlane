// SPDX-License-Identifier: GPL-3.0-or-later
// One authoritative room model for WebSockets and browser peer connections.
// This module uses web APIs only; adapters own transport heartbeat/backpressure.
import { parseGameInput, type GameInput, type PlayerCount, type RoomInfo, type Serializable, type ServerMessage, type SessionFactory, type SessionRuntime } from './types.js';

export interface AuthorityConnection {
  /** Adapter-generated ID unique to this physical connection's lifetime. */
  id: string;
  send(message: ServerMessage): void;
  close(code: number, reason: string): void;
}
export interface RoomAuthorityOptions {
  createSession: SessionFactory;
  assetManifest?: Serializable;
  maxRooms?: number;
  reconnectWindowMs?: number;
  onRuntimeError?: (error: unknown) => void;
}
interface Seat { token: string; socket: AuthorityConnection | null; lastSeq: number }
interface PendingInput { seat: Seat; index: number; input: GameInput; seq: number; requestId?: string }
interface Room {
  id: string; joinToken: string; count: PlayerCount; seats: Seat[];
  status: RoomInfo['status']; runtime: SessionRuntime | null; tick: number; revision: number;
  frame: Serializable; state: Serializable; frameDirty: boolean; stateDirty: boolean;
  lastOwner: number | null; queue: PendingInput[]; nextTickAt: number; emptySince: number | null;
}
interface Connection { transport: AuthorityConnection; room?: Room; seat?: Seat; index?: number; windowAt: number; messages: number }
const TICK_MS = 1000 / 60;
const encoder=new TextEncoder();
const secret=(bytes:number)=>btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(bytes)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
function sameSecret(a:string,b:unknown):boolean {
  if(typeof b!=='string')return false;
  // Fixed work for the expected token length; do not stop at the first mismatch.
  // JavaScript cannot promise the native timingSafeEqual execution guarantees.
  let difference=a.length^b.length;
  for(let i=0;i<a.length;i++)difference|=a.charCodeAt(i)^(b.charCodeAt(i)||0);
  return difference===0;
}

export function createRoomAuthority(options:RoomAuthorityOptions) {
  const rooms=new Map<string,Room>();
  const connections=new Map<string,Connection>();
  let closed=false;
  const isConnected=(socket:AuthorityConnection|null):boolean=>!!socket&&connections.get(socket.id)?.transport===socket;
  function disconnect(id:string) {
    const connection=connections.get(id);if(!connection)return;
    connections.delete(id);
    const {room,seat,transport}=connection;
    if(!room||!seat||seat.socket!==transport||!rooms.has(room.id))return;
    seat.socket=null;
    if(room.seats.every(player=>!player.socket))room.emptySince=performance.now();
    roomChanged(room);
  }
  function closeConnection(socket:AuthorityConnection,code:number,reason:string) {
    // Revoke before asking an asynchronous transport to close. Late packets
    // and a superseded private-seat connection cannot mutate the game.
    if(isConnected(socket))disconnect(socket.id);
    try{socket.close(code,reason);}catch{/* The authority has already revoked it. */}
  }
  const send = (socket: AuthorityConnection | null, message: ServerMessage) => {
    if (!isConnected(socket)) return;
    try { socket!.send(message); } catch { closeConnection(socket!,1011,'Connection failed; reconnect to resume.'); }
  };
  const error = (socket: AuthorityConnection, code: string, message: string, requestId?: string) => send(socket, { type: 'error', code, message, ...(requestId ? { requestId } : {}) });
  const broadcast = (room: Room, message: ServerMessage) => { for (const seat of room.seats) send(seat.socket, message); };
  const info = (room: Room): RoomInfo => ({ roomId: room.id, playerCount: room.count, status: room.status, seats: room.seats.map((seat, i) => ({ seat: i, connected: isConnected(seat.socket) })), inputOwner: room.runtime?.inputOwner() ?? null });
  const roomChanged = (room: Room) => broadcast(room, { type: 'room', room: info(room) });
  const snapshot = (room: Room, socket: AuthorityConnection) => {
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
    for (const seat of room.seats) seat.socket && closeConnection(seat.socket,1011,'Game session stopped.');
  }
  function attach(socket: AuthorityConnection, connection: Connection, room: Room, seat: Seat, index: number, requestId?: string) {
    const previous = seat.socket;
    seat.socket = socket;
    connection.room = room; connection.seat = seat; connection.index = index;
    room.emptySince = null;
    if (previous && previous !== socket) closeConnection(previous,4001,'This seat reconnected in another connection.');
    send(socket, { type: 'joined', roomId: room.id, seat: index, sessionToken: seat.token, joinToken: room.joinToken, lastInputSeq: seat.lastSeq, room: info(room), ...(requestId ? { requestId } : {}) });
    snapshot(room, socket);
    roomChanged(room);
  }
  async function processRequest(socket: AuthorityConnection, connection: Connection, raw: unknown) {
    const now = performance.now();
    if (now - connection.windowAt >= 1000) { connection.windowAt = now; connection.messages = 0; }
    if (++connection.messages > 180) { closeConnection(socket,1008,'Too many messages.'); return; }
    let request: Record<string, unknown>;
    try {
      const encoded=JSON.stringify(raw);
      if(typeof encoded!=='string')throw new Error('JSON required');
      if(encoder.encode(encoded).byteLength>4096){closeConnection(socket,1009,'Message exceeds 4096 bytes.');return;}
      // Copy as a wire round-trip: callers cannot retain/mutate an input object.
      request = JSON.parse(encoded);
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
      if (room.seats.length !== room.count || room.seats.some(player => !isConnected(player.socket))) { error(socket, 'players_missing', 'All chosen players must be connected before starting.', requestId); return; }
      room.status = 'starting'; roomChanged(room);
      try {
        const runtime = await options.createSession({ seed: crypto.getRandomValues(new Uint32Array(1))[0], playerCount: room.count, assetManifest: options.assetManifest,
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
  (timer as unknown as {unref?:()=>void}).unref?.();
  return {
    connect(transport:AuthorityConnection):void {
      if(closed){transport.close(1001,'Room authority closed.');return;}
      if(connections.has(transport.id)){transport.close(1008,'Connection ID already in use.');return;}
      connections.set(transport.id,{transport,windowAt:performance.now(),messages:0});
      send(transport,{type:'welcome',protocol:1});
    },
    async receive(id:string,raw:unknown):Promise<void> {
      const connection=connections.get(id);if(closed||!connection)return;
      try{await processRequest(connection.transport,connection,raw);}
      catch(failure){
        if(connection.room&&rooms.has(connection.room.id))failed(connection.room,failure);
        else error(connection.transport,'invalid_message','Unable to process this message.');
      }
    },
    disconnect,
    close():void {
      if(closed)return;closed=true;clearInterval(timer);
      for(const room of rooms.values())dispose(room);
      for(const connection of [...connections.values()])closeConnection(connection.transport,1001,'Room authority closed.');
    },
    get roomCount(){return rooms.size;},
  };
}
export type RoomAuthority=ReturnType<typeof createRoomAuthority>;
