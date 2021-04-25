import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerAction } from '../actions/userAction';
import Loading from './Loading';
import Error from './Error';
function Register (props){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('');

    const [userName, setUserName]=useState('');


    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();
    const registerHandler = (e)=> {
        e.preventDefault();
        if(password !==confirmPassword) {
            alert("Passwords differ")
        }
        else {
        //call sign action
        dispatch(registerAction(userName, email, password));
        }
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
            <form className="loginForm" onSubmit={registerHandler} >
                <h1>
                    Register
                </h1>
                    <label htmlFor="userName">Username</label>
                    <input type="text" id="userName"placeholder="userName" required onChange={ e=> setUserName(e.target.value)}></input>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email"placeholder="E-mail" required onChange={ e=> setEmail(e.target.value)}></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="passwdord" placeholder="Password" required onChange={ e=> setPassword(e.target.value)}></input>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" placeholder="confirm password" required onChange={ e=> setConfirmPassword(e.target.value)}></input>
                    
                    <button type="submit">Register</button>
                    <div>
                        Already having account?
                        <Link to="/login">Login</Link>

                    </div>
                
                
            </form>
        </div>
        
        <div className="col-2">
        </div>
    </div>
    </>
    )
}
export default Register;