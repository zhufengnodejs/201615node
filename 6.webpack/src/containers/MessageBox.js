import React from 'react';
import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';
export  default class MessageBox extends React.Component{
  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="text-center">欢迎留言</h3>
        </div>
        <div className="panel-body">
          <MessageList/>
        </div>
        <div className="panel-footer">
          <MessageForm/>
        </div>
      </div>
    )
  }
}
