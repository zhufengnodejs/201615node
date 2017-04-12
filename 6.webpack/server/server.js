let express = require('express');
let Message = require('./model').Message;
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended:true}));
/**
 * GET /messages 返回所有的留言
 * POST /messages 添加新的留言
 * DELETE /messages/id 删除留言
 */
app.get('/messages', function (req, res) {
  Message.find({}, function (err, messages) {
    res.send(messages);
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

app.listen(3000);
