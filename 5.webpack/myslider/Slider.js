import React from 'react';
require('./Slider.css');
export default class Slider extends React.Component{
  constructor(props){
    super(props);
    this.state = {index:0};
  }
  turn(n){
    let index = this.state.index;
    index += n;
    if(index == this.props.images.length){
      index = 0;
    }else if(index ==-1){
      index = this.props.images.length-1;
    }
    this.setState({index});
  }
  componentDidMount(){
    this.autoPlay();
  }
  autoPlay(){
    this.$timer = setInterval(()=>{
      this.turn(1);
    },2000);
  }
  render(){
    let {images} = this.props;
    let style = {
      width:images.length*200+'px',
      left: this.state.index*-200+'px'
    }
    return (
      <div className="slider-wrapper" onMouseOver={()=>clearInterval(this.$timer)} onMouseOut={()=>this.autoPlay()}>
        <ul className="sliders" style={style}>
          {
            images.map((image,index)=>(
              <li key={index} className="slider">
                <img src={image.src}/>
              </li>
            ))
          }

        </ul>
        <div className="arrows">
          <span onClick={()=>this.turn(-1)} className="arrow arrow-left">&lt;</span>
          <span onClick={()=>this.turn(1)}className="arrow arrow-right">&gt;</span>
        </div>
        <div className="slider-dots">
          {
            this.props.images.map((image,index)=>(
              <span key={index} onClick={()=>this.turn(index-this.state.index)} className={"slider-dot "+(index == this.state.index?"active":"")}></span>
            ))
          }
        </div>
      </div>
    )
  }
}
