import React from 'react';
import ReactDOM from 'react-dom';
require('bootstrap/dist/css/bootstrap.css');
import MessageBox from './containers/MessageBox';
let store = require('./local');
ReactDOM.render(<MessageBox store={store}/>,document.querySelector('#app'));
