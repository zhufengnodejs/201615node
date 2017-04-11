//本身用的是 common.js写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:'./myslider/index.js',//入口文件
  output:{//输出配置
    //configuration.output.path: The provided value "" is not an absolute path!
    path:path.resolve('build'),//输出的文件夹路径
    filename:'bundle.[hash].js'//保存的文件名
  },
  devServer:{
    port:8080,//HTTP服务器的端口号
    contentBase:'./build'//内容的根目录
  },
  //配置模块加载器,当你通过require或import加载一个模块的时候，会找对应加载器进行加载转换
  module:{
    loaders:[//加载器，不同类型的文件对应不同的加载器。所以是一个数组。
      {
        test:/\.js$/,//指定哪种文件后缀的文件用此加载器加载
        //用来把浏览器不认识的es6 es7 react代码转成浏览器能认识的es5代码
        loader:'babel-loader',
        //扫描分享js代码的时候排除掉node_modules文件夹
        exclude:/node_modules/
      },
      {
        test:/\.css$/,//如果模块是以.css结尾的话
        //css用来读取css文件，style用来将此模块插入到html中的head中
        loader:'style-loader!css-loader'
      },
      {
        //所有的资源文件，比如字体、图片、图标等文件要使用url-loader来加载
        test:/\.(svg|ttf|woff|woff2|eot)$/,
        loader:'url-loader'
      },
      {
        //所有的资源文件，比如字体、图片、图标等文件要使用url-loader来加载
        test:/\.(jpg|png|gif)$/,
        loader:'url-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./myslider/index.html'
    })
  ]
}
