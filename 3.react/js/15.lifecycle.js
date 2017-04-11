/**
 组件的生命周期
 **/
let Counter = React.createClass({
  //获取默认属性
  getDefaultProps(){
    console.log('1. getDefaultProps 获取默认属性');
    return {name: '计数器'};
  },
  //获取初始状态
  getInitialState(){
    console.log('2. getInitialState 获取初始状态');
    return {number: 0};
  },
  componentWillMount(){
    console.log('3. componentWillMount 组件将要挂载');
    //通过jquery ajax获取number属性设置状态
    /**
     * 1. bind(this)
     * 2. 箭头函数
     * 3. context
     * 4. 外层缓存this
     */
    let _this = this;
    $.ajax({
      url: "counter.json",
      dataType: 'json',
      cache: false,
      async:true,
      context:this,//指定回调函数中的this对象
      success:  (data) =>{
        console.log(this);
        _this.setState({
          number: data.number
        });
      }
    })
  },
  handleClick(){
    this.setState({
      number: this.state.number + 1
    });
  },
  render(){
    console.log('4. render 把组件实例挂载到页面中去');
    return (
      <div style={{border:'1px solid red'}}>
        <p>{this.props.name}:{this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
        <SubCounter number={this.state.number}/>
      </div>
    )
  },
  componentDidMount(){
    console.log('5. componentDidMount 组件挂载完毕');
  },
  //组件是否需要更新
  shouldComponentUpdate(newProps, newState){
    console.log('6.shouldComponentUpdate 组件是否要更新');
    /*if (newState.number <= 5) {
      return false;
    } else {
      return true;
    }*/
    return true;
  },
  componentWillUpdate(){
    console.log('7.componentWillUpdate 组件将要更新');
  },
  componentDidUpdate(){
    console.log('8.componentDidUpdate 组件更新完成');
  }
});

let SubCounter = React.createClass({
  //组件收到新的属性
  componentWillReceiveProps(newProps){
    console.log('9.componentWillReceiveProps 子组件收到新的属性');
  },
  shouldComponentUpdate(newProps,newState){
    if(newProps.number <=5){
      return true;
    }else{
      return false;
    }
  },
  render(){
    return (
      <div style={{border:'1px solid blue',margin:'5px'}}>
        <p>{this.props.number}</p>
        <button>+</button>
      </div>
    )
  }
});

render(<Counter/>, app);
