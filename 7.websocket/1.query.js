/**
 * 轮番询问
 * 客户端不停的询问服务有无新的数据返回
 */
let express = require('express');
let app = express();
app.get('/',function(req,res){
  //path must be absolute or specify root to res.sendFile
  res.sendFile('./1.query.html',{root:__dirname});
});
app.get('/clock',function (req,res) {
  res.send(new Date().toLocaleString());
});
app.listen(8080);
