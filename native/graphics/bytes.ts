// SPDX-License-Identifier: GPL-3.0-or-later
// No DOM or Node dependencies: the same indexed rasterizer runs on the server.
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const lookup = new Int16Array(128).fill(-1);
for (let i = 0; i < alphabet.length; i++) lookup[alphabet.charCodeAt(i)] = i;
export function decodeBytes(value: string): Uint8Array {
  if (value.length % 4 || !/^[A-Za-z0-9+/]*={0,2}$/.test(value)) throw new Error('Invalid base64 pixel data');
  const padding = value.endsWith('==') ? 2 : value.endsWith('=') ? 1 : 0;
  const result = new Uint8Array(value.length / 4 * 3 - padding);
  let out = 0;
  for (let i = 0; i < value.length; i += 4) {
    const n = (lookup[value.charCodeAt(i)] << 18) | (lookup[value.charCodeAt(i + 1)] << 12) |
      ((value[i + 2] === '=' ? 0 : lookup[value.charCodeAt(i + 2)]) << 6) |
      (value[i + 3] === '=' ? 0 : lookup[value.charCodeAt(i + 3)]);
    if (out < result.length) result[out++] = n >>> 16;
    if (out < result.length) result[out++] = n >>> 8;
    if (out < result.length) result[out++] = n;
  }
  return result;
}
export function encodeBytes(data: Uint8Array): string {
  const chunks: string[] = [];
  for (let i = 0; i < data.length; i += 3) {
    const n = data[i] * 65536 + (data[i + 1] || 0) * 256 + (data[i + 2] || 0);
    chunks.push(alphabet[n >>> 18] + alphabet[(n >>> 12) & 63] +
      (i + 1 < data.length ? alphabet[(n >>> 6) & 63] : '=') + (i + 2 < data.length ? alphabet[n & 63] : '='));
  }
  return chunks.join('');
}
