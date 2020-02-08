const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const db = require('./dataBase').getInstance();

db.setModels();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
io.on('connection', (socket) => {
    console.log('We have a new connection!');

    socket.on('chat message', (msg) => {
        console.log('massage:' + JSON.stringify(msg));
        io.emit('chat message', msg)
    })
});

let {usersRouter, authRouter, adminRouter, roomsRouter} = require('./router');

app.use('/user', usersRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/room', roomsRouter);


server.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
