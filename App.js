const express = require('express');

const path = require('path');
const app = express();
const http = require('http').createServer(app);

app.use(express.json());
app.use(express.static(path.join(__dirname,'static')));
app.use(express.urlencoded({extended:true}));


app.set('views',path.join(__dirname,'static'));


http.listen(5000,()=>{
    console.log('Ready . . .');
});

