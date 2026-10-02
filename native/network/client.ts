// SPDX-License-Identifier: GPL-3.0-or-later
import { parseGameInput, type ClientMessage, type Credentials, type GameInput, type PlayerCount, type RoomInfo, type Serializable, type ServerMessage } from './types.js';

export class NetworkError extends Error {
  constructor(public readonly code: string, message: string) { super(message); this.name = 'NetworkError'; }
}
export interface BrowserNetworkOptions {
  url: string;
  credentials?: Credentials;
  /** Credentials contain a private reconnect token; store locally, never in an invite URL. */
  onCredentials?: (credentials: Credentials | null) => void;
  onRoom?: (room: RoomInfo) => void;
  onFrame?: (frame: Serializable, tick: number, revision: number) => void;
  onState?: (state: Serializable, inputOwner: number | null, tick: number) => void;
  onStatus?: (status: 'connecting' | 'connected' | 'reconnecting' | 'disconnected') => void;
  onError?: (error: NetworkError) => void;
  autoReconnect?: boolean;
}

/** Only transports input and authoritative output; it does not simulate the game. */
export class BrowserNetworkClient {
  private socket: WebSocket | null = null;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private retry = 0;
  private stopped = false;
  private authenticated = false;
  private connection: Promise<void> | null = null;
  private requestNumber = 0;
  private inputSequence = 0;
  private lastRevision = -1;
  private pending = new Map<string, { resolve: (message: ServerMessage) => void; reject: (failure: Error) => void; timer: ReturnType<typeof setTimeout> }>();
  credentials: Credentials | null;
  room: RoomInfo | null = null;
  inputOwner: number | null = null;

  constructor(private readonly options: BrowserNetworkOptions) {
    const url = new URL(options.url);
    if (!['ws:', 'wss:'].includes(url.protocol)) throw new Error('A ws:// or wss:// server address is required.');
    this.credentials = options.credentials ?? null;
    this.inputSequence = this.credentials?.lastInputSeq ?? 0;
  }
  get canInput() { return this.authenticated && this.socket?.readyState === WebSocket.OPEN && this.room?.status === 'running' && this.credentials?.seat === this.inputOwner; }

  connect(): Promise<void> {
    if (this.connection) return this.connection;
    if (this.socket?.readyState === WebSocket.OPEN) return Promise.resolve();
    this.stopped = false;
    if (this.reconnectTimer) { clearTimeout(this.reconnectTimer); this.reconnectTimer = null; }
    this.options.onStatus?.(this.retry ? 'reconnecting' : 'connecting');
    this.connection = new Promise<void>((resolve, reject) => {
      const socket = new WebSocket(this.options.url);
      this.socket = socket;
      let opened = false;
      socket.addEventListener('message', event => this.receive(event));
      socket.addEventListener('open', () => {
        opened = true;
        const resume = this.credentials ? this.request({ type: 'resume', roomId: this.credentials.roomId, sessionToken: this.credentials.sessionToken }) : Promise.resolve(null);
        void resume.then(() => {
          this.retry = 0; this.connection = null; this.options.onStatus?.('connected'); resolve();
        }).catch(failure => {
          this.connection = null;
          if (failure instanceof NetworkError && ['invalid_session', 'room_unavailable'].includes(failure.code)) {
            this.credentials = null; this.authenticated = false; this.room = null; this.options.onCredentials?.(null);
          }
          reject(failure);
        });
      });
      socket.addEventListener('error', () => { if (!opened) reject(new NetworkError('connection_failed', 'Unable to connect to the game server.')); });
      socket.addEventListener('close', event => {
        if (this.socket !== socket) return;
        this.socket = null; this.connection = null; this.authenticated = false;
        const failure = new NetworkError('disconnected', event.reason || 'The game connection closed.');
        if (!opened) reject(failure);
        for (const request of this.pending.values()) { clearTimeout(request.timer); request.reject(failure); }
        this.pending.clear();
        this.options.onStatus?.('disconnected');
        // Code 4001 means this same private seat is now active in another tab.
        if (!this.stopped && this.credentials && this.options.autoReconnect !== false && event.code !== 4001) {
          const delay = Math.min(10000, 500 * 2 ** this.retry++);
          this.reconnectTimer = setTimeout(() => { this.reconnectTimer = null; void this.connect().catch(error => this.options.onError?.(error)); }, delay);
        }
      });
    });
    return this.connection;
  }
  private receive(event: MessageEvent) {
    let message: ServerMessage;
    try {
      message = JSON.parse(String(event.data));
      if (!message || typeof message !== 'object' || typeof message.type !== 'string') throw new Error('Invalid message');
    } catch {
      this.options.onError?.(new NetworkError('invalid_server_message', 'The server returned an invalid message.'));
      this.socket?.close(1002, 'Invalid server message.'); return;
    }
    if (message.type === 'joined') {
      this.credentials = { roomId: message.roomId, seat: message.seat, sessionToken: message.sessionToken, joinToken: message.joinToken, lastInputSeq: message.lastInputSeq };
      this.inputSequence = Math.max(this.inputSequence, message.lastInputSeq);
      this.lastRevision = -1; this.authenticated = true; this.room = message.room; this.inputOwner = message.room.inputOwner;
      this.options.onCredentials?.(this.credentials); this.options.onRoom?.(message.room);
    } else if (message.type === 'room') {
      this.room = message.room; this.inputOwner = message.room.inputOwner; this.options.onRoom?.(message.room);
    } else if (message.type === 'snapshot') {
      if (message.revision < this.lastRevision) return;
      this.lastRevision = message.revision; this.inputOwner = message.inputOwner;
      this.options.onFrame?.(message.frame, message.tick, message.revision);
      this.options.onState?.(message.state, message.inputOwner, message.tick);
    } else if (message.type === 'frame') {
      if (message.revision < this.lastRevision) return;
      this.lastRevision = message.revision; this.options.onFrame?.(message.frame, message.tick, message.revision);
    } else if (message.type === 'state') {
      if (message.revision < this.lastRevision) return;
      this.lastRevision = message.revision; this.inputOwner = message.inputOwner;
      this.options.onState?.(message.state, message.inputOwner, message.tick);
    }
    const failure = message.type === 'error' ? new NetworkError(message.code, message.message) : null;
    if ('requestId' in message && message.requestId) {
      const request = this.pending.get(message.requestId);
      if (request) { this.pending.delete(message.requestId); clearTimeout(request.timer); if (failure) request.reject(failure); else request.resolve(message); }
    }
    if (failure) this.options.onError?.(failure);
  }
  private request(message: ClientMessage): Promise<ServerMessage> {
    if (this.socket?.readyState !== WebSocket.OPEN) return Promise.reject(new NetworkError('disconnected', 'Connect to the game server first.'));
    if (this.pending.size >= 256) return Promise.reject(new NetworkError('input_queue_full', 'Wait for the server to process pending input.'));
    const requestId = String(++this.requestNumber);
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => { this.pending.delete(requestId); reject(new NetworkError('timeout', 'The game server did not respond.')); }, 15000);
      this.pending.set(requestId, { resolve, reject, timer });
      this.socket!.send(JSON.stringify({ ...message, requestId }));
    });
  }
  async createRoom(playerCount: PlayerCount): Promise<Credentials> {
    await this.connect(); await this.request({ type: 'create', playerCount }); return this.credentials!;
  }
  async joinRoom(roomId: string, joinToken: string): Promise<Credentials> {
    await this.connect(); await this.request({ type: 'join', roomId, joinToken }); return this.credentials!;
  }
  async start(): Promise<void> { await this.request({ type: 'start' }); }
  async sendInput(input: GameInput): Promise<void> {
    if (!this.canInput) throw new NetworkError('not_your_turn', 'Wait until you control the current original game screen.');
    if (!parseGameInput(input)) throw new NetworkError('invalid_input', 'Invalid game input.');
    const seq = ++this.inputSequence;
    await this.request({ type: 'input', seq, input });
    if (this.credentials) { this.credentials.lastInputSeq = seq; this.options.onCredentials?.(this.credentials); }
  }
  disconnect() {
    this.stopped = true;
    if (this.reconnectTimer) { clearTimeout(this.reconnectTimer); this.reconnectTimer = null; }
    this.socket?.close(1000, 'Disconnected.');
  }
}

export const createBrowserNetworkClient = (options: BrowserNetworkOptions) => new BrowserNetworkClient(options);
