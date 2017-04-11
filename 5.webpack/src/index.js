/**
 * 此文件将会成为我们的打包口文件
 **/

//You may need an appropriate loader to handle this file type.
import name1 from './component';
alert(name1);
let obj1 = {name:'zfpx'};
let obj2 = {age:8};
let obj3 = {...obj1,...obj2};
console.log(obj3);
