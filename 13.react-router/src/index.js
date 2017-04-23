import React from 'react';
require('bootstrap/dist/css/bootstrap.css');
import ReactDOM from 'react-dom';
import {App,Home,User,Profile} from './components';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

ReactDOM.render(<Router history = {hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute  component={Home}></IndexRoute>
        <Route  path="user" component={User}>
           <Route path="list" component={User.UserList}/>
           <Route path="add" component={User.UserAdd}/>
           <Route path="detail/:id" component={User.UserDetail}/>
        </Route>
        <Route  path="profile" component={Profile}></Route>
    </Route>
  </Router>,document.querySelector('#container'));
