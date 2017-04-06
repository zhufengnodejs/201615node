/**
 * 定义组件
 * 组件是一个类，需要实现一个render方法，render方法需要返回一个React虚拟DOM元素
 * 1.组件首字母要大写
 * 2.render方法要返回并且只能返回一个顶级虚拟DOM元素,也就是说只能有一个根节点
 *
 * 当react-dom渲染的时候，先得到标签，判断它是大写开头还是小写开头
 * 1. 如果是大写开头的话，那就是一个组件。先找到组件类的定义，然后实例化这个类，然后调用此实例的render方法得到一个虚拟DOM元素。然后把此虚拟DOM元素插入到容器内部
 * 2.如果是小写字母开头，那就是一个虚拟DOM元素，然后把此虚拟DOM元素插入到容器内部
 */
let Message = React.createClass({
   render(){
     return <div>Hello</div>
   }
});

ReactDOM.render(<div>Hello</div>,document.querySelector('#app'));

