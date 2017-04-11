/**
 * 练习 状态 属性 事件 jquery交互
 */
let Component = React.createClass({
  getInitialState(){
    return {words:['ab','ac']};
  },
  handleChange(){

  },
  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <input onChange={this.handleChange} type="text" className="form-control"/>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            {
              this.state.words.map((word,index)=>(
                <li key={index} className="list-group-item">{word}</li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
});
render(<Component/>);
