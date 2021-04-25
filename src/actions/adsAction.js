import { ADS_LIST_FAIL, ADS_LIST_REQUEST, ADS_LIST_SUCCESS } from "../constants/adsConstants"

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