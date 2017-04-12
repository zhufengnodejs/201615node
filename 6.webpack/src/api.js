/**
 * jsonp
 * cros
 */
let $ = require('jquery');
let api = 'http://localhost:3000/messages';
module.exports = {
  //列出所有的留言
  get(callback){
    $.get(api).done(messages=>callback(messages));
  },
  //增加一条新的留言
  add(message, callback){
    $.post(api,message).done(messages=>callback(messages));
  },
  //删除一条留言
  //在客户端发出DELETE请求的时候，会先发OPTIONS请求，以询问服务器是否支持DELETE请求，如果服务器支持，则继续发送DELETE请求，如果不支持，就拉倒了
  del(_id, callback){
    $.ajax({
      url:api,
      type:'DELETE',//OPTIONS
      data:{_id}
    }).done((messages)=>callback(messages));
  }

}
