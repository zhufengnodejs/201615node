/**
 * 有些我们需要遍历一个数组，对数组中的每一个元素执行一个任务
 * 希望在全部保存文件完成后执行一个输出 ""
 */
let data = [
  {filename:'a.txt',content:'a'},
  {filename:'b.txt',content:'b'},
  {filename:'c.txt',content:'c'}
]
let async = require('async');
let fs = require('fs');
async.forEach(data,function(item,callback){
  fs.writeFile(item.filename,item.content,'utf8',callback)
},function(err){
  console.log('全部保存完毕');
});
/*

let count =0;
data.forEach(function(item){
  fs.writeFile(item.filename,item.content,'utf8',function(err){
      if(++count == data.length){
        console.log('全部保存完毕');
      }
  })
})
*/
