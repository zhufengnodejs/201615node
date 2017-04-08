let mongoose = require('mongoose');
//用es6自带的promise替换掉mongoose自带的已经废弃掉的promise
mongoose.Promise = Promise;
//localhost 域名 ip 127.0.0.1
mongoose.connect('mongodb://127.0.0.1/201615node');
//用来操作数据库的模型
let User = mongoose.model('User',new mongoose.Schema({
  name:String,
  age:Number
}));

/*
let users = [];
for(let i=1;i<=10;i++){
  users.push({name:`zfpx${i}`,age:i});
}
User.create(users,function(err,docs){
  console.log(docs);
});
*/
/**
 * 1.按ID查询对象
 */
/*User.findById('58e864fc5c4ae30f989e8369',function(err,doc){
  console.log(doc);
});*/
/**
 * greater than 大于5
 * less than
 * less than equal
 * 不管返回的记录数是多少，永远返回数组
 */
/*User.find({age:15},function(err,docs){
  console.log(docs);
});*/

/*
User.findOne({age:{$gt:15}},function(err,doc){
  console.log(doc);
});
*/
/**
 * 指定返回的字段
 * Can't canonicalize query: BadValue Projection cannot have a mix of inclusion and exclusion.
 * 1 表示只包含 include
 * 0 表示只排除 exclude
 * home
 */
/*User.findOne({age:5},{name:0,age:1},function(err,doc){
  console.log(err);
})*/
// 分页查询
let pageNum = 3;  //查询第3页
let pageSize = 3; //查询每页的条数
//sort是排序，key是排序的字段 值是升序(1)还是降序(-1)
// 10 9 8 7 6 5 4 3 2 1
// 不管参数如何传，执行查询时的顺序一定是这样的
//1. 先过滤数据 2. 再排序 3. 跳过指定的条数 4.限定返回的条数
// 3 4 5 6 7 8 9 10 / 10 9 8 7 6 5 4 3

// 9 10
let query = User.find({age:{$gt:2}}).skip((pageNum-1)*pageSize).limit(pageSize);
query.exec(function(err,docs){
  console.log(docs);
})
query.sort({age:-1});

