let Messages = React.createClass({
  render(){
       console.log(this.props.children);
       // React.Children.map是一个工具方法，可以帮我们自动处理单个对象和多个对象的情况
      return (
        <ul>
          {
            React.Children.map(this.props.children,function(item,index){
              return <li key={index}>{item}</li>
          })
          }
        </ul>
      )
  }
})

ReactDOM.render(
  <Messages name="zfpx">
    <span>1</span>
    <span>1</span>
    <span>1</span>
  </Messages>,document.querySelector('#app')
);
/**
 * <ul>
 *     <li><span>1</span></li>
 *     <li><span>2</span></li>
 *     <li><span>3</span></li>
 * </ul>
 */



