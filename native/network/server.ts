// SPDX-License-Identifier: GPL-3.0-or-later
// WebSocket transport for the shared browser-compatible room authority.
import { createServer, type Server as HttpServer } from 'node:http';
import { WebSocket, WebSocketServer } from 'ws';
import { createRoomAuthority, type RoomAuthorityOptions } from './authority.js';

export interface MultiplayerServerOptions extends RoomAuthorityOptions {
  httpServer?: HttpServer;
  path?: string;
  allowedOrigins?: string[];
}

export function createMultiplayerServer(options: MultiplayerServerOptions) {
  const authority=createRoomAuthority(options);
  const connections=new Map<WebSocket,{id:string;alive:boolean}>();
  let nextConnection=0,closed=false;
  const httpServer = options.httpServer || createServer((request, response) => {
    if (request.url === '/health') {
      response.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
      response.end(JSON.stringify({ ok: true, protocol: 1, rooms: authority.roomCount }));
    } else { response.writeHead(404).end('Not found'); }
  });
  const wss = new WebSocketServer({ noServer: true, maxPayload: 4096, perMessageDeflate: {serverNoContextTakeover:true,clientNoContextTakeover:true,threshold:1024} });
  const heartbeat=setInterval(()=>{
    for(const [socket,connection] of connections){
      if(!connection.alive){socket.terminate();continue;}
      connection.alive=false;socket.ping();
    }
  },30000);
  heartbeat.unref();
  // Retain this listener so an externally supplied HTTP server can be reused.
  const onUpgrade=(request:import('node:http').IncomingMessage,socket:import('node:stream').Duplex,head:Buffer)=>{
    if(new URL(request.url||'/','http://localhost').pathname!==(options.path??'/multiplayer')||
      (options.allowedOrigins&&(!request.headers.origin||!options.allowedOrigins.includes(request.headers.origin)))){
      socket.write('HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n');socket.destroy();return;
    }
    wss.handleUpgrade(request,socket,head,client=>wss.emit('connection',client,request));
  };
  httpServer.on('upgrade',onUpgrade);
  wss.on('connection',socket=>{
    const connection={id:String(++nextConnection),alive:true};
    connections.set(socket,connection);
    socket.on('pong',()=>{connection.alive=true;});
    socket.on('error',()=>{}); // Protocol/oversize failures are cleaned up on close.
    socket.on('message',(data,binary)=>{
      let decoded:unknown=null;
      if(!binary){try{decoded=JSON.parse(data.toString());}catch{/* Authority returns the existing invalid_message error. */}}
      void authority.receive(connection.id,decoded);
    });
    socket.on('close',()=>{connections.delete(socket);authority.disconnect(connection.id);});
    authority.connect({
      id:connection.id,
      send(message){
        if(socket.readyState!==WebSocket.OPEN)return;
        if(socket.bufferedAmount>8*1024*1024){socket.close(1013,'Connection is too slow; reconnect to resume.');return;}
        socket.send(JSON.stringify(message));
      },
      close(code,reason){socket.close(code,reason);},
    });
  });
  return {
    httpServer,
    async listen(port=8787,host='127.0.0.1'){
      await new Promise<void>((resolve,reject)=>{
        const failedListen=(failure:Error)=>{httpServer.off('listening',ready);reject(failure);};
        const ready=()=>{httpServer.off('error',failedListen);resolve();};
        httpServer.once('error',failedListen);httpServer.once('listening',ready);httpServer.listen(port,host);
      });
      return httpServer.address();
    },
    async close(){
      if(closed)return;closed=true;
      clearInterval(heartbeat);httpServer.off('upgrade',onUpgrade);authority.close();
      for(const socket of connections.keys())socket.terminate();
      await new Promise<void>(resolve=>wss.close(()=>resolve()));
      if(!options.httpServer&&httpServer.listening)await new Promise<void>((resolve,reject)=>httpServer.close(failure=>failure?reject(failure):resolve()));
    },
  };
}
