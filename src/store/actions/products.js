import * as actionTypes from "./actionTypes";

export const getProducts = () => {

}

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
