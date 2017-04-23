import React from 'react';
import {Link} from 'react-router';
export default class UserList extends React.Component{
  constructor(){
    super();
    this.state = {users:[]};
  }
  componentWillMount(){
    let users = localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
    this.setState({users});
  }
   render(){
     return (
       <div>
         <ul className="list-group">
            {
              this.state.users.map((user,index)=>(
                <li key={index} className="list-group-item">
                  <Link to={"/user/detail/"+user.id}>{user.id}:{user.username}</Link>
                </li>
              ))
            }
         </ul>
       </div>
     )
   }
}
