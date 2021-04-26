import { ADS_LIST_FAIL, ADS_LIST_REQUEST, ADS_LIST_SUCCESS , ADD_FAIL, ADD_REQUEST, ADD_SUCCESS} from "../constants/adsConstants"

import axios from 'axios';
export const listAds = () => async (dispatch) => {
     dispatch({
         type: ADS_LIST_REQUEST
     });
     try  {
        const {data} = await axios.get('/adsList');
        //zmiana stanu redux i update strony z ogloszeniami
        dispatch({
            type: ADS_LIST_SUCCESS,
            payload:data
        });
    } 
     catch(error) {
         dispatch({
             type: ADS_LIST_FAIL,
             payload:error.message
         })
     }
 }




 export const addAction =(title, category, price, description, petType, size, image,city) => async (dispatch) => {
    dispatch({type:ADD_REQUEST, payload: {title, category, price, description, petType, size, image,city}});
    try {
        const {data}=await axios.post('/adsList/add', {title, category, price, description, petType, size, image,city});
        dispatch({type: ADD_SUCCESS, payload: data});
       
    }
    catch (error) {
        dispatch({
            type: ADD_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message
            :error.message,
        });
    }
}