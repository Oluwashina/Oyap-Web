import * as actionTypes from "./actionTypes";
import {GetApi} from '../helpers'
// import cogoToast from "cogo-toast";


// get all products API
export const getProducts = () => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi("products", "");
      if (res.status === 200) {
        dispatch({ type: "AllProducts", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "Product_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};


export const createProduct = (product) => {
  return async (dispatch, getState, { getFirestore }) => {
    dispatch({ type: actionTypes.CREATE_PRODUCT_START });

    const firestore = getFirestore();
    const { firstName, lastName } = getState().firebase.profile;
    const sellerId = getState().firebase.auth.uid;

    try {
      await firestore.collection("products").add({
        ...product,
        sellerFirstName: firstName,
        sellerLastName: lastName,
        sellerId: sellerId,
        createdAt: new Date(),
      });
      dispatch({ type: actionTypes.CREATE_PRODUCT_SUCCESS });
      console.log("success....");
    } catch (e) {
      console.log(e);
      dispatch({ type: actionTypes.CREATE_PRODUCT_FAIL });
    }
  };
};
