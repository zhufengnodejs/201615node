import React from 'react';
import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';
export  default class MessageBox extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {name: '张三', content: '李四你好', createAt: new Date()},
        {name: '李四', content: '张三你好', createAt: new Date()}
      ]
    }
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="text-center">欢迎留言</h3>
        </div>
        <div className="panel-body">
          <MessageList messages={this.state.messages}/>
        </div>
        <div className="panel-footer">
          <MessageForm/>
        </div>
      </div>
    )
  }
}
