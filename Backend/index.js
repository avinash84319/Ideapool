const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config()
const pool = require('./database');
const socketio = require('socket.io');
const http = require('http');

const routes= require('./routes/apiRoutes');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);  

const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
  }
});

io.on('connect', (socket) => {

    socket.on('join', ({ name, room }, callback) => {
        console.log(name, room);
        const user = { id: socket.id, name, room };
        console.log(user);
        callback();
    });

    socket.on('sendMessage', (message,room, callback) => {
        console.log(message);
        console.log(room);
        socket.broadcast.to(room).emit('message', message);
        callback();
    });

    socket.on('disconnect', () => {
        console.log('User has left the chat');
    });

  });


server.listen(port, async() => {

    // check if the database is connected
    try {
        await pool.query('SELECT 1 + 1 AS solution');
        console.log('Database is connected');
    } catch (error) {
        console.log('Database is not connected');
    }
    
    console.log('Server is running at port ' + port);
});

