import React from 'react';
require('bootstrap/dist/css/bootstrap.css');
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Home from './components/Home.js';
import Profile from './components/Profile.js';
import User from './components/User.js';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

ReactDOM.render(<Router history = {hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute  component={Home}></IndexRoute>
        <Route  path="user" component={User}></Route>
        <Route  path="profile" component={Profile}></Route>
    </Route>
  </Router>,document.querySelector('#container'));
