import {GetApi, PutApi, PostApi} from '../helpers';
import cogoToast from 'cogo-toast'

const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}


// get admin dashboard Count
export const getAdminDashboardCount = () => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi("admin/orders/dashboard/count", getToken());
        if (res.status === 200) {
          dispatch({ type: "AdminDashboardCount", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "AdminCount_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

   // get recent orders on admin dashboard
   export const getAdminOrders = (val) => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi(`allorders?status=${val}&limit=5`, getToken());
        if (res.status === 200) {
          dispatch({ type: "AdminOrders", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "AdminOrders_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };


  // get recent users on admin dashboard
  export const getAdminRecentUsers = () => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi("recentusers/admin?limit=5", getToken());
        if (res.status === 200) {
          dispatch({ type: "AdminRecentUsers", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "AdminUsers_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

  // get recent orders on admin dashboard
  export const getAdminRecentOrders = () => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi("recentorders/admin?limit=5", getToken());
        if (res.status === 200) {
          dispatch({ type: "AdminRecentOrders", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "AdminOrders_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

  // get users management count
  export const getAdminUsersCount = () => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi("users/count/dashboard", getToken());
        if (res.status === 200) {
          dispatch({ type: "AdminUsersCount", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "AdminCount_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

  // get users with role as filter
  export const getAdminUsers = (role) => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi("member?role="+role, getToken());
        if (res.status === 200) {
          dispatch({ type: "AdminUsers", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "AdminUsers_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

  // get a user statistics of his products or order
  export const getUserStatistics = (id) => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi("admin/user/dashboard/count/"+id, getToken());
        if (res.status === 200) {
          dispatch({ type: "Statistics", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "Statistics_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

  // get a user order with filters for pending, new or completed
  export const getAdminUserOrder = (payload) => {
    let id = payload.id
    let status = payload.status
    return async (dispatch, getState) => {
      try {
        const res = await GetApi(`admin/user/orders/${id}?limit=5&status=${status}`, getToken());
        if (res.status === 200) {
          dispatch({ type: "UserOrder", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "Order_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };  

  // get an order by id
  export const getAdminOrderById = (id) => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi(`order/${id}`, getToken());
        if (res.status === 200) {
          dispatch({ type: "OrderById", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "OrderById_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  }; 

  // cancel order by admin
  export const CancelAdminOrder = (creds, id) => {
    return async (dispatch, getState) => {
      try {
        const res = await PutApi("cancel/orders/"+id, {...creds}, getToken());
        if (res.status === 200) {
          dispatch({ type: "OrderCancelled"});
          cogoToast.success("Order Cancelled Successful!");
        }
        if(res.status === 400){
          dispatch({ type: "CancelOrder_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

  // enable a user functionality
  export const enableUser = (user) => {
    return async (dispatch, getState) => {
      try {
        const res = await PostApi("enableuser", {...user}, "", "application/json")
        if (res.status === 200) {
          dispatch({ type: "UserEnabled" });
          cogoToast.success('User enabled successfully!', { position: 'bottom-right', })

          // fetch users again
          const res = await GetApi("recentusers/admin?limit=5", getToken());
          if (res.status === 200) {
            dispatch({ type: "AdminRecentUsers", data: res.data});
          }
          if(res.status === 400){
            dispatch({ type: "AdminUsers_Error", err: res.data });
          }

        }
        if(res.status === 400){
          dispatch({ type: "User_Error", err: res.data});
        }
      } catch (err) {
        console.log(err)
      }
    };
  };

  // disable a user functionality
  export const disableUser = (user) => {
    return async (dispatch, getState) => {
      try {
        const res = await PostApi("disableuser", {...user}, "", "application/json")
        if (res.status === 200) {
          dispatch({ type: "UserDisabled" });
          cogoToast.success('User disabled successfully!', { position: 'bottom-right', })

          // fetch recent users
          const res = await GetApi("recentusers/admin?limit=5", getToken());
          if (res.status === 200) {
            dispatch({ type: "AdminRecentUsers", data: res.data});
          }
          if(res.status === 400){
            dispatch({ type: "AdminUsers_Error", err: res.data });
          }
          
        }
        if(res.status === 400){
          dispatch({ type: "User_Error", err: res.data});
        }
      } catch (err) {
        console.log(err)
      }
    };
  };


  export const clearCancelStatus = () =>{
    return dispatch =>{
        dispatch({type: "clearCancelStatus"})
    }
}


  export const cleanOrderStatus = () =>{
    return dispatch =>{
        dispatch({type: "cleanOrderStatus"})
    }
}

