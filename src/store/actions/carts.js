import * as actionTypes from "./actionTypes";
import cogoToast from "cogo-toast";

export const Increment = () =>{
    return dispatch =>{
        dispatch({ type: actionTypes.INCREMENT });
    }
}


export const Decrement = () =>{
    return dispatch => {
        dispatch({type: actionTypes.DECREMENT})
    }
}

export const addToCart = (product, id, name) =>{
    return dispatch => {
        dispatch({type: actionTypes.ADD_TO_CART,product, id})
        cogoToast.success(`${name} added to cart`);
    }
}


export const removeCart = (id) =>{
    return dispatch => {
        dispatch({type: actionTypes.REMOVE_FROM_CART, id})
        cogoToast.success(`Item removed from cart`);    
    }
}

export const adjustQty = (id, qty) =>{
    return (dispatch, getState) =>{
        dispatch({type: actionTypes.ADJUST_QTY, id, qty})
    }
}
