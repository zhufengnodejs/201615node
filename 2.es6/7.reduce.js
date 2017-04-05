/*
let ary = [1, 2, 3, 5, 9, 4];
// reduce 收敛 处理
//1参数是处理函数 2参数是初始值
/!*let result = ary.reduce(function(curVal,item){
 return curVal+item;
 },0);
 console.log(result);*!/
//返回一个数组中的最大值
let result = ary.reduce(function (curVal, item) {
    console.log(curVal, item);
});
*/

let arr = [200, 4, 100, 6, 86];
let max = arr.reduce(function (cur, item) {
    console.log(cur, item);
    return cur < item ? item : cur;
});

console.log(max);

let obj = {name:'zfpx',age:8};
console.log(Object.keys(obj));

let aArr = [1,2,3];
let bArr = [4,5,6];
//let cArr = aArr.concat(bArr);
let cArr = [...aArr,...bArr];//es6
console.log(cArr);