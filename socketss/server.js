const { Socket } = require("dgram");
const express = require("express");
const http = require("http");
const { server } = require("socket.io")

const app = express();
const server = http.createServer(app);
const io = new server(server);

io.on("connection"), (Socket) => {
    console.log('um cliente se conectou');
    Socket.on{
        'join_room', (room) => {
            socket.join(room);
            console.log(`cliente entrou no canal: ${room}`)
        }
    }
},
    socket.on{
        'send_message', ({ room, menssge }) => {
            io.to(room).emait('receive_message', { room, msg: menssage })
        }
};
socket.on{
    'disconnect', () => {
        console.log('um cliente se deconectou')
    }
};
server.listen{
    3000, () => {
        console.log('servidor rodando na porta 3000');
    }
};