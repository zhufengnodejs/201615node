/**
 * 把NODE作为客户端去请求服务器
 **/
let request = require('request');
//可以帮我们把GBK编码的buffer转成utf8的字符串
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
request({uri:'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1',encoding:null},function(err,response,body){// body 响应体 字符串
  body = iconv.decode(body,'gbk');
  console.log(body);
  //输出一个数组，数组中的每个元素都是一个对象{title:'',url:''}
  let $ = cheerio.load(body);
  let movies = [];
  $('.keyword a.list-title').each(function(){
      let $this = $(this);
      let movie = {
        title:$this.text(),
        url:$this.attr('href')
      }
      movies.push(movie);
  });
  console.log(movies)
})



/*
request({uri:'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1',encoding:null},function(err,response,body){// body 响应体 字符串
  let result = body.toString('utf8');
  if(result.match(/charset *= *utf/)){

  }else{
    result = iconv.decode(body,'gbk');
  }
  console.log(result);
})*/
