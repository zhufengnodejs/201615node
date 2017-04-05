/*let getObject = id => {
    console.log(1);
    return {name: "zfpx"}
};
console.log(getObject());*/
// node 浏览器
/*function print(){
    setTimeout(()=>{
        //箭头函数没有自己的this,而是会复用外层的this
        console.log(this.name);
    },1000);
}
print.call({name:'zf'});//*/

var format = function (prefix) {
    return function (str) {
        return str.slice(prefix.length)
    }
};
console.log(format('data-')('data-id'));