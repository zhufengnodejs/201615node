// npm install react react-dom
// yarn add react react-dom

import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');
//自定义一个组件  = React.createClass
class Slider extends React.Component {
  constructor(props) {
    super(props);
    //这是在es6定义初始化状态的方法，等同于getInitialState()
    this.state = {index: 0};
  }

  componentDidMount() {
    setInterval(() => {
      let index = this.state.index;
      index++;
      if (index == this.props.images.length) {
        index = 0;
      }
      this.setState({
        index
      });
    }, 3000)
  }

  render() {
    return (
      <div className="slider-wrapper">
        <ul className="slider-container">
          <li className="slider" style={{left:(this.state.index*-100)+'px'}}>
            <img src={this.props.images[this.state.index].src} />
          </li>
          <li className="slider" style={{left:((this.state.index+1)*100)+'px'}}>
            <img src={this.props.images[this.state.index==3?0:this.state.index+1].src} />
          </li>
        </ul>
      </div>
    )
  }
}
let images = [
  {src: require('./images/1.jpg')},
  {src: require('./images/2.jpg')},
  {src: require('./images/3.jpg')},
  {src: require('./images/4.jpg')}
]
ReactDOM.render(<Slider images={images}/>, document.querySelector('#app'));
