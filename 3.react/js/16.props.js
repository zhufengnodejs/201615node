let Person = React.createClass({
  componentDidMount(){
    setInterval(()=>{
      console.log(this.props);
    },1000)
  },
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  },
  render(){
    return <div>
       姓名:{this.props.obj.name}
    </div>
  }
});
let obj = {name:'zfpx'};
setTimeout(function(){
  obj = {name:'2'};
},3000);
let p = <Person obj={obj}/>;
render(p,app);
