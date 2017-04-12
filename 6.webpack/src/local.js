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
  add(message,callback){
    //先调用自己的get方法获取到老数组
    this.get((messages)=>{
      //添加ID属性，就是最大的ID+1
      message.id = messages.length>0?messages[messages.length-1].id+1:1;
      message.createAt = new Date();//增加创建时间属性
      messages.push(message);//把新的消息添加到数组中
      localStorage.setItem(MESSAGES,JSON.stringify(messages));//把新数保存到localStorage
      callback(messages);
    });
  },
  //删除一条留言
  del(id){

  }

}
