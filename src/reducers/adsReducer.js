import { ADS_LIST_FAIL, ADS_LIST_REQUEST, ADS_LIST_SUCCESS, ADD_SUCCESS, ADD_REQUEST, ADD_FAIL } from "../constants/adsConstants";

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


export const addReducer = (state ={loading:true, ads:[]},action) => {
    switch (action.type) {
        case ADD_REQUEST:
            return {loading:true};
        case ADD_SUCCESS:
            return {loading:false, ads: action.payload};
        case ADD_FAIL:
            return {loading:false, error:action.payload};
        default:
            return state;
    }
}