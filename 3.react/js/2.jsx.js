let names = ['二毛','二毛','二毛'];
/**
 * 1. 把这一个字符串数组转成li数组放在ul内部
 * 2. 字体颜色为红色
 * 3. 背景色为蓝色
 * 遇到<符号表示是html代码
 * 遇到{表示里面放的是JS表达式 是由变量和操作符组成 a+b 1+b c+d,必须返回一个值
 */
//Each child in an array should have a unique "key" prop
let name = 'zfpx';
let lis =  names.map((name,index)=><li key={index} className={index ==0?"active":""}>{name}</li>);
console.log(lis);
ReactDOM.render(<ul>
  {
    lis
  }
</ul>,document.querySelector('#app'));
