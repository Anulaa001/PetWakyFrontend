import { SINGLE_AD_FAIL, SINGLE_AD_REQUEST, SINGLE_AD_SUCCESS } from "../constants/singleAdConstants"

import axios from 'axios';
export const singleAdAction = (adId) => async (dispatch) => {
     dispatch({
         type: SINGLE_AD_REQUEST,
         payload:adId,
     });
     try  {
        const {data} = await axios.get(`/adsList/${adId}`);
        //zmiana stanu redux i update strony z ogloszeniem
        dispatch({
            type: SINGLE_AD_SUCCESS,
            payload:data
        });
    } 
     catch(error) {
         dispatch({
             type: SINGLE_AD_FAIL,
             payload:error.response && error.response.data.message ?
                error.response.data.message
                :error.message,
         })
     }
 }