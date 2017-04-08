//1. 引入mongoose模块
let mongoose = require('mongoose');
//2. 连接数据库 要指定一个数据库的url地址
// http://www.baidu.com/su
// 协议://域名或IP/数据库名称 数据库的名字任意指定，不需要事先创建
mongoose.connect('mongodb://127.0.0.1/201615node');
//定义集合
//1.定义集合的骨架模型,就是规定此集合中文档的属性名称和属性类型，还有默认值
let UserSchema = new mongoose.Schema({
  username:String,//用户名
  age:Number,//年龄
  level:{type:Number}//级别
});
//2.定义能操作数据库的模型
//1参数是模型的名称，叫User,一般首字母大写
//集合的名称 模型名->小写(user)->变成复数
let UserModel = mongoose.model('User',UserSchema);
//保存 create 可以把一个对象保存到数据库中去
//如果这个任务可以迅速完成一般用同步
//如果这个任务需要很长时间才能做完,一般会异步
// 如果传入的对象比schema里规定的字段少，只要保存传入的字段和默认字段
//如果传入的对象字段比规定的多，多的字段会忽略掉
/*UserModel.create({username:'王五',home:"beijing"},function(err,doc){
  console.log(doc);
});*/
// _id: 58e8559ebc61fd1acc5cef2f
// identity 标识符 数据为了标识每一个文档，给每个文档生成一个唯一的标识，用来区分不同的方案
// versionKey版本号
/**
 * 会遍历整个集合的文档对象，找到符合条件的记录，进行更新
 * 因为更新的时候默认情况下最多只会更新一条
 * multi=true表示匹配符合条件的所有记录
 */
/*UserModel.update({level:1},{age:9},{multi:false},function(err,doc){
  //doc就是更新后的值
  //{ ok: 1, nModified: 1, n: 1 }
  // ok=1表示更新成功
  // nModified=1 实现发生修改操作的条数
  // n=1 匹配的条数
  console.log(doc);
});*/
/**
 * 删除时默认会删除所有的符合条件的记录
 */
UserModel.remove({_id:"58e8559ebc61fd1acc5cef2f"},function(err,result){
  console.log(result.result);
});
