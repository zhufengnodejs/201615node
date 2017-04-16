/**
 * 把NODE作为客户端去请求服务器
 **/
let request = require('request');
//可以帮我们把GBK编码的buffer转成utf8的字符串
let iconv = require('iconv-lite');
request({uri:'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1',encoding:null},function(err,response,body){// body 响应体 字符串
  console.log(body);
  body = iconv.decode(body,'gbk');
  console.log(body);
})
