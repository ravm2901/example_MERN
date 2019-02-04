import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Navigation.css';

class Navigation extends Component{


  constructor(props){
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenus = this.closeMenus.bind(this);
    this.closeMenusOnResize = this.closeMenusOnResize.bind(this);
  }


  componentDidMount(){


    // Add click handling to dropdowns
    for (var i = 0; i < document.getElementsByClassName('dropdown').length; i++) {

        document.getElementsByClassName('dropdown')[i].addEventListener('click', function(e) {

            if (document.body.clientWidth < 768) {
                var open = e.classList.contains('open');
                this.closeMenus();
                if (!open) {
                    e.getElementsByClassName('dropdown-toggle')[0].classList.toggle('dropdown-open');
                    e.classList.toggle('open');
                }
            }
        });
    }

    // Event listeners
    window.addEventListener('resize', this.closeMenusOnResize, false);
    document.getElementsByClassName('navbar-toggle')[0].addEventListener('click', this.toggleMenu, false);


  }



  componentWillUnmount(){

    window.removeEventListener('resize', this.closeMenusOnResize);
    document.getElementsByClassName('navbar-toggle')[0].removeEventListener('click', this.toggleMenu);

  }





// Toggle if navbar menu is open or closed
  toggleMenu() {
      document.getElementsByClassName('navbar-collapse')[0].classList.toggle('collapse');
      document.getElementsByClassName('navbar-collapse')[0].classList.toggle('in');
  }



  // Close all dropdown menus
  closeMenus() {
      for (var j = 0; j < document.getElementsByClassName('dropdown').length; j++) {
          document.getElementsByClassName('dropdown')[j].getElementsByClassName('dropdown-toggle')[0].classList.remove('dropdown-open');
          document.getElementsByClassName('dropdown')[j].classList.remove('open');
      }
  }



  // Close dropdowns when screen becomes big enough to switch to open by hover
  closeMenusOnResize() {
      if (document.body.clientWidth >= 768) {
          this.closeMenus();
          document.getElementsByClassName('navbar-collapse')[0].classList.add('collapse');
          document.getElementsByClassName('navbar-collapse')[0].classList.remove('in');
      }
  }





  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark txt-white">
        <span className="navbar-brand">
          Tasks
          <span className="badge badge-pill badge-light ml-2">{ this.props.ntasks }</span>
        </span>
        <button className="navbar-toggler navbar-toggle" type="button" data-toggle="collapse" data-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navContent">
          <ul className="navbar-nav ml-auto mr-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tasks">Task</Link></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-expanded="false">More</a>
              <ul className="dropdown-menu bg-dark" role="menu">
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              </ul>
            </li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

    );
  }

}


export default Navigation;
