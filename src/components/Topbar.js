import React from 'react';
import './Topbar.css';

import { Link } from 'react-router-dom';
const Topbar = props => (
  <header className="container">
    <nav className="nav">
<div className="logo"> <Link to='/'>LOGO</Link></div>
<div className="space"/>


      <ul>
        <li>
          <Link to='/'>Mapa</Link>
        </li>
        <li>
          <Link to='/Guide'>Zaloguj</Link>
        </li>
        <li>
          <Link to='/Add'>Dodaj ogłoszenie</Link>
        </li>



      </ul>

    </nav>
  </header >

);

export default Topbar;