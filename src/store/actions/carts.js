import * as actionTypes from "./actionTypes";
import cogoToast from "cogo-toast";
import {PostApi, GetApi, DeleteApi} from '../helpers'



const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}


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

// export const addToCart = (product, id, name) =>{
//     return dispatch => {
//         dispatch({type: actionTypes.ADD_TO_CART,product, id})
//         cogoToast.success(`${name} added to cart`);
//     }
// }

// add to cart functionality
export const addToCart = (val) => {
    return async (dispatch, getState) => {
        const name = val.productName;
        const id = getState().auth.id;
      try {
        const res = await PostApi("cart", {...val}, getToken(), "application/json")
        if (res.status === 201) {
          dispatch({ type: "CART_SUCCESS", data: res.data });
          cogoToast.success(`${name} added to cart`);

             //   fetch carts for that user
              const resp = await GetApi("cart/"+id, getToken());
              if (resp.status === 200) {
                dispatch({ type: "CARTITEMS", data: resp.data});
              }
              if(resp.status === 400){
                dispatch({ type: "CART_ERROR", err: resp.data });
              }
        }
        if(res.status === 400){
          dispatch({ type: "CART_FAIL", err: res.data});
        }
      } catch (err) {
        console.log(err)
      }
    };
  };


// get a cart fucntionality
export const getCart = () => {
    return async (dispatch, getState) => {
        const id = getState().auth.id;
      try {
        const res = await GetApi("cart/"+id, getToken());
        if (res.status === 200) {
          dispatch({ type: "CARTITEMS", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "CART_ERROR", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

//   remove a cart functionality
export const deleteCart = (id) => {
    return async (dispatch, getState) => {
      try {
        const res = await DeleteApi("cart/"+id, getToken());
        if (res.status === 200) {
          dispatch({ type: "DELETECART", data: res.data});
          dispatch({type: actionTypes.REMOVE_FROM_CART, id})
          cogoToast.success(`Item removed from cart`); 
        }
        if(res.status === 400){
          dispatch({ type: "CART_ERROR", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };


// adjust quantity functionality in cart
export const adjustCartQty = (val) => {
    return async (dispatch, getState) => {
        const id = getState().auth.id;
      try {
        const res = await PostApi("cart", {...val}, getToken(), "application/json")
        if (res.status === 201) {
          dispatch({ type: "CART_SUCCESS", data: res.data });

             //   fetch carts for that user
              const resp = await GetApi("cart/"+id, getToken());
              if (resp.status === 200) {
                dispatch({ type: "CARTITEMS", data: resp.data});
              }
              if(resp.status === 400){
                dispatch({ type: "CART_ERROR", err: resp.data });
              }
        }
        if(res.status === 400){
          dispatch({ type: "CART_FAIL", err: res.data});
        }
      } catch (err) {
        console.log(err)
      }
    };
  };


// get cart count for a user
export const getCartCount = () => {
    return async (dispatch, getState) => {
        const id = getState().auth.id;
      try {
        const res = await GetApi("cartcount/"+id, getToken());
        if (res.status === 200) {
          dispatch({ type: "CARTCOUNT", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "CARTCOUNT_ERROR", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };



export const adjustQty = (id, qty) =>{
    return dispatch =>{
        dispatch({type: actionTypes.ADJUST_QTY, id, qty})
    }
}
