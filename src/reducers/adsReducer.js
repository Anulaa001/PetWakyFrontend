import { ADS_LIST_FAIL, ADS_LIST_REQUEST, ADS_LIST_SUCCESS } from "../constants/adsConstants";

export const adsListReducer = (state ={loading:true, ads:[]},action) => {
    switch (action.type) {
        case ADS_LIST_REQUEST:
            return {loading:true};
        case ADS_LIST_SUCCESS:
            return {loading:false, ads: action.payload};
        case ADS_LIST_FAIL:
            return {loading:false, error:action.payload};
        default:
            return state;
    }
}