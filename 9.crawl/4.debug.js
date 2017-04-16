//是一个函数，也是一个工厂函数
let debug = require('debug');
//调用此工厂方法可以返回一个日志记录器的实例
let loggerA = debug('logger:A');
// loggerA = console.log
// 比较此日志记录器的名字和环境变量中DEBUG的值
/**
 * window
 *  设置变量环境的值  set DEBUG=logger:A
 *  读取环境的值      echo %DEBUG%
 * mac
 *  设置变量环境的值  export DEBUG=logger:A
 *  读取环境的值      echo $DEBUG
 */
loggerA('a');

let loggerB = debug('logger:B');
loggerB('b');
