let Double = React.createClass({
  //返回一个状态对象，有一个属性叫text,值是一个空的字符串
  getInitialState(){
    return {text:''};
  },
  //处理值改变事件
  handleChange(event){
    let val = event.target.value;
    this.setState({
      text:val
    });
  },
  render(){
     return (
       <div>
         <input type="text" value={this.state.text} onChange={this.handleChange}/>
         <p>{this.state.text}</p>
       </div>
     )
  }
});
ReactDOM.render(<Double/>,document.querySelector('#app'));
