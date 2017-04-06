/**
 * 状态只能是内部初始化，只能有内部改变
 *
 */
let Counter = React.createClass({
  //获得初始的状态对象
  getInitialState(){
    return {number: 0,name:'zfpx'};
  },
  handleClick(offset){
    //当修改完状态之后会自动触发重新render
    //setState用来修改状态的，
   /* this.setState({
      number:this.state.number+offset
    });*/
    this.setState({
      name:'zfpx2',
      number:this.state.number+offset
    })
  },
  render(){
    /**
     * 1.匿名箭头函数
     * 2.bind绑定this和参数
     */
    console.log(this.state.number);
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={()=>this.handleClick(1)}>+</button>
        <button onClick={()=>this.handleClick(-1)}>-</button>
      </div>
    )
  }
});
ReactDOM.render(<Counter/>, document.querySelector('#app'));
