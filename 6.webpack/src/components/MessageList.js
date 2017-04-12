import React from 'react';
export default class MessageList extends React.Component{
  render(){
    return (
      <ul className="list-group">
        <li className="list-group-item">张三:今天天气真好!</li>
        <li className="list-group-item">李四:是的,你说的对</li>
      </ul>
    )
  }
}
