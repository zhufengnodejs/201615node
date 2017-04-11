/**
 * 练习 状态 属性 事件 jquery交互
 * 1.获取input框的值
 */
let Component = React.createClass({
  getInitialState(){
    return {words:['ab','ac']};
  },
  handleChange(event){
    let wd = event.target.value;//获取关键字
    //https://www.baidu.com/su?cb=jQuery_1493&wd=a&_=1491882359014
    $.ajax({
      url:'http://www.baidu.com/su',
      type:'GET',
      dataType:'jsonp',//指定返回的数据类型
      data:{wd},//如果是get系请求，会把此对象序列化成字符串并放在url后面，如果是post系，会把请此对象变成查询字符中放在请求体里
      jsonp:'cb'//用于服务器端通过此参数名获取返回的方法名
    }).then((result) => {
      // success then done 都是用于指定成功的回调函数
      this.setState({
        index:-1,
        words:result.s
      });
    })

  },
  handleKeyDown(event){
    let code = event.keyCode;
    if(code == 38 || code == 40){
      let index = this.state.index;
      if(code == 38){//上箭头
        index--;
        if(index<0)
          index = this.state.words.length-1;
      }else if(code == 40){//下箭头
        index++;
        if(index==this.state.words.length)
          index = 0;
      }
      this.setState({index});
    }
  },
  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <input onKeyDown={this.handleKeyDown} onChange={this.handleChange} type="text" className="form-control"/>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            {
              this.state.words.map((word,index)=>(
                <li key={index} className={"list-group-item "+(this.state.index == index?"active":"") }>{word}</li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
});
render(<Component/>);
