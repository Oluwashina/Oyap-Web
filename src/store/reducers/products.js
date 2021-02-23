import * as actionTypes from '../actions/actionTypes'

const initState = {
    isLoading: false
}

const productsReducer = (state=initState, action) => {
    switch(action.type){
        case actionTypes.ADD_PRODUCT_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.ADD_PRODUCT_SUCCESS:
            return{
                ...state,
                isLoading: false
            }
        case actionTypes.ADD_PRODUCT_FAIL:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}

export default productsReducer