import React from 'react';
import {hashHistory} from 'react-router';
/**
   1. 获取文件框的值 2. 封装成一个对象并添加ID 3. 把此对象保存到localStoage里
   4. 跳回列表页
**/
export default class UserAdd extends React.Component{
   handleSubmit(){
     let username = this.username.value;
     let user = {username};
     let users = localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];//获取老用户数组
     user.id = users.length>0?users[users.length-1].id+1:1;
     users.push(user);
     localStorage.setItem('users',JSON.stringify(users));
     hashHistory.push('/user/list');//跳转到新的路径里去
   }
   render(){
     return (
       <form onSubmit={this.handleSubmit.bind(this)}>
         <div className="form-group">
              <label className="control-label">用户名</label>
              <input className="form-control" ref={ref=>this.username=ref}/>  
         </div>
         <div className="form-group">
              <button className="btn btn-primary" type="submit">提交</button>
         </div>
       </form>
     )
   }
}
