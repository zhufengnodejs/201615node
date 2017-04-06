// 可以给每个虚拟DOM配置一个 ref属性，值就是此真实DOM的引用名了
// refs是固定的是它是一个对象，属性名就是引用名，值是真实DOM元素
//
let Focus = React.createClass({
  handleClick(event){
    //document.getElementById('xxTxt').focus();
    this.refs.myTxt.focus();
  },
  render(){
    return (
      <div>
        <input id="xxTxt" ref="myTxt" type="text"/>
        <button onClick={this.handleClick}>获得焦点</button>
      </div>
    )
  }
});
ReactDOM.render(<Focus/>,document.querySelector('#app'));
