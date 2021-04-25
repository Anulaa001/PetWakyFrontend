import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants"

export const loginAction =(email, password) => async (dispatch) => {
    dispatch({type:USER_LOGIN_REQUEST, payload: {email, password}});
    try {
        const {data}=await axios.post('/users/login', {email,password});
        dispatch({type: USER_LOGIN_SUCCESS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data)); //niewyloguje po zamknieciu
    }
    catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message
            :error.message,
        });
    }
}

export const logoutAction = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({type: USER_LOGOUT});
}


export const registerAction =(userName, email, password) => async (dispatch) => {
    dispatch({type:USER_REGISTER_REQUEST, payload: {email, password}});
    try {
        const {data}=await axios.post('/users/register', {userName, email,password});
        dispatch({type: USER_REGISTER_SUCCESS, payload: data});
        dispatch({type: USER_LOGIN_SUCCESS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data)); //niewyloguje po zamknieciu
    }
    catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message
            :error.message,
        });
    }
}