// {name:'zfpx'}
/**
 * 属性一般由父组件传入子组件，在组件内部可以通过this.props读取
 * 属性一般用来存着那些不能改变的属性
 * 默认属性对象 {name:'1'}
 * 传进来的属性对象 {age:2,name:'2'}
 * this.props = {age:2,name:'2'};
 */
let Person = React.createClass({
  //获得默认属性对象
  getDefaultProps(){
      return {name:'无名'};
  },
  //规定了外界使用此组件的时候必须入的属性名称和类型
  propTypes:{
    name:React.PropTypes.string.isRequired,
    age:React.PropTypes.object.isRequired,
    mobile: function(props, propName, componentName) {
      if (!/1[359]\d{9}/.test(props[propName])) {
        return new Error('手机号不合法!');
      }
    }
  },
  render(){
    return (
        <div>
          <p>姓名:{this.props.name}</p>
          <p>年龄:{this.props.age}</p>
        </div>
      )
  }
});
ReactDOM.render(<Person name="zf" mobile="111"/>,document.querySelector('#app'));
