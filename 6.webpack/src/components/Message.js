import React from 'react';
export default class Message extends React.Component {
  render() {
    let {message} = this.props;
    return (
      //()=>this.props.delMessage(message.id)
      <li className="list-group-item">{message.name}:{message.content} <button className="btn btn-danger btn-xs" onClick={this.props.delMessage.bind(this,message.id)}>删除</button> <span
        className="pull-right">{message.createAt.toLocaleString()}</span></li>
    )
  }
}
