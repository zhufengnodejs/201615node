/**
 * 在很多任务中，前后的任务是有关系的，
 * 前一个任务的输出是后一个任务的输入
 */
let async = require('async');
let fs = require('fs');
async.waterfall([
 function(callback){
    fs.readFile('a.txt','utf8',function(err,data){
        callback(err,data);//b.txt
    })
 },
  function(data,callback){//b.txt
    console.log('@'+data+'@');
    fs.readFile(data,'utf8',function(err,data){
      callback(err,data);//c.txt
    })
  },
  function(data,callback){//c.txt
    fs.readFile(data,'utf8',function(err,data){
      callback(err,data);//3
    })
  }
],function(err,result){
  console.log(err);
  console.log(result);
});
