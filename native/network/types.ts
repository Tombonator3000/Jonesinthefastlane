// SPDX-License-Identifier: GPL-3.0-or-later
/** The transport never invents game state: the native SCI session owns it. */
export type Serializable = null | boolean | number | string | Serializable[] | { [key: string]: Serializable };
export type PlayerCount = 1 | 2 | 3 | 4;
export type GameInput =
  | { type: 'pointer'; action: 'move' | 'down' | 'up'; x: number; y: number; button: 0 | 1 | 2 }
  | { type: 'key'; action: 'down' | 'up'; key: string };

export interface SessionRuntime {
  start(): void;
  /** Exactly one original SCI logical tick, 1/60 second. No wall-clock RNG. */
  tick(): void;
  stop(): void;
  handleInput(input: GameInput): void;
  getFrame(): Serializable;
  getState(): Serializable;
  /** Zero-based human seat, including each original setup screen; null for AI/wait. */
  inputOwner(): number | null;
}
export interface SessionOptions {
  seed: number;
  playerCount: PlayerCount;
  assetManifest?: Serializable;
  onFrame(frame: Serializable): void;
  onState(state: Serializable): void;
}
export type SessionFactory = (options: SessionOptions) => SessionRuntime | Promise<SessionRuntime>;
export interface RoomInfo {
  roomId: string;
  playerCount: PlayerCount;
  status: 'waiting' | 'starting' | 'running';
  seats: { seat: number; connected: boolean }[];
  inputOwner: number | null;
}
export interface Credentials {
  roomId: string;
  seat: number;
  sessionToken: string;
  /** Shared invitation secret, separate from the private seat credential. */
  joinToken: string;
  lastInputSeq: number;
}
export type ClientMessage =
  | { type: 'create'; playerCount: PlayerCount; requestId?: string }
  | { type: 'join'; roomId: string; joinToken: string; requestId?: string }
  | { type: 'resume'; roomId: string; sessionToken: string; requestId?: string }
  | { type: 'start'; requestId?: string }
  | { type: 'input'; seq: number; input: GameInput; requestId?: string };
export type ServerMessage =
  | { type: 'welcome'; protocol: 1 }
  | ({ type: 'joined'; room: RoomInfo; requestId?: string } & Credentials)
  | { type: 'room'; room: RoomInfo }
  | { type: 'snapshot'; tick: number; revision: number; frame: Serializable; state: Serializable; inputOwner: number | null }
  | { type: 'frame'; tick: number; revision: number; frame: Serializable }
  | { type: 'state'; tick: number; revision: number; state: Serializable; inputOwner: number | null }
  | { type: 'started'; requestId?: string }
  | { type: 'ack'; seq: number; tick: number; requestId?: string }
  | { type: 'error'; code: string; message: string; requestId?: string };

const specialKeys = new Set(['Enter', 'Escape', 'Backspace', 'Delete', 'Tab', 'Home', 'End', 'Insert', 'PageUp', 'PageDown', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Shift', 'Control', 'Alt', ...Array.from({ length: 12 }, (_, i) => `F${i + 1}`)]);
export function parseGameInput(value: unknown): GameInput | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const input = value as Record<string, unknown>;
  if (input.type === 'pointer' && ['move', 'down', 'up'].includes(String(input.action)) &&
      Number.isInteger(input.x) && Number.isInteger(input.y) && Number(input.x) >= 0 && Number(input.x) < 320 &&
      Number(input.y) >= 0 && Number(input.y) < 200 && [0, 1, 2].includes(Number(input.button)) && typeof input.button === 'number' &&
      Object.keys(input).every(key => ['type', 'action', 'x', 'y', 'button'].includes(key))) {
    return { type: 'pointer', action: input.action as 'move' | 'down' | 'up', x: Number(input.x), y: Number(input.y), button: input.button as 0 | 1 | 2 };
  }
  if (input.type === 'key' && ['down', 'up'].includes(String(input.action)) && typeof input.key === 'string' &&
      (specialKeys.has(input.key) || /^[\x20-\x7e]$/.test(input.key)) && Object.keys(input).every(key => ['type', 'action', 'key'].includes(key))) {
    return { type: 'key', action: input.action as 'down' | 'up', key: input.key };
  }
  return null;
}
