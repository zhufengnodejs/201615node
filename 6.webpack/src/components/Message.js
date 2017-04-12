import React from 'react';
export default class Message extends React.Component {
  render() {
    let {message} = this.props;
    return (
      <li className="list-group-item">{message.name}:{message.content} <span
        className="pull-right">{message.createAt.toLocaleString()}</span></li>
    )
  }
}
