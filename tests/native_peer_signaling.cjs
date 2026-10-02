// SPDX-License-Identifier: GPL-3.0-or-later
// Real PeerServer signaling plus static files only. No game/session imports.
const {createServer}=require('node:http');
const {fork}=require('node:child_process');
const {readFile,stat}=require('node:fs/promises');
const {resolve,extname,sep}=require('node:path');
const {once}=require('node:events');

if(process.argv.includes('--signaling-child')) {
  const {PeerServer}=require('peer');
  PeerServer({host:'127.0.0.1',port:0,path:'/peerjs',key:'peerjs',allow_discovery:false},server=>{
    process.send?.({port:server.address().port});
  });
} else {
  exports.startPeerFixture=async function(root,{cloud=false}={}) {
    root=resolve(root);
    await stat(resolve(root,'index.html')); // A missing production build is an error.
    const requests=[],sockets=new Set();
    const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.flac':'audio/flac','.svg':'image/svg+xml'};
    const server=createServer(async(req,res)=>{
      let path;
      try{path=decodeURIComponent(new URL(req.url,'http://127.0.0.1').pathname);}
      catch{res.writeHead(400).end();return;}
      requests.push({method:req.method,path});
      if(!['GET','HEAD'].includes(req.method)){res.writeHead(405).end();return;}
      const file=resolve(root,'.'+(path.endsWith('/')?path+'index.html':path));
      if(!file.startsWith(root+sep)||path.includes('\0')){res.writeHead(403).end();return;}
      try{const bytes=await readFile(file);res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','Content-Length':bytes.length,'Cache-Control':'no-store'});res.end(req.method==='HEAD'?undefined:bytes);}
      catch{res.writeHead(404).end('Static asset not found');}
    });
    server.on('connection',socket=>{sockets.add(socket);socket.on('close',()=>sockets.delete(socket));});
    server.on('upgrade',(_req,socket)=>socket.destroy()); // This fixture cannot host gameplay WebSockets.
    await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',resolve);});
    let signal;
    try {
      if(!cloud) {
        const child=fork(__filename,['--signaling-child'],{stdio:['ignore','ignore','pipe','ipc']});
        let stderr='';child.stderr.on('data',data=>{stderr+=data;});
        const port=await new Promise((resolve,reject)=>{
          const timeout=setTimeout(()=>reject(new Error('PeerServer startup timed out: '+stderr.slice(-1000))),10_000);
          child.once('error',error=>{clearTimeout(timeout);reject(error);});
          child.once('exit',code=>{clearTimeout(timeout);reject(new Error('PeerServer exited before ready: '+code+' '+stderr.slice(-1000)));});
          child.once('message',message=>{clearTimeout(timeout);resolve(message.port);});
        }).catch(error=>{child.kill();throw error;});
        signal={child,url:`http://127.0.0.1:${port}/peerjs`};
      }
      const url=new URL(`http://127.0.0.1:${server.address().port}/`);
      if(signal){url.searchParams.set('signal',signal.url);url.searchParams.set('ice','local');}
      return {url:url.href,signalUrl:signal?.url??null,requests,
        async close(){
          for(const socket of sockets)socket.destroy();
          await new Promise(resolve=>server.close(resolve));
          if(signal&&signal.child.exitCode===null){const exit=once(signal.child,'exit');signal.child.kill('SIGTERM');await exit;}
        }};
    }catch(error){for(const socket of sockets)socket.destroy();await new Promise(resolve=>server.close(resolve));throw error;}
  };
}
