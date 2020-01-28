'use strict';

// SERVER HUB APPLICATION
//----------------------------------------------------
const net = require('net');
const events = require('../events.js');
const port = 3001;
const server = net.createServer();

server.listen(port, () => console.log('server up on port:', port));

let socketPool = {};


server.on('connection', (socket) => {
  const id = `Socket-${Math.random()}`;
  socketPool[id] = socket;
  console.log('Welcome', id);
  socket.on('data', (buffer) => events.emit('handleEvents', buffer));
  socket.on('error', (e) => {console.log('socket error', e);});
  socket.on('close', () => {
    delete socketPool[id];
    console.log(`Goodbye ${id}`);
  });
});


const handleEvents = (buffer) => {
  for(let socket in socketPool){
    socketPool[socket].write(buffer);
  }
};


events.on('handleEvents', handleEvents);