//expressServerWithRoutes9.23.js

//must change route and directory names to work
const express = require('express'),
      server = express()
     // users = require('./users');

//setting the port.
server.set('port', process.env.PORT || 3000);

server.use(express.static('public'))
//Adding route
server.get('/',(request,response)=>{
 response.sendFile(__dirname + '/newSong.html');
});

server.get('/aggro',(request,response)=>{
 response.sendFile(__dirname + '/agrospace1.mp3');
});

server.get('/users',(request,response)=>{
 response.json(users);
});

//Binding to localhost://3000
server.listen(3000,()=>{
 console.log('Express server started at port 3000');
}); 
