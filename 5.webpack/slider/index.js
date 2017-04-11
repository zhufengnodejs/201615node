// npm install react react-dom
// yarn add react react-dom

import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');
//自定义一个组件  = React.createClass
class Slider extends React.Component{
   render(){
     return (
        <div className="slider-wrapper">
            hello
        </div>
     )
   }
}
ReactDOM.render(<Slider/>,document.querySelector('#app'));
