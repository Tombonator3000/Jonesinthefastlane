// SPDX-License-Identifier: GPL-3.0-or-later
// SCI menu strings and attributes drive the original English menu, without DOM UI.
import type { Runtime } from '../runtime/runtime.js';
import type { GraphicsState } from './GraphicsState.js';
interface MenuItem { id: number; label: string; shortcut: string; key: number; modifiers: number; enabled: boolean; separator: boolean; tag: number }
interface Menu { id: number; title: string; left: number; width: number; items: MenuItem[] }
const values = (rt: Runtime): Record<string, any> => (rt as any).menuValues ??= {};
export function menuModel(rt: Runtime): Menu[] {
  const g = rt.graphics as GraphicsState;
  let left = 8;
  return rt.menus.map(([titleValue, contentValue], menuIndex) => {
    const title = rt.text(titleValue), id = menuIndex + 1;
    const menu: Menu = { id, title, left, width: g.measureText(title, 0, -1).width, items: [] };
    left += menu.width;
    menu.items = rt.text(contentValue).split(':').map((raw, itemIndex) => {
      const itemId = id * 256 + itemIndex + 1, parts = raw.split('`');
      const tag = Number(/=(\d+)/.exec(raw)?.[1] || 0);
      const originalLabel = parts[0].replace(/=\d+.*$/, '');
      let shortcut = (parts[1] || '').replace(/=\d+.*$/, ''), key = 0, modifiers = 0;
      const fn = /#([0-9])/.exec(shortcut), ctrl = /\^([A-Za-z])/.exec(shortcut), alt = /@([A-Za-z])/.exec(shortcut);
      if (fn) { const number = Number(fn[1]) || 10; key = (58 + number) << 8; shortcut = shortcut.replace(/#([0-9])/, `F${number}`); }
      if (ctrl) { key = ctrl[1].toLowerCase().charCodeAt(0); modifiers = 4; shortcut = shortcut.replace('^', String.fromCharCode(3)); }
      if (alt) { key = alt[1].toLowerCase().charCodeAt(0); modifiers = 8; shortcut = shortcut.replace('@', String.fromCharCode(2)); }
      const attrs = values(rt), separator = /^[!\- ]+$/.test(originalLabel);
      return { id: itemId, label: Object.hasOwn(attrs, `${itemId}:110`) ? rt.text(attrs[`${itemId}:110`]) : originalLabel,
        shortcut, key: attrs[`${itemId}:111`] ?? key, modifiers,
        enabled: !separator && (Object.hasOwn(attrs, `${itemId}:112`) ? !!attrs[`${itemId}:112`] : true),
        separator, tag: attrs[`${itemId}:113`] ?? tag };
    });
    return menu;
  });
}
export function setMenuAttribute(rt: Runtime, id: number, attribute: number, value: any): void { values(rt)[`${id}:${attribute}`] = value; }
export function getMenuAttribute(rt: Runtime, id: number, attribute: number): any {
  const attrs = values(rt), key = `${id}:${attribute}`;
  if (Object.hasOwn(attrs, key)) return attrs[key];
  const item = menuModel(rt).flatMap(m => m.items).find(i => i.id === id);
  if (!item) return 0;
  return attribute === 112 ? +item.enabled : attribute === 110 ? item.label : attribute === 111 ? item.key : attribute === 113 ? item.tag : 0;
}
export function drawMenuBar(rt: Runtime, clear = false): void {
  const g = rt.graphics as GraphicsState, port = g.getPort();
  g.setPort(65535);
  g.fillRect({ left: 0, top: 0, right: 320, bottom: 10 }, clear ? 0 : 255);
  if (!clear) {
    g.drawLine(0, 9, 319, 9, 0);
    for (const menu of menuModel(rt)) g.drawText(menu.title, menu.left, 1, { font: 0, color: 0, maxWidth: -1 });
  }
  g.setPort(port);
}
function menuBounds(g: GraphicsState, menu: Menu) {
  const label = Math.max(0, ...menu.items.map(i => g.measureText(i.label, 0, -1).width));
  const shortcut = Math.max(0, ...menu.items.map(i => g.measureText(i.shortcut, 0, -1).width));
  const width = label + shortcut + 22 - (shortcut ? 0 : 5), left = Math.max(0, Math.min(menu.left - 1, 320 - width));
  return { left, top: 9, right: left + width, bottom: 11 + menu.items.length * g.assets.fonts[0].lineHeight };
}
function drawOpenMenu(rt: Runtime, menus: Menu[], selectedMenu: number, selectedItem: number): void {
  const g = rt.graphics as GraphicsState;
  drawMenuBar(rt);
  const menu = menus[selectedMenu];
  if (!menu) return;
  const port = g.getPort(); g.setPort(65535); g.port.color = 0; g.port.backColor = 255;
  g.invertRect({ left: menu.left, top: 0, right: menu.left + menu.width, bottom: 9 }, 0, 255);
  const rect = menuBounds(g, menu), lineHeight = g.assets.fonts[0].lineHeight;
  g.fillRect(rect, 0); g.fillRect({ left: rect.left + 1, top: rect.top + 1, right: rect.right - 1, bottom: rect.bottom - 1 }, 255);
  menu.items.forEach((item, index) => {
    const top = 10 + lineHeight * index;
    if (item.separator) {
      for (let x = rect.left + 1; x < rect.right - 1; x += 2) g.fillRect({ left: x, top: top + (lineHeight >> 1) - 1, right: x + 1, bottom: top + (lineHeight >> 1) }, 0);
    } else {
      g.drawText(item.label, rect.left + 9, top, { font: 0, color: 0, maxWidth: -1, greyed: !item.enabled });
      const width = g.measureText(item.shortcut, 0, -1).width;
      g.drawText(item.shortcut, rect.right - width - 6, top, { font: 0, color: 0, maxWidth: -1, greyed: !item.enabled });
      if (index === selectedItem && item.enabled) g.invertRect({ left: rect.left + 1, top, right: rect.right - 1, bottom: top + lineHeight }, 0, 255);
    }
  });
  g.drawLine(0, 9, 319, 9, 0); g.setPort(port);
}
function hotkey(menus: Menu[], key: number, modifiers: number): MenuItem | undefined {
  modifiers &= 0x0c;
  if (modifiers === 4 && key > 0 && key < 27) key += 96;
  if (key === 9 && modifiers === 0) { key = 105; modifiers = 4; }
  if (key >= 65 && key <= 90) key += 32;
  return menus.flatMap(menu => menu.items).find(item => item.enabled && item.key === key && item.modifiers === modifiers);
}
/** Await original menu input while the translated game call stack remains paused. */
export async function selectMenu(rt: Runtime, event: any): Promise<number> {
  const menus = menuModel(rt), type = rt.get(event, 'type'), message = rt.get(event, 'message');
  if (!menus.length || rt.get(event, 'claimed')) return 0;
  if (type === 4 && message !== 27) {
    const item = hotkey(menus, message, rt.get(event, 'modifiers'));
    if (item) { rt.set(event, 'claimed', 1); return item.id; }
    return 0;
  }
  const mouse = type === 1 && rt.get(event, 'y') < 10;
  if (!mouse && !(type === 4 && message === 27)) return 0;
  rt.set(event, 'claimed', 1);
  const g = rt.graphics as GraphicsState, saved = g.saveState();
  let selectedMenu = mouse ? menus.findIndex(m => rt.pointer.x >= m.left && rt.pointer.x < m.left + m.width) : 0;
  if (selectedMenu < 0) selectedMenu = 0;
  let selectedItem = mouse ? -1 : menus[selectedMenu].items.findIndex(i => !i.separator);
  let wasDown = rt.pointer.down, lastX = rt.pointer.x, lastY = rt.pointer.y, changed = true;
  try {
    while (!rt.stopped) {
      if (changed) { g.loadState(saved); drawOpenMenu(rt, menus, selectedMenu, selectedItem); rt.onFrame?.(); changed = false; }
      await rt.wait(1);
      if (rt.pointer.x !== lastX || rt.pointer.y !== lastY) {
        lastX = rt.pointer.x; lastY = rt.pointer.y;
        if (lastY < 10) {
          const over = menus.findIndex(m => lastX >= m.left && lastX < m.left + m.width);
          if (over >= 0 && over !== selectedMenu) { selectedMenu = over; selectedItem = -1; changed = true; }
        } else {
          const rect = menuBounds(g, menus[selectedMenu]);
          const row = Math.floor((lastY - 10) / g.assets.fonts[0].lineHeight);
          const over = lastX > rect.left && lastX < rect.right && lastY >= 10 && lastY < rect.bottom && !menus[selectedMenu].items[row]?.separator ? row : -1;
          if (over !== selectedItem) { selectedItem = over; changed = true; }
        }
      }
      let input: any;
      while ((input = rt.queue.shift())) {
        if (input.type === 4) {
          if (input.message === 27) return 0;
          if (input.message === 13 && menus[selectedMenu].items[selectedItem]?.enabled) return menus[selectedMenu].items[selectedItem].id;
          if (input.message === 0x4b00 || input.message === 0x4d00) {
            selectedMenu = Math.max(0, Math.min(menus.length - 1, selectedMenu + (input.message === 0x4d00 ? 1 : -1)));
            selectedItem = menus[selectedMenu].items.findIndex(i => !i.separator); changed = true;
          } else if (input.message === 0x4800 || input.message === 0x5000) {
            const step = input.message === 0x5000 ? 1 : -1, items = menus[selectedMenu].items;
            let next = selectedItem + step;
            while (next >= 0 && next < items.length && items[next].separator) next += step;
            if (next >= 0 && next < items.length) { selectedItem = next; changed = true; }
          } else {
            const item = hotkey(menus, input.message, input.modifiers);
            if (item) return item.id;
          }
        } else if (input.type === 2) return menus[selectedMenu].items[selectedItem]?.enabled ? menus[selectedMenu].items[selectedItem].id : 0;
        else if (input.type === 1 && input.y >= 10) {
          const rect = menuBounds(g, menus[selectedMenu]);
          if (input.x < rect.left || input.x >= rect.right || input.y >= rect.bottom) return 0;
        }
      }
      if (wasDown && !rt.pointer.down) return menus[selectedMenu].items[selectedItem]?.enabled ? menus[selectedMenu].items[selectedItem].id : 0;
      wasDown = rt.pointer.down;
    }
    return 0;
  } finally { g.loadState(saved); rt.onFrame?.(); }
}
