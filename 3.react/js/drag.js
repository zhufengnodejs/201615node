let Drag = React.createClass({
  getInitialState(){
    return {left:this.props.left,top:this.props.top}
  },
  handleMouseDown(event){
    this.x = event.pageX;
    this.y = event.pageY;
    this.mouseDown = true;
  },
  handleMouseMove(event){
    if(this.mouseDown){
      this.setState({
        left:this.state.left+(event.pageX - this.x),
        top:this.state.top+(event.pageY - this.y)
      });
    }
  },
  handleMouseUp(event){
    this.mouseDown = false;
  },
  render(){
    let style = {
      position:'absolute',
      width: 100 + 'px',
      height: 100 + 'px',
      backgroundColor: 'red',
      left:this.state.left+'px',
      top:this.state.top+'px'
    }
    return (
      <div style={style} onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove} onMouseUp={this.handleMouseUp}></div>
    );
  }

})

ReactDOM.render(<Drag left={100} top={100}/>,document.querySelector('#app'));
