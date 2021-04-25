import React from 'react';
import './Topbar.css';
import logoP from '../img/logoP.png';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../actions/userAction';


import { Link } from 'react-router-dom';
function Topbar() {
  const userLogin = useSelector((state)=>state.userLogin);
  const {userInfo} = userLogin;
const dispatch = useDispatch();
  const logoutHandler = () => {
dispatch(logoutAction());
  }
  return (
  <header className="container">
    <nav className="nav">
<div className="logo"> <Link to='/'><img src={logoP} alt="logo" width="80px" height="80px"/></Link></div>
<div className="space"/>
 <ul>
        
        <li>
        {userInfo ? (
        <div className="dropdown_menu">
        <Link to="#">{"Witaj, " + userInfo.userName} </Link>
        <ul className="logout"><Link to="#logout" onClick={logoutHandler}>Logout</Link></ul>
        </div>
      ):
      (
          <Link to='/Login'>Log in</Link>
      )}
        </li>
        <li>
          <Link to='/Ads'><i id="icon" className='fa fa-plus-square'></i></Link>
        </li>



      </ul>

    </nav>
  </header >

);
      }

export default Topbar;