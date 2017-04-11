/**
 * 此文件将会成为我们的打包口文件
 **/

//You may need an appropriate loader to handle this file type.
import name1 from './component';
/*let boot = require('bootstrap');
console.log(boot);*/
require('bootstrap/dist/css/bootstrap.css');
/*let obj1 = {name:'zfpx'};
let obj2 = {age:8};
let obj3 = {...obj1,...obj2};
console.log(obj3);*/

let img = document.createElement('img');
img.src = require('./shengdan.jpg');
img.className = 'img-circle';
document.body.appendChild(img);
