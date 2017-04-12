const MESSAGES = 'MESSAGES';
module.exports = {
  //列出所有的留言
  get(callback){
    //先获取缓存中的字符串
    let messageStr = localStorage.getItem(MESSAGES);
    //如果有字符串则转成对象，如果没有返回空数组
    let messages = messageStr?JSON.parse(messageStr):[];
    //把转换后的数组传给了callback
    callback(messages);
  },
  //增加一条新的留言
  add(message){

  },
  //删除一条留言
  del(id){

  }

}
