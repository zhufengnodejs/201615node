let Drag = React.createClass({
  getInitialState(){
    return {
      a: this.props
    }
  },
  drag(e){
    let div = this.refs.div;
    this.x = e.pageX - div.offsetLeft;
    this.y = e.pageY - div.offsetTop;
    document.onmousemove = (e) => {
      let obj = {};
      for (var key in this.props) {
        obj[key] = this.props[key]
      }
      obj.left = e.pageX - this.x;
      obj.top = e.pageY - this.y;
      this.setState({
        a: obj
      });
    };
    document.onmouseup = () => {
      document.onmousemove = null;
    }
  },
  render(){
    return (
      <div ref="div" style={this.state.a} onMouseDown={this.drag}></div>
    )
  }
});
ReactDOM.render(
  <Drag width="100px" height="100px" backgroundColor="green" x={0} y={0}
        position="absolute"/>, document.querySelector('#app')
);
