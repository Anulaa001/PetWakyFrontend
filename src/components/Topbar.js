import React from 'react';
import './Topbar.css';
import logoP from '../img/logoP.png';

import { Link } from 'react-router-dom';
const Topbar = props => (
  <header className="container">
    <nav className="nav">
<div className="logo"> <Link to='/'><img src={logoP} alt="logo" width="80px" height="80px"/></Link></div>
<div className="space"/>


      <ul>
        
        <li>
          <Link to='/Guide'>Log in</Link>
        </li>
        <li>
          <Link to='/Add'><i id="icon" class='fa fa-plus-square'></i></Link>
        </li>



      </ul>

    </nav>
  </header >

);

export default Topbar;