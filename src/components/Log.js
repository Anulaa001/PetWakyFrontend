import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAction } from '../actions/userAction';
import Loading from './Loading';
import Error from './Error';
import './Log.css';
function Login (props){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

    const dispatch = useDispatch();
    const loginHandler = (e)=> {
        e.preventDefault();
        //call sign action
        dispatch(loginAction(email, password));

    };
    useEffect(() => {
        if (userInfo) {
          props.history.push(redirect);
        }
      }, [props.history, redirect, userInfo]);
    return(
    <>
    <div>
        <div className="col-1">
        {loading && <Loading/>}
        {error && <Error>{error}</Error>}
            <form className="loginForm" onSubmit={loginHandler} >
                <h1>
                    Log I n
                </h1>
                    <label htmlFor="email"></label>
                    
                    <input type="email" id="email"placeholder="E-mail" required onChange={ e=> setEmail(e.target.value)}></input>
                    <label htmlFor="password"></label>
                    <input type="password" id="passwdord" placeholder="Password" required onChange={ e=> setPassword(e.target.value)}></input>
                    <button type="submit">Log in</button>
                    <div >
                        New customer? 
                        <span className="link"><Link to="/register">Create your account</Link></span>

                    </div>
                
                
            </form>
        </div>
        
        <div className="col-2">
        </div>
    </div>
    </>
    )
}
export default Login;