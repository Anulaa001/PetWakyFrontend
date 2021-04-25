import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { adsListReducer } from './reducers/adsReducer';
import { singleAdReducer } from './reducers/singleAdReducer';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer';
const initialState= {
    userLogin: {
        userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')):null
    }
};
const reducer =combineReducers({
    adsList: adsListReducer,
    singleAd: singleAdReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
})


const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//stworzenie store
const store=createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;