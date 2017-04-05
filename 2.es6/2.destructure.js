/*
let arr = [1,2,3,null];
let [a,b,c,d=8] = arr;
console.log(a,b,c,d);

let x=5,y=10;

*/

/*
let x=5,y=10;
[x,y]=[y,x];
console.log(x,y);
*/
/**
 * 左边永远是对象的属性名
 * 右边永远是变量名
 * 定义对象的时候是把变量的值赋给对象的属性
 * 解构赋值的时候是把对象的属性赋给变量
 */
var name1 ='1';
var age1 = 9;
var obj = {name:name1,age:age1};
obj = {name:'2',age:10};
// key代表对象的属性 代表当前作域内的变量
var {age:age1,name:name1} = obj;
console.log(name1,age1);



