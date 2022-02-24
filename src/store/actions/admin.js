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

// dispatch an order functionality
export const dispatchOrderRequest = (id) => {
  return async (dispatch, getState) => {
      dispatch({ type: "Order_Start"});
    try {
      const res = await PostApi("ontransit/order/"+id, "", getToken());
      if (res.status === 200) {
        dispatch({ type: "Order_Success"});
        cogoToast.success("Your request has been dispatched successfully!");
      }
      if(res.status === 400){
        dispatch({ type: "Order_Error" });
      }
    } catch (err) {
     console.log(err)
    }
  };
};

export const completeOrderRequest = (id) => {
  return async (dispatch, getState) => {
      dispatch({ type: "Order_Start"});
    try {
      const res = await PostApi("logistics/confirm/order/"+id, "", getToken());
      if (res.status === 200) {
        dispatch({ type: "Order_Success"});
        cogoToast.success("Your request has been completed successfully!");
      }
      if(res.status === 400){
        dispatch({ type: "Order_Error" });
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
        const res = await PostApi("enableuser", {...user}, getToken(), "application/json")
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
        const res = await PostApi("disableuser", {...user}, getToken(), "application/json")
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

   // restore a user functionality
   export const RestoreUser = (user) => {
    return async (dispatch, getState) => {
      try {
        let id  = user.id
        let name = 'Restore'
        const res = await PostApi("enableuser", {
          email: user.email
        }, getToken(), "application/json")
        if (res.status === 200) {
          dispatch({ type: "UserActivity", id, name });
          cogoToast.success('User enabled successfully!', { position: 'bottom-right', })
        }
        if(res.status === 400){
          dispatch({ type: "User_Error", err: res.data});
        }
      } catch (err) {
        console.log(err)
      }
    };
  };

  // suspend a user
  export const SuspendUser = (user) => {
    return async (dispatch, getState) => {
      try {
        let id  = user.id
         let name = 'Suspend'
        const res = await PostApi("disableuser", {
          email: user.email
        }, getToken(), "application/json")
        if (res.status === 200) {
          dispatch({ type: "UserActivity", id, name });
          cogoToast.success('User enabled successfully!', { position: 'bottom-right', })
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


// get all withdrawal requests by a farmer
export const getWithdrawalRequests = (status) => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi(`withdrawer?status=${status}&limit=5&offset-=1`, getToken());
      if (res.status === 200) {
        dispatch({ type: "WithdrawalRequests", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "Request_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};

// decline a withdrawal request
export const declineWithdrawalRequest = (id) => {
  return async (dispatch, getState) => {
      dispatch({ type: "Declined_Start"});
    try {
      const res = await PostApi("cancelrequest/"+id, "", getToken());
      if (res.status === 200) {
        dispatch({ type: "Declined_Success"});
        cogoToast.success("Your request has been declined successfully!");
      }
      if(res.status === 400){
        dispatch({ type: "Declined_Error" });
      }
    } catch (err) {
     console.log(err)
    }
  };
};

// approve a withdrawal request
export const approveWithdrawalRequest = (id, creds) => {
  return async (dispatch, getState) => {
      dispatch({ type: "Approve_Start"});
    try {
      const res = await PostApi("completerequest/"+id, {...creds}, getToken());
      if (res.status === 200) {
        dispatch({ type: "Approve_Success"});
        cogoToast.success("Your request has been approved successfully");
      }
      if(res.status === 400){
        dispatch({ type: "Approve_Error" });
      }
    } catch (err) {
     console.log(err)
    }
  };
};


// add admin functionalit
export const adminRegister = (user) => {
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("user", {
                   firstName: user.firstName,
                   lastName: user.lastName,
                   phoneNumber: user.phoneNumber,
                   email: user.email,
                   password: user.password,
                   role: user.role
                  }, "", "application/json")
      if (res.status === 201) {
        dispatch({ type: "SIGNUP_SUCCESS", data: res.data });
        cogoToast.success("Admin created successfully!");
      }
      if(res.status === 400){
        dispatch({ type: "SIGNUP_FAIL", err: res.data});
        cogoToast.error('Email already exists!!!')
      }
    } catch (err) {
      console.log(err)
    }
  };
};