/**
 * 受控组件 受()控制的组件
 * 非受组件 不受任何控制
 */
let Control = React.createClass({
  getInitialState(){
    return {val: 0};
  },
  componentDidMount(){
   /* setInterval(()=>{
      this.setState({val:this.state.val+1});
    },1000)*/
  },
  handleChange(event){
    this.setState({val:event.target.value});
  },
  render(){
    return <div>
      <input onChange={this.handleChange} type="text" value={this.state.val}/>
    </div>
  }
});
render(<Control/>);
