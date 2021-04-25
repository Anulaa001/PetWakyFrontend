import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { adsListReducer } from './reducers/adsReducer';
import { singleAdReducer } from './reducers/singleAdReducer';
const initialState= {};
const reducer =combineReducers({
    adsList: adsListReducer,
    singleAd: singleAdReducer,
})


const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//stworzenie store
const store=createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;