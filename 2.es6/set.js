let obj = {name:'zfpx',age:8};
delete obj.name;
Object.defineProperty(obj,'home',{
    configurable:true,
    enumerable:true,
    writable:true,
    value:'beijing'
})

Object.defineProperty(obj,'home2',{
    configurable:true,
    enumerable:true,
    writable:true,
    value:'2'
})
console.log(obj);
delete obj.home;
console.log(obj);
