import React, { Component } from 'react';

import './Navigation.css';

class Navigation extends Component{

  render() {
    return (

      <nav className="navbar navbar-dark bg-dark txt-white">
        <span>
          Tasks
          <span className="badge badge-pill badge-light ml-2">{ this.props.ntasks }</span>
        </span>
      </nav>

    );
  }

}


export default Navigation;
