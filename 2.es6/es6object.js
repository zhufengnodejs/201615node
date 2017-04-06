'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var name = 'zfpx';
var obj = {
    name: name, //属性和属性之间用逗号隔开
    getName: function getName() {
        console.log(this.name);
    }
};
console.log(obj.getName()); //undefined zfpx

var target = { a: 1 };

var source1 = { a: 2, b: 4 };
var source2 = { c: 3 };
//把所有源对象属性全部取出赋给目标对象
/*function assign(target){
 for(var i=1; i<arguments.length; i++){
 for(var attr in arguments[i]){
 target[attr]=arguments[i][attr];
 }
 }
 return target
 }*/
/*function assign(target, source1, source2) {
 var ary = [].slice.call(arguments, 1);
 ary.forEach(function (item) {
 for (var key1 in item) {
 target[key1] = item[key1];
 }
 });
 return target;
 }*/
//其余运算符 是一个数组，存着它其它参数
function assign(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
    }

    //sources = [{a:2,b:4},{c:3}]
    sources.forEach(function (source) {
        return Object.keys(source).forEach(function (attr) {
            return target[attr] = source[attr];
        });
    });
    return target;
}
assign(target, source1, source2);
console.log(target); // {a:1, b:2, c:3}


var objA = { name: 'zfpx' };
var objB = { age: 8 };
//let result = Object.assign({},objA);
// es7
var result = _extends({}, objA, objB);

