/**
 * 吃饭
 * 买菜->做饭->吃饭
 *  3s   2s    3s
 *  为了避免回调嵌套的恶魔金字塔。 async
 */
let async = require('async');
function series(tasks,cb){

}
series([
  function(callback){
    setTimeout(function(){
      console.log('买菜');
      callback(null,'菜');
    },3000)
  },
  function(callback){
    setTimeout(function(){
      console.log('做饭');
      callback('没天然气了','');
    },2000)
  },
  function(callback){
    setTimeout(function(){
      console.log('吃饭');
      callback(null,'物');
    },3000);
  }
],function (err,result) {
   console.log(err);
   console.log(result);
});


