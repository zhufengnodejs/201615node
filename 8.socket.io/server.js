// http服务器一般会和websocket配合使用
let express = require('express');
let path = require('path');
let Message = require('./model').Message;
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
let sockets = {};
//监听客户端的连接 当有连接到来的时候执行回调函数
io.on('connection',function(socket){

   let username;
   socket.on('message',function (msg) {
      if(username){//不是第一次，
        let regex = /@([^ ]+) (.+)/;
        // exec match
        let result = msg.match(regex);
        //let result = regex.exec(msg);
        if(result){//匹配上表示是私聊
          let toUserName = result[1];//对方的用户名
          let content = result[2];//内容
          //给对方说话 作者就是自己
          sockets[toUserName].send({author:username,content,createAt:new Date().toLocaleString()});
        }else{//否则就是公聊
              //把此消息发送给所有的客户端
          Message.create({author:username,content:msg},function(err,message){
            io.emit('message',message);
          });
        }
      }else{
        //如果是第一次发言，那么会把此次的消息当成用户名
        username = msg;
        //把用户名跟对应的socket建立关联
        sockets[username] = socket;
        io.emit('message',{author:'系统',content:`欢迎${username}光临聊天室`,createAt:new Date().toLocaleString()});
      }

   });
   socket.on('getAllMessages',function(){
     Message.find().sort({createAt:-1}).limit(20).exec(function(err,messages){
       // 30 29 ...  11 -> 11 ... 30
        messages.reverse();
        socket.emit('allMessages',messages);
       socket.send({author:'系统',content:'请输入呢称',createAt:new Date().toLocaleString()});
     })
   });
   socket.on('delete',function(_id){
    Message.remove({_id},function(){
      socket.emit('deleted',_id);
    })
   });
  socket.on('revoke',function(_id){
    Message.findById(_id,function(err,message){
      if(Date.now() - message.createAt.getTime()<2*60*1000){
        Message.remove({_id},function(){
          io.emit('revoked',_id);
        })
      }else{
          socket.send({
            author:'系统',
            content:'已经超过2分钟，无法撤销!',
            createAt:new Date().toLocaleString()
          });
      }
    })

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
 * 3. 实现私聊
 *    1. 可以点击用户名，点击的时候把那个人的用户名显示在输入框里。 @人名 xxxxx
 *    2. 把此消息发给服务器
 *    3. 服务器从消息取出你想私聊的用户名和内容
 *    4. 向对方单发消息
 * 4. 聊天持久化
 *    把聊天信息保存在数据库中
 * 5. 实现删除和撤回的功能
 */
