/**
 * 做饭
 *  1. 买米饭 3s
 *  2. 买鸡蛋 2s
 *  3. 鸡蛋炒饭
 */

let async = require('async');
console.time('cost');
async.parallel([
  function(callback){
    setTimeout(function(){
      console.log('买米饭');
      callback(null,'米饭');
    },3000)
  },
  function(callback){
    setTimeout(function(){
      console.log('买鸡蛋');
      callback(null,'鸡蛋');
    },2000)
  }
],function(err,result){
  console.timeEnd('cost');
  //规律是什么？result结果的顺序和任务的执行开始顺序完全一致，跟完成的时间先后无关
  console.log(result);// [0,1]
});
