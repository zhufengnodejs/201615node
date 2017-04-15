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
   socket.send({author:'系统',content:'请输入呢称',createAt:new Date()});
   let username;
   socket.on('message',function (msg) {
      if(username){//不是第一次，
        //把此消息发送给所有的客户端
        io.emit('message',{author:username,content:msg,createAt:new Date()});
      }else{
        //如果是第一次发言，那么会把此次的消息当成用户名
        username = msg;
        io.emit('message',{author:'系统',content:`欢迎${username}光临聊天室`,createAt:new Date()});
      }
   });
});
server.listen(8080);

// http://localhost:8080
// ws://localhost:8080

/**
 * 1. 实现匿名聊天
 *    1.给按钮绑定点击事件，或给表单绑定提交事件。
 *    2.当事件触发的时候，得到输入的内容并且发给服务器
 *    3.服务器进行全局广播，通知所有连接到它的客户端
 *    4.所有客户端收到广播后，会把此条消息添加到ul列表里
 * 2. 实现具名聊天
 *    1.当客户端初次连接的时候，先提示他输入呢称
 *    2. 当客户端第一次输入信息过来，会把此次的信息当成呢称。
 *    3. 以后客户端再发信息过来，就会显示是此呢称发的信息
 *
 * 3. 实现私聊
 * 4. 聊天持久化
 * 5. 分房间聊天
 */
