import * as actionTypes from "./actionTypes"

export const purchaseProduct = (order) => {
    return async (dispatch, _, { getFirestore }) => {
        const firestore = getFirestore()
        dispatch({type: actionTypes.PURCHASE_PRODUCT_START })
        console.log("Purchase Product start...");
        try {
            await firestore.collection("orders").add(order);
            dispatch({ type: actionTypes.PURCHASE_PRODUCT_SUCCESS });
            console.log("product purchase success....");
          } catch (e) {
            console.log(e);
            dispatch({ type: actionTypes.PURCHASE_PRODUCT_FAIL });
            console.log("product purchase fail....");
          }
    }
}