let user = {name: 'zfpx', age: 8};
/*<div>
 <span style="color:red">zfpx</span>今年<span style="color:green">8</span> </div>*/
//前端拼接字符串特别有用
let desc = `
            <div>
               <span style="color:red">${user.name}</span>
               今年
               <span style="color:green">${user.age}</span>岁
            </div>
`;
console.log(desc);