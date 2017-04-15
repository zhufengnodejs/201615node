// http服务器一般会和websocket配合使用
let express = require('express');
let path = require('path');
//得到app,app其实是一个请求监听函数
let app = express();
app.use(express.static(__dirname));
app.get('/',function (req,res) {
  res.sendFile(path.resolve('index.html'));
});
let server = require('http').createServer(app);
//socket.io 是需要依赖http协议来建立连接的
//io就是是socket.io在服务器端的实例了
let io = require('socket.io')(server);

//监听客户端的连接 当有连接到来的时候执行回调函数
io.on('connection',function(socket){
   socket.on('message',function (msg) {
     console.log(msg);
     socket.send('服务器说:'+msg);
   });
});
server.listen(8080);

// http://localhost:8080
// ws://localhost:8080


