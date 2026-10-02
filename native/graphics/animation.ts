// SPDX-License-Identifier: GPL-3.0-or-later
// SCI1 cast drawing semantics, called by native translated game methods.
import type { Runtime } from '../runtime/runtime.js';
import type { GraphicsState } from './GraphicsState.js';
import type { Rect } from './types.js';
interface Entry { object: any; view: number; loop: number; cel: number; rect: Rect; priority: number; signal: number }
const STOP = 1, UPDATED = 2, NOUPDATE = 4, HIDDEN = 8, FIXED = 16, ALWAYS = 32, FORCE = 64, REMOVE = 128, FROZEN = 256, IGNORE = 16384, DISPOSE = 32768;
function listItems(list: any): any[] { const items = []; for (let node = list?.first; node; node = node.next) if (!node.value.disposed) items.push(node.value); return items; }
export async function animate(rt: Runtime, list: any, cycle: boolean): Promise<void> {
  const g = rt.graphics as GraphicsState;
  if (!list) { g.picNotValid = 0; rt.onFrame?.(); return; }
  if (cycle) for (let node = list.first; node; node = node.next) {
    const object = node.value;
    if (!object.disposed && !(rt.get(object, 'signal') & FROZEN)) await rt.send(object, 'doit', []);
  }
  const port = g.getPort(); g.setPort(2);
  let invalid = g.picNotValid;
  const entries: Entry[] = listItems(list).sort((a, b) => rt.get(a, 'y') - rt.get(b, 'y') || rt.get(a, 'z') - rt.get(b, 'z')).map(object => {
    const view = rt.get(object, 'view'), asset = g.assets.views[view];
    if (!asset) throw new Error(`Missing actor view ${view}`);
    let loop = rt.word(rt.get(object, 'loop')), cel = rt.word(rt.get(object, 'cel')), signal = rt.get(object, 'signal');
    if (loop >= asset.loops.length) { loop = 0; rt.set(object, 'loop', 0); } else if (loop < 0) loop = asset.loops.length - 1;
    if (cel >= asset.loops[loop].cels.length) { cel = 0; rt.set(object, 'cel', 0); } else if (cel < 0) cel = asset.loops[loop].cels.length - 1;
    const rect = g.getCelRect(view, loop, cel, rt.get(object, 'x'), rt.get(object, 'y'), rt.get(object, 'z'));
    for (const [key, value] of Object.entries({ nsLeft: rect.left, nsTop: rect.top, nsRight: rect.right, nsBottom: rect.bottom })) rt.set(object, key, value);
    if (!(signal & FIXED)) rt.set(object, 'priority', g.coordinatePriority(rt.get(object, 'y')));
    if (signal & NOUPDATE) {
      if ((signal & (FORCE | UPDATED | ALWAYS)) || ((signal & HIDDEN) && !(signal & REMOVE)) || (!(signal & HIDDEN) && (signal & REMOVE))) invalid++;
      signal &= ~STOP;
    } else {
      if (signal & (STOP | ALWAYS)) invalid++;
      signal &= ~FORCE;
    }
    return { object, view, loop, cel, rect, priority: rt.get(object, 'priority'), signal };
  });
  const draw = (e: Entry) => g.drawCel(e.view, e.loop, e.cel, e.rect.left, e.rect.top, e.priority);
  const control = (e: Entry) => {
    if (!(e.signal & IGNORE)) g.fillRect({ ...e.rect, top: Math.max(e.rect.top, Math.min(e.rect.bottom - 1, g.priorityCoordinate(e.priority) - 1)) }, -1, -1, 15);
  };
  try {
    if (invalid) {
      for (const e of [...entries].reverse()) {
        if (e.signal & NOUPDATE) {
          if (!(e.signal & REMOVE)) {
            const bits = rt.get(e.object, 'underBits');
            if (g.hasBits(bits)) { if (g.picNotValid === 1) g.freeBits(bits); else g.restoreBits(bits); }
            rt.set(e.object, 'underBits', 0);
          }
          e.signal &= ~FORCE;
          if (e.signal & UPDATED) e.signal &= ~(UPDATED | NOUPDATE);
        } else if (e.signal & STOP) e.signal = (e.signal & ~STOP) | NOUPDATE;
      }
      for (const e of entries) if (e.signal & ALWAYS) {
        draw(e); control(e); e.signal &= ~(STOP | UPDATED | NOUPDATE | FORCE);
      }
      // Save every static background before drawing any of those static cels.
      for (const e of entries) if (e.signal & NOUPDATE) {
        if (e.signal & HIDDEN) e.signal |= REMOVE;
        else { e.signal &= ~REMOVE; rt.set(e.object, 'underBits', g.saveBits(e.rect, e.signal & IGNORE ? 3 : 7)); }
      }
      for (const e of entries) if ((e.signal & NOUPDATE) && !(e.signal & HIDDEN)) { draw(e); control(e); }
    }
    // The presented frame contains moving actors; the offscreen scene does not.
    g.beginAnimation();
    try {
      for (const e of entries) if (!(e.signal & (NOUPDATE | HIDDEN | ALWAYS))) { draw(e); e.signal &= ~REMOVE; rt.set(e.object, 'underBits', 0); }
      for (const e of entries) {
        for (const [key, value] of Object.entries({ lsLeft: e.rect.left, lsTop: e.rect.top, lsRight: e.rect.right, lsBottom: e.rect.bottom })) rt.set(e.object, key, value);
        rt.set(e.object, 'signal', e.signal);
      }
    } finally { g.endAnimation(); }
    for (const e of [...entries].reverse()) if (!e.object.disposed && (rt.get(e.object, 'signal') & DISPOSE)) await rt.send(e.object, 'delete', []);
  } finally { g.setPort(port); }
  rt.onFrame?.();
}
