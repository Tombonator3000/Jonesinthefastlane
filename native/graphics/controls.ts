// SPDX-License-Identifier: GPL-3.0-or-later
// Original SCI1 editable line control, including its 30-tick block cursor.
import type { Runtime } from '../runtime/runtime.js';
import type { GraphicsState } from './GraphicsState.js';
import type { Rect } from './types.js';
interface Caret { control: any; rect: Rect; port: number; visible: boolean; nextTick: number }
const carets = new WeakMap<Runtime, Caret>();
function editRect(rt: Runtime, control: any): Rect {
  const left = rt.get(control, 'nsLeft'), top = rt.get(control, 'nsTop');
  return { left, top, right: Math.max(left, rt.get(control, 'nsRight')), bottom: Math.max(top, rt.get(control, 'nsBottom')) };
}
function drawCaret(rt: Runtime, control: any, text: string, cursor: number): void {
  const g = rt.graphics as GraphicsState, rect = editRect(rt, control), font = rt.get(control, 'font');
  const left = rect.left + g.measureText(text.slice(0, cursor), font, -1).width;
  const width = cursor < text.length ? g.measureText(text[cursor], font, -1).width : 1;
  const height = g.assets.fonts[font < 0 ? g.port.font : font].lineHeight;
  const caret = { control, rect: { left, top: rect.top, right: left + width, bottom: rect.top + height }, port: g.getPort(), visible: true, nextTick: rt.ticks + 30 };
  g.invertRect(caret.rect); carets.set(rt, caret);
}
export function drawEditControl(rt: Runtime, control: any, frame = true, selected = !!(rt.get(control, 'state') & 8)): void {
  const g = rt.graphics as GraphicsState, rect = editRect(rt, control), text = rt.text(rt.get(control, 'text'));
  const border = { left: rect.left - 1, top: rect.top - 1, right: rect.right + 1, bottom: rect.bottom + 1 };
  g.fillRect(frame ? border : rect, g.port.backColor);
  g.drawText(text, rect.left, rect.top, { font: rt.get(control, 'font'), color: g.port.color, maxWidth: rect.right - rect.left });
  if (frame) g.frameRect(border);
  carets.delete(rt);
  if (selected) drawCaret(rt, control, text, Math.min(text.length, Math.max(0, rt.get(control, 'cursor'))));
}
export function editControl(rt: Runtime, control: any, event: any): void {
  if (!control || rt.get(control, 'type') !== 3) return;
  const g = rt.graphics as GraphicsState, reference = rt.get(control, 'text');
  let text = rt.text(reference), cursor = Math.min(text.length, Math.max(0, rt.get(control, 'cursor'))), changed = false;
  if (event && rt.get(event, 'type') === 4) {
    const key = rt.get(event, 'message'), modifiers = rt.get(event, 'modifiers');
    switch (key) {
      case 8: if (cursor > 0) { cursor--; text = text.slice(0, cursor) + text.slice(cursor + 1); changed = true; } break;
      case 0x5300: if (cursor < text.length) { text = text.slice(0, cursor) + text.slice(cursor + 1); changed = true; } break;
      case 0x4700: cursor = 0; changed = true; break;
      case 0x4f00: cursor = text.length; changed = true; break;
      case 0x4b00: if (cursor > 0) { cursor--; changed = true; } break;
      case 0x4d00: if (cursor < text.length) { cursor++; changed = true; } break;
      default:
        if ((modifiers & 4) && (key === 3 || key === 99)) { cursor = 0; text = ''; changed = true; }
        else if (key > 31 && key < 256 && text.length < rt.get(control, 'max')) {
          const char = rt.manifest.codePage[key] ?? String.fromCharCode(key);
          const candidate = text.slice(0, cursor) + char + text.slice(cursor), rect = editRect(rt, control);
          if (g.measureText(candidate, rt.get(control, 'font'), -1).width < rect.right - rect.left) { text = candidate; cursor++; changed = true; }
        }
    }
  }
  rt.set(control, 'cursor', cursor);
  if (changed) {
    if (reference?.kind === 'ref') rt.writeText(reference, text); else rt.set(control, 'text', text);
    drawEditControl(rt, control, false, true);
  } else {
    const caret = carets.get(rt);
    if (caret?.control === control && rt.ticks >= caret.nextTick) {
      const port = g.getPort(); g.setPort(caret.port); g.invertRect(caret.rect); g.setPort(port);
      caret.visible = !caret.visible; caret.nextTick = rt.ticks + 30;
    }
  }
}
