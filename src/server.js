const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
app.use(express.static(path.join(__dirname, "public")))

const port = 3000;



app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('New WB connected');

    socket.emit('message', "welcome to chatcord");

    // socket.on('message', (data)=> {
    //     console.log("messaging user",data)
    //     io.emit('message', data);
    // })
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});