import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageLogo from '../../icons/app-logo.png'

const LOGO = { path: '/', name: 'MyReads' }

const NAVIGATION = [
  {  path: '/about', name: 'About this project' },
  // {  path: '/contact', name: 'Contact' }
];

class NavBar extends Component {
  render() {
    return (
      <div className="header-navigation-bar">
        <div className="navigation-bar-logo">
          <Link to={LOGO.path}>
            <img src={ImageLogo} alt="MyReads Logo" height="42" width="42" />
            <div className="navigation-bar-title">{LOGO.name}</div>
          </Link>
        </div>
        <nav>
          <ul class="menu">
            { NAVIGATION.map(item => {
              return (
                <li>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            })}
        </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar
