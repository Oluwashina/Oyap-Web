import * as actionTypes from '../actions/actionTypes'

const initState = {
    isLoading: false
}

const productsReducer = (state=initState, action) => {
    switch(action.type){
        case actionTypes.CREATE_PRODUCT_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return{
                ...state,
                isLoading: false
            }
        case actionTypes.CREATE_PRODUCT_FAIL:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}

export default productsReducer