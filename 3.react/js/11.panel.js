let Panel = React.createClass({
  render(){
      return (
        <div className="panel panel-default">
            <PanelHead/>
            <PanelBody/>
            <PanelFooter/>
        </div>
      )
  }
});
let PanelHead = React.createClass({
  render(){
    return (
      <div className="panel-heading">头</div>
    )
  }
});
let PanelBody = React.createClass({
  render(){
    return (
      <div className="panel-body">体</div>
    )
  }
});
let PanelFooter = React.createClass({
  render(){
    return (
      <div className="panel-footer">尾</div>
    )
  }
});
ReactDOM.render(<Panel/>,document.getElementById('app'));
