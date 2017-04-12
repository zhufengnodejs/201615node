let path = require('path');
//这是一个根据html模板，自动插入打包后的文件并保存到指定目录，指定文件名的插件
let HtmlWebpackPlugin = require('html-webpack-plugin');
//导出的配置对象
module.exports = {
  //打包的入口文件
  entry:'./src/index.js',
  output:{//配置输出的文件夹和文件名
     path:path.resolve('build'),//保存的文件夹
     filename:'bundle.js'//保存的文件名
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ]
}
