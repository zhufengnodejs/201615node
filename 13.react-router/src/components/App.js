import React from 'react';
export default class App extends React.Component{
   render(){
     return (
       <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div>
                <ul className="nav navbar-nav">
                  <li><a href="#/">首页</a></li>
                  <li><a href="#/user">用户管理</a></li>
                  <li><a href="#/profile">个人设置</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="row">
              <div className="col-md-12">
                  {this.props.children}
              </div>
          </div>
       </div>
     )
   }
}
