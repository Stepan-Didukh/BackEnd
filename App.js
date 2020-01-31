const express = require('express');
const app = express();
const http = require('http').createServer(app);
const db = require('./dataBase').getInstance();
db.setModels();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let { usersRouter,authRouter,adminRouter } = require('./router');

app.use('/user',usersRouter);
app.use('/auth',authRouter);
app.use('/admin',adminRouter);
http.listen(5000,()=>{
    console.log('Ready . . .');
});

