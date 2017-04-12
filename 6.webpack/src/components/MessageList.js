import React from 'react';
export default class MessageList extends React.Component{
  render(){
    return (
      <ul className="list-group">
        {
          this.props.messages.map((message,index)=>(
            <li key={index} className="list-group-item">{message.name}:{message.content} <span className="pull-right">{message.createAt.toLocaleString()}</span></li>
          ))
        }
      </ul>
    )
  }
}
