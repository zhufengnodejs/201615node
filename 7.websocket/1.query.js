/**
 * 轮番询问
 * 客户端不停的询问服务有无新的数据返回
 */
let express = require('express');
let app = express();
app.get('/',function(req,res){
  //path must be absolute or specify root to res.sendFile
  res.sendFile('./2.long.html',{root:__dirname});
});
let start = Date.now();
app.get('/clock',function (req,res) {
  res.send(new Date().toLocaleString());
  console.log(Date.now()- start);
  start = Date.now();
});
app.listen(8080);
