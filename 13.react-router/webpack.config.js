let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:path.resolve('src/index.js'),
  output:{
    path:path.resolve('build'),
    filename:'bundle.js'
  },
  module:{
    loaders:[
      {test:/\.jsx?$/,loader:'babel-loader',exclude:/node_modules/},
      {test:/\.css$/,loader:'style-loader!css-loader'},
      {test:/\.(svg|ttf|woff|woff2|eot)$/,loader:'url-loader'}
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({template:'./src/index.html'})
  ]
}
