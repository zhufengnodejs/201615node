let Socket = require('ws');
// http://localhost:8080
//当创建客户端实例的时候，就会尝试连接服务器了
let socket = new Socket('ws://127.0.0.1:8080');
socket.on('open',function(){
  console.log('连接成功');
  socket.send('你好');
});
//客户端监听服务器端发过来的消息
socket.on('message',function(msg){
  console.log(msg);
});
