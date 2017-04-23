import React from 'react';
//1. 得到ID 2 根据ID查询用户对象 3. 把对象显示在页面上
export default class UserDetail extends React.Component{
	constructor(props){
		super(props);
		this.state = {user:{}};
	}
	componentWillMount(){
       let id = this.props.params.id;

	}
   render(){
     return (
         <table className="table">
              <thead>
              <tr><td>属性</td><td>值</td></tr>
              </thead>
              <tbody>
              <tr><td>ID</td><td>{this.state.user.id}</td></tr>
              <tr><td>用户名</td><td>{this.state.user.username}</td></tr>
              </tbody>
         </table>
     )
   }
}
