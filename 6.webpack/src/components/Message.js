import React from 'react';
import moment from 'moment';// npm install moment
export default class Message extends React.Component {
  render() {
    let {message} = this.props;
    return (
      <li className="list-group-item">
        {message.name}:
        {message.content}
        <button className="btn btn-danger btn-xs" onClick={()=>this.props.delMessage(message._id)}>删除</button>
        <span className="pull-right">{moment(message.createAt).fromNow()}</span>
      </li>
    )
  }
}
