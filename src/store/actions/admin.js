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