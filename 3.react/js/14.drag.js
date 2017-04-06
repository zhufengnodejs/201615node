let Drag = React.createClass({
  //核心还是要控制 left 和 top
  getInitialState(){
    return this.props;
  },
  handleMouseDown(event){
    this.x = event.pageX - event.target.offsetLeft;
    this.y = event.pageY - event.target.offsetTop;
    this.dragging = true;//正在拖中
  },
  handleMouseMove(event){
    if(this.dragging){
      this.setState({
        left:event.pageX - this.x,
        top:event.pageY - this.y
      })
    }
  },
  handleMouseUp(){
    this.dragging = false;//拖结束
  },
  render(){
    return (
      <div style={this.state} onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove} onMouseUp={this.handleMouseUp}></div>
    )
  }
});
let props = {
  position:'absolute',
  width:100,
  height:100,
  backgroundColor:'green',
  top:0,
  left:0
}
ReactDOM.render(<Drag {...props} />, document.querySelector('#app')
);
