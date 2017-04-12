import React from 'react';
export default  class MessageForm extends React.Component{
  render(){
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="name" className="control-label col-md-1">姓名</label>
          <div className="col-md-11">
            <input id="name" type="text" className="form-control"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="content" className="control-label col-md-1">内容</label>
          <div className="col-md-11">
            <input type="text" id="content" className="form-control"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-offset-1 col-md-11">
            <button className="btn btn-primary">提交</button>
          </div>
        </div>
      </form>
    )
  }
}
