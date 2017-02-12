import React, { Component } from 'react';

class AppBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
          <div className="container-fluid">
              <div className="navbar-header">
                  <a className="navbar-brand" href="#">
                       Feeder
                  </a>
              </div>
          </div>
      </nav>
    );
  }
}

export default AppBar;
