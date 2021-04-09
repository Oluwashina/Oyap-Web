import {PostApi,GetApi} from '../helpers'



const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}

// Creating an order functionality after a successful payment
export const CreateOrder = (val, shippingFee, totalPaid) => {
    return async (dispatch, getState) => {
        const data = {
            cartItems: getState().cart.cartItems,
            paymentResponse: val,
            billingDetails: getState().auth.billingDetails,
            shippingFee: shippingFee,
            totalAmountPaid: totalPaid
        }
      try {
        const res = await PostApi("order", {...data}, getToken(), "application/json")
        if (res.status === 201) {
          dispatch({ type: "Order_Created", data: res.data });
        }
        if(res.status === 400){
          dispatch({ type: "Order_Error", err: res.data});
        }
      } catch (err) {
        console.log(err)
      }
    };
  };


  // get pendig orders by a buyer
export const getCustomersOrders = (value) => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi("buyer/orders/"+value, getToken());
      if (res.status === 200) {
        dispatch({ type: "CustomerOrders", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "Orders_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};



