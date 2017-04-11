//本身用的是 common.js写法
let path = require('path');
module.exports = {
  entry:'./src/index.js',//入口文件
  output:{//输出配置
    //configuration.output.path: The provided value "" is not an absolute path!
    path:path.resolve('build'),//输出的文件夹路径
    filename:'bundle.js'//保存的文件名
  }
}
