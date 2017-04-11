// npm install react react-dom
// yarn add react react-dom

import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');
//自定义一个组件  = React.createClass
class Slider extends React.Component{
  constructor(props){
    super(props);
    //这是在es6定义初始化状态的方法，等同于getInitialState()
    this.state = {index:0};
  }
   render(){
     return (
        <div className="slider-wrapper">
          {
            this.props.images.map((image,index)=>{
              return <div className="slider"><img src={image.src} /></div>
            })
          }
        </div>
     )
   }
}
let images = [
  {src:require('./images/1.jpg')},
  {src:require('./images/2.jpg')},
  {src:require('./images/3.jpg')},
  {src:require('./images/4.jpg')}
]
ReactDOM.render(<Slider images={images}/>,document.querySelector('#app'));
