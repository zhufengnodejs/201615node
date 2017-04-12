import React from 'react';
import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';
export  default class MessageBox extends React.Component {
  constructor() {
    super();
    this.state = {messages: []}//留言列表
  }
  componentWillMount(){//组件将要加载
    this.props.store.get((messages)=>{
      this.setState({messages});
    });
  }
  addMessage(message){
    this.props.store.add(message,(messages)=>{
      this.setState({messages});
    });
  }
  delMessage(id){
    this.props.store.del(id,(messages)=>this.setState({messages}));
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="text-center">欢迎留言</h3>
        </div>
        <div className="panel-body">
          <MessageList delMessage={this.delMessage.bind(this)} messages={this.state.messages}/>
        </div>
        <div className="panel-footer">
          <MessageForm addMessage={this.addMessage.bind(this)}/>
        </div>
      </div>
    )
  }
}
