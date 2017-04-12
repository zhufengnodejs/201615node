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

  },
  //删除一条留言
  del(id, callback){

  }

}
