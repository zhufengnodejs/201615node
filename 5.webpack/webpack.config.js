//本身用的是 common.js写法
let path = require('path');
module.exports = {
  entry:'./src/index.js',//入口文件
  output:{//输出配置
    //configuration.output.path: The provided value "" is not an absolute path!
    path:path.resolve('build'),//输出的文件夹路径
    filename:'bundle.js'//保存的文件名
  },
  //配置模块加载器,当你通过require或import加载一个模块的时候，会找对应加载器进行加载转换
  module:{
    loaders:[//加载器，不同类型的文件对应不同的加载器。所以是一个数组。
      {
        test:/\.js$/,//指定哪种文件后缀的文件用此加载器加载
        //用来把浏览器不认识的es6 es7 react代码转成浏览器能认识的es5代码
        loader:'babel-loader'
      }
    ]
  }
}
