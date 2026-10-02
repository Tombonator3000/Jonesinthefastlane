// SPDX-License-Identifier: GPL-3.0-or-later
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { resolve, sep, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createMultiplayerServer } from './network/server.js';
import type { Serializable, SessionFactory } from './network/types.js';

const port = Number(process.env.PORT || 8787);
if (!Number.isInteger(port) || port < 0 || port > 65535) throw new Error('PORT must be an integer from 0 to 65535.');
const host = process.env.HOST || '127.0.0.1';
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',').map(value => value.trim()).filter(Boolean);
const assetManifest = JSON.parse(await readFile(new URL('./public/assets/manifest.json', import.meta.url), 'utf8')) as Serializable;
// The production entry point always loads the real native session. Test doubles
// belong only in isolated transport tests and are never an engine fallback.
const { createNativeSession } = await import('./session.js');
const webRoot=resolve(fileURLToPath(new URL('../build/native/',import.meta.url)));
const mime:Record<string,string>={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.flac':'audio/flac'};
const httpServer=createServer(async(request,response)=>{
  try {
    const pathname=decodeURIComponent(new URL(request.url??'/','http://localhost').pathname);
    if(pathname==='/health'){response.writeHead(200,{'Content-Type':'application/json'}).end(JSON.stringify({ok:true,protocol:1}));return;}
    const file=resolve(webRoot,'.'+(pathname.endsWith('/')?pathname+'index.html':pathname));
    if(!file.startsWith(webRoot+sep)||pathname.includes('\0')){response.writeHead(403).end();return;}
    const data=await readFile(file);response.writeHead(200,{'Content-Type':mime[extname(file)]??'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});response.end(data);
  }catch{response.writeHead(404).end('Not found. Build the native browser game before starting the server.');}
});
const createSession:SessionFactory=options=>createNativeSession({...options,enforceRoomPlayerCount:true});
const server = createMultiplayerServer({ httpServer, createSession, assetManifest, allowedOrigins, onRuntimeError: failure => console.error('Native game session failed:', failure) });
const address = await server.listen(port, host);
console.log(`Jones native multiplayer listening on ${typeof address === 'object' && address ? `${address.address}:${address.port}` : address}; WebSocket path /multiplayer`);
for (const signal of ['SIGINT', 'SIGTERM'] as const) process.once(signal, () => { void server.close().then(() => httpServer.close(()=>process.exit(0))); });
