let express = require('express');
let Message = require('./model').Message;
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
  // Method DELETE is not allowed by Access-Control-Allow-Methods in preflight response.
  res.setHeader('Access-Control-Allow-Methods',"GET,POST,DELETE,OPTIONS");
  next();
});
/**
 * GET /messages 返回所有的留言
 * POST /messages 添加新的留言
 * DELETE /messages/id 删除留言
 */
app.get('/messages', function (req, res) {
  Message.find({}, function (err, messages) {
    //res.send(messages);
    let callback = req.query.cb;
    res.send(`${callback}(${JSON.stringify(messages)})`);
  });
});
//客户端增加一条留言,返回最新所有留言
app.post('/messages',function (req,res) {
  let message = req.body;
  Message.create(message,function (err,message) {
    Message.find({}, function (err, messages) {
      res.send(messages);
    });
  });
});

app.delete('/messages',function (req,res) {
  let query = req.body;
  Message.remove(query,function (err,message) {
    Message.find({}, function (err, messages) {
      res.send(messages);
    });
  });
});

app.listen(3000);
