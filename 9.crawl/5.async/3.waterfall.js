/**
 * 在很多任务中，前后的任务是有关系的，
 * 前一个任务的输出是后一个任务的输入
 */
let async = require('async');
let fs = require('fs');
let readA = function (callback) {
  fs.readFile('a.txt', 'utf8', callback)
}

let read = function (data, callback) {//c.txt
  fs.readFile(data, 'utf8', callback)
}
async.waterfall([
  readA,read,read
], function (err, result) {
  console.log(err);
  console.log(result);
});
