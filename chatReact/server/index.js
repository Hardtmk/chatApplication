require('dotenv').config();

const app = require('express');
const cors = require('cors');
const http = require('http').createServer(app);
const io = require('socket.io')(process.env.PORT || 4000, {
  cors: {
    origin: '*',
  },
});

let users = [];

io.on('connection', socket => {
  socket.join(socket.handshake.query.id);
  socket.on('join', ({ name, image }) => {
    io.emit('notify', name + 'join the junk food club');
    users.push({ name, image, id: socket.id });
    io.emit('record', users);
  });

  socket.on('message', data => {
    data.className = 'you';
    io.emit('getmessage', data);
  });
});
