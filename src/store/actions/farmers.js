import {GetApi} from '../helpers'
// import cogoToast from "cogo-toast";



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
