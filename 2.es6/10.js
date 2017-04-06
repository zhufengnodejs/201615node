/*
/!*
let i = 0;
console.log(module.exports === exports);
console.log(this === exports);*!/

let obj = {name:'zfpx'};
// 可枚举的 可修改的 可配置的
// enumerable writable configurable

*/
let obj = {age:8};
Object.defineProperty(obj, 'name', {
    value:'zfpx',
    writable:true,
    enumerable:true,
    configuration:true
});

delete obj.name;
console.log(obj);
/*for(var attr in obj){
    console.log(attr);
}*/
