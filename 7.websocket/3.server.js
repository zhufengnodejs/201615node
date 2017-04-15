/**
 * node实现的模块 使用它可以创建一个websocket服务器
 */
let Server = require('ws').Server;
//创建一个服务并监听8080端口
let server = new Server({port:8080});
//当客户端连接到服务器的时候 socket代表跟客户端的连接对象
//会为每个客户端创建一个socket对象
server.on('connection',function (socket) {
    //向客户端发送消息
    socket.send('hello');
    //监听客户端发过来的消息
    socket.on('message',function(data){//data是对方发过来消息
        socket.send('服务器说:'+data);
    });
});

