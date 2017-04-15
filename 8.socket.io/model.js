let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/201615chat');
exports.Message = mongoose.model('Message',new mongoose.Schema({
  author:String,
  content:String,
  createAt:{type:Date,default:Date.now}
}));

