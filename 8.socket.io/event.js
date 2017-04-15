let EventEmitter = require('events');
let e = new EventEmitter();
//监听open事件，当open事件发生的时候执行回调函数
e.on('open',function(name){
  console.log('打开',name);
});
e.emit('open','门');
