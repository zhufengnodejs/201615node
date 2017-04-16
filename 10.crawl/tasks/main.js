/**
 * 主入口模块
 */
let read = require('./read');
let write = require('./write');
let async = require('async');
let url = 'http://top.baidu.com/buzz?b=26';
async.waterfall([
  function (callback) {
    read(url,callback);// err movies
  },
  function (data,callback) {
    write(data,callback);
  }
],function (err,result) {
  console.log('任务全部执行完毕!');
});
