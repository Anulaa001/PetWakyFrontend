import { SINGLE_AD_FAIL, SINGLE_AD_REQUEST, SINGLE_AD_SUCCESS } from "../constants/singleAdConstants";

export const singleAdReducer = (state ={loading:true},action) => {
    switch (action.type) {
        case SINGLE_AD_REQUEST:
            return {loading:true};
        case SINGLE_AD_SUCCESS:
            return {loading:false, ad: action.payload};
        case SINGLE_AD_FAIL:
            return {loading:false, error:action.payload};
        default:
            return state;
    }
}