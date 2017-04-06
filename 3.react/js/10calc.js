let Calc=React.createClass({
  getInitialState(){
    return {
      before:'',
      after:''
    }
  },
  changeA(event){
    this.setState({before:event.target.value});
  },
  changeB(event){
    this.setState({after:event.target.value});
  },
  render(){
    return (
      <div>
        <input type="text" value={this.state.before} onChange={this.changeA}/>
        +
        <input type="text" value={this.state.after} onChange={this.changeB}/>
        =
        <input type="text" value={this.state.before/1+this.state.after/1}/>
      </div>
    )
  }
});
ReactDOM.render(<Calc/>,document.querySelector('#app'))



/*

let Calc=React.createClass({
  handleClick(){
    let before = this.refs.before.value;
    let after = this.refs.after.value;
    this.refs.sum.value = before/1+after/1;
  },
  render(){
    return (
      <div>
        <input type="text" ref="before"/>
        +
        <input type="text" ref="after"/>
        <button onClick={this.handleClick}>=</button>
        <input type="text" ref="sum"/>
      </div>
    )
  }
});
ReactDOM.render(<Calc/>,document.querySelector('#app'))
*/

