let Drag = React.createClass({
  render(){

  }
});
let attrs = {
  width:100
}
ReactDOM.render(<Drag {...attrs} width="100px" height="100px" backgroundColor="green" x={0} y={0} />,document.querySelector('#app'));
