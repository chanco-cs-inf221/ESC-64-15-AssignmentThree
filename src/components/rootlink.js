import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import TopNavBar from './topnavbar';
import SideBar from './sidebar';

class RootLink extends Component {
  render() {
    return (
      <div className="App">
          <div className="row">
              <div className="col-sm-12">
                  <TopNavBar/>
              </div>

              <div className="col-sm-12">
                  <SideBar/>
              </div>

              <div className="col-sm-7  margin-window">
                  {this.props.children}
              </div>
          </div>
      
       
      </div>
    );
  }
}

export default RootLink;