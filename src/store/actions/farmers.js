import {GetApi, PutApi} from '../helpers'
import cogoToast from "cogo-toast";



const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}


// get all products API
export const getFarmersProducts = () => {
  return async (dispatch, getState) => {
      const id = getState().auth.id;
    try {
      const res = await GetApi("sellerproducts/"+id, getToken());
      if (res.status === 200) {
        dispatch({ type: "FarmersProducts", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "ErrorProduct", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};



  // get new orders of a seller
  export const getNewOrders = () => {
    return async (dispatch, getState) => {
      try {
        const id = getState().auth.id
        const res = await GetApi("new/orders/seller/"+id+"?limit=5", getToken());
        if (res.status === 200) {
          dispatch({ type: "NewOrders", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "Order_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

  // get all new Orders with offset and limit
  export const getNewOrdersLimit = (values) => {
    return async (dispatch, getState) => {
      try {
        const id = getState().auth.id
        const limit = values.limit
        const offset = values.offset
        const res = await GetApi("new/orders/seller/"+id+"?limit="+limit+"&offset="+offset, getToken());
        if (res.status === 200) {
          dispatch({ type: "NewOrders", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "Order_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

  // get all confirmed orders of a farmer with limit and offset
  export const getConfirmedOrders = (values) => {
    return async (dispatch, getState) => {
      try {
        const limit = values.limit
        const offset = values.offset
        const res = await GetApi("seller/order/Confirmed/?limit="+limit+"&offset="+offset, getToken());
        if (res.status === 200) {
          dispatch({ type: "ConfirmedOrders", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "Order_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };


  // get all completed orders of a farmer with limit and offset
  export const getCompletedOrders = (values) => {
    return async (dispatch, getState) => {
      try {
        const limit = values.limit
        const offset = values.offset
        const res = await GetApi("seller/order/Completed/?limit="+limit+"&offset="+offset, getToken());
        if (res.status === 200) {
          dispatch({ type: "CompletedOrders", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "Order_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

  
  // filter Order
  export const orderbyId = (name, id) =>{
    return dispatch =>{
      switch(name){
        case 'new':
          dispatch({ type: "NewOrderFilter", id: id, name: name});
          break;
        case 'confirmed':
          dispatch({ type: "ConfirmedOrderFilter", id: id, name: name});
          break;
        case 'completed':
          dispatch({ type: "CompletedOrderFilter", id: id, name: name});
          break;
        default:
          break;
      }
    }
}

// get farmers dashboard Count
export const getDashboardCount = () => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi("dashboard/seller/count", getToken());
      if (res.status === 200) {
        dispatch({ type: "DashboardCount", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "Count_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};
  

// confirm new order
export const confirmMyOrder = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: "confirm_Loader", });
    try {
      const res = await PutApi("confirm/orders/"+id, "", getToken())
      if (res.status === 200) {
        dispatch({ type: "Confirm_Success", err: res.data });
        cogoToast.success("Order confirmed successfully!");
      }
      if(res.status === 400){
        dispatch({ type: "Confirm_Error", err: res.data });
      }
    } catch (err) {
      console.log(err)
    }
  };
};

  