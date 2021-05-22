import {GetApi} from '../helpers';

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
