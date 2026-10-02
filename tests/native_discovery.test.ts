// SPDX-License-Identifier: GPL-3.0-or-later
import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { setTimeout as delay } from 'node:timers/promises';
import createAedes from 'aedes';
import { WebSocketServer, createWebSocketStream } from 'ws';
import { GAME_VERSION, ROOM_TOPIC, ROOM_TTL_MS, MAX_LISTINGS, PublicRoomAnnouncer, PublicRoomBrowser, PublicRoomIndex, parsePublicRoom, validateBrokerUrl, type PublicRoom, type RoomAnnouncement } from '../native/network/discovery.js';
const now=1_800_000_000_000;
const listing=(extra:Partial<PublicRoom>={}):PublicRoom=>({version:GAME_VERSION,roomId:'0123456789ABCDEF',hostPeerId:'host-test',joinToken:'A'.repeat(32),name:'Friday Jones',players:1,capacity:2,status:'waiting',scope:'peerjs-cloud',updatedAt:now,...extra});
const topic=(room:PublicRoom)=>`${ROOM_TOPIC}/${room.roomId}`;
async function until(check:()=>boolean){for(let i=0;i<400;i++){if(check())return;await delay(10);}assert.fail('Expected actual MQTT event did not arrive.');}

test('public announcements accept only current open rooms and never private credential fields',()=>{
  const room=listing();assert.deepEqual(parsePublicRoom(topic(room),JSON.stringify(room),now),room);
  for(const value of [{...room,sessionToken:'private-secret'},{...room,credentials:{}},{...room,version:'old'},{...room,status:'running'},{...room,players:2},{...room,capacity:5},{...room,players:0},{...room,hostPeerId:'https://evil.example'},{...room,name:'x'.repeat(49)},{...room,name:'x\u202Ey'},{...room,updatedAt:now-ROOM_TTL_MS},{...room,updatedAt:now+15001},{...room,scope:'other'},{...room,joinToken:'not-an-invite'}])assert.equal(parsePublicRoom(topic(room),JSON.stringify(value),now),null);
  assert.equal(parsePublicRoom(`${ROOM_TOPIC}/other`,JSON.stringify(room),now),null);
  assert.equal(parsePublicRoom(topic(room),' '.repeat(2049),now),null);
  assert.equal(parsePublicRoom(topic(room),new Uint8Array([0xff]),now),null);
  assert.throws(()=>validateBrokerUrl('https://example.com'));assert.throws(()=>validateBrokerUrl('wss://user:password@example.com'));
});

test('room index bounds hostile lists, prunes elapsed TTL without new traffic and handles removals',()=>{
  const index=new PublicRoomIndex();
  for(let i=0;i<MAX_LISTINGS+50;i++){const room=listing({roomId:String(i).padStart(16,'0')});index.receive(topic(room),JSON.stringify(room),now);}
  assert.equal(index.values(now).length,MAX_LISTINGS);
  const first=index.values(now)[0];index.receive(topic(first),'',now);assert.equal(index.values(now).length,MAX_LISTINGS-1);
  assert.equal(index.values(now+ROOM_TTL_MS).length,0,'Quiet stale rooms expire without another broker message.');
  const room=listing();index.receive(topic(room),JSON.stringify({...room,updatedAt:now+1000}),now+1000);index.receive(topic(room),JSON.stringify({...room,name:'Old name'}),now+1000);assert.equal(index.values(now+1000)[0].name,room.name);
});

test('real MQTT WebSocket clients publish, refresh retained rooms, update counts and remove full/closed rooms',async t=>{
  const broker=new createAedes(),server=createServer(),wss=new WebSocketServer({server});
  wss.on('connection',socket=>broker.handle(createWebSocketStream(socket)));
  await new Promise<void>(resolve=>server.listen(0,'127.0.0.1',resolve));const address=server.address();assert(address&&typeof address==='object');const url=`ws://127.0.0.1:${address.port}/mqtt`;
  const captured:string[]=[];broker.on('publish',(packet,client)=>{if(client&&packet.topic.startsWith(ROOM_TOPIC))captured.push(packet.payload.toString());});
  let rooms:PublicRoom[]=[],ready=0,roomChanges=0;
  const browser=new PublicRoomBrowser({brokerUrl:url,onRooms:value=>{rooms=value;roomChanges++;},onStatus:s=>{if(s.state==='ready')ready++;}});
  const host=new PublicRoomAnnouncer({brokerUrl:url});
  t.after(async()=>{host.stop();browser.close();await delay(50);for(const c of wss.clients)c.terminate();await new Promise<void>(resolve=>wss.close(()=>resolve()));await new Promise<void>(resolve=>server.close(()=>resolve()));await new Promise<void>(resolve=>broker.close(()=>resolve()));});
  browser.refresh();await until(()=>ready===1);assert.deepEqual(rooms,[],'Private rooms publish nothing.');
  const room=listing({updatedAt:Date.now(),capacity:3});
  host.update({...room,sessionToken:'NEVER-PUBLISH-PRIVATE'} as RoomAnnouncement);await until(()=>rooms.length===1);assert.equal(rooms[0].name,room.name);assert(captured.every(raw=>!raw.includes('NEVER-PUBLISH-PRIVATE')&&!raw.includes('sessionToken')));
  browser.refresh();await until(()=>ready===2&&rooms.length===1);assert.equal(rooms[0].roomId,room.roomId,'Refresh really resubscribes and receives retained metadata.');
  const unchanged=roomChanges;host.update(room);await delay(1100);assert.equal(roomChanges,unchanged,'Renewal and idle expiry checks do not replace unchanged UI rows.');
  host.update({...room,players:2});await until(()=>rooms[0]?.players===2);
  host.update({...room,players:3});await until(()=>rooms.length===0);
  host.update(room);await until(()=>rooms.length===1);host.stop();await until(()=>rooms.length===0);assert(captured.some(raw=>raw===''),'Removal clears the broker retained announcement.');
});

test('broker failure reports availability without throwing or changing gameplay transport',async t=>{
  const states:string[]=[],browser=new PublicRoomBrowser({brokerUrl:'ws://127.0.0.1:1/mqtt',onRooms:()=>{},onStatus:s=>states.push(s.state)});t.after(()=>browser.close());browser.refresh();await until(()=>states.includes('unavailable'));assert.equal(states[0],'connecting');
});
