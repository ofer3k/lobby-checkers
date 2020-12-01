var app = require('express')();
const express=require('express');
const { Socket } = require('socket.io');
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

var socketIds=[]
var users=[]
//connect to server
io.on('connection', (socket) => {

    console.log('a user connected');

    function updateUsers(){
        io.emit('users', (users));
        io.emit('usersIds',(socketIds))
        socket.emit('id',socket.id)
    }
    
    //add the user id to array
    socket.on('get user name',(name)=>{
        socketIds.push(socket.id)
        users.push(name)
        updateUsers()
    })
    socket.on('contact',(data)=>{
      io.to(data.a).emit("hey",data);
      // io.to(data.c).emit('hey',data)
    })
    socket.on('answer_yes',(data)=>{
      io.to(data.c).emit('play','your answer got positive response, go and play')
    })
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
 


    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

http.listen(3005, () => {
  console.log('listening on *:3005');
});