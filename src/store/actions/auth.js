import * as actionTypes from "./actionTypes";
import {PostApi, PutApi, GetApi} from '../helpers'
import cogoToast from "cogo-toast";
import axios from 'axios'
import {apiUrl} from '../config'


const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}

// login user actions functionality
export const loginUser = (user) => {
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("authenticate", {...user}, "", "application/json")
      if (res.status === 200) {
        dispatch({ type: "LOGIN_SUCCESS", data: res.data });
        cogoToast.success('Login Successful!', { position: 'bottom-right', })
      }
      if(res.status === 400){
        dispatch({ type: "LOGIN_FAIL", err: res.data});
        cogoToast.error('Invalid Credentials!')
      }
    } catch (err) {
      console.log(err)
    }
  };
};

// logout a user
export const logOut = () => {
  return (dispatch, getState) => {
    localStorage.setItem("token", "")
    dispatch({ type: "logout", err: "User Out" });
  };
};


// sign up user functionality
export const signUp = (user) => {
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
        cogoToast.success("Registration Successful!, Login to continue");
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


// verify user sign up functionality
export const verifyUser = (val) => {
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("verifyuser", {
        verificationCode: val.code
      }, "", "application/json")
      if (res.status === 200) {
        cogoToast.success("User Verified Successfuly.");
        // dispatch({ type: actionTypes.VALID_RESETCODE });
      }
      if(res.status === 400){
        // Invalid code
        cogoToast.error('Verification code not valid!')
        // dispatch({ type: actionTypes.INVALID_RESETCODE });
      }
    } catch (err) {
      console.log(err)
    }
  };
};

// forgot password
export const forgotPassword = (user) => {
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("forgotpassword", {...user}, "", "application/json")
      if (res.status === 201) {
        dispatch({ type: "FORGOT_SUCCESS" });
        cogoToast.success("Check your email for password reset instructions!", {
          position: "top-center",
        });
      }
      if(res.status === 400){
        dispatch({ type: "FORGOT_ERROR" });
        cogoToast.error("Kindly check that the credentials entered is valid!");
      }
    } catch (err) {
      console.log(err)
    }
  };
};

// verify forgot password code
export const verifyResetCode = (code) => {
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("link/verify/forgotpasswordcode", {code}, "", "application/json")
      if (res.status === 200) {
        dispatch({ type: actionTypes.VALID_RESETCODE });
      }
      if(res.status === 400){
        // Invalid code
        dispatch({ type: actionTypes.INVALID_RESETCODE });
      }
    } catch (err) {
      console.log(err)
    }
  };
};

// reset password functionality
export const ResetPassword = (val) => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.PASSWORD_CHANGED_START });
    try {
      const res = await PostApi("reset", {...val}, "", "application/json")
      if (res.status === 200) {
        // reset a user's password
        dispatch({ type: actionTypes.PASSWORD_CHANGED_SUCCESS });
        cogoToast.success("Password successfully changed, Login to continue", {
          position: "top-center",
        });
      }
      if(res.status === 400){
        // error while reset password
        dispatch({ type: actionTypes.PASSWORD_CHANGED_FAIL });
      }
    } catch (err) {
      console.log(err)
    }
  };
};


// profile update of user functionality
export const updateProfile = (user) => {
  return async (dispatch, getState) => {
    const id = getState().auth.id
    try {
      const res = await PutApi("member/"+id, {
                   firstName: getState().auth.firstname,
                   lastName: getState().auth.lastname,
                   role: getState().auth.role,
                   email: getState().auth.email,
                   phoneNumber:getState().auth.phoneNumber,
                   isVerified: getState().auth.isVerified,
                   isEnabled: getState().auth.isEnabled,
                   walletBalance: getState().auth.walletBalance,
                   profilePic: getState().auth.profilePic,
                   pickUpDetails: getState().auth.pickUpDetails,
                   billingDetails: {
                    store: user.store,
                    address: user.street,
                    state: user.state,
                    city: user.city,
                    phone: user.phone,
                   }
                  }, getToken(), "application/json")
      if (res.status === 201) {
        dispatch({ type: "PROFILE_UPDATE", data: user });
        cogoToast.success("Profile Update Successful!");
      }
      if(res.status === 400){
        dispatch({ type: "PROFILE_ERROR", err: res.data});
        cogoToast.error('Error while updating profile!!!')
      }
    } catch (err) {
      console.log(err)
    }
  };
};



// profile update of farmers
export const updateFarmersProfile = (user) => {
  return async (dispatch, getState) => {
    const id = getState().auth.id
    try {
      const res = await PutApi("member/"+id, {
                   firstName: getState().auth.firstname,
                   lastName: getState().auth.lastname,
                   role: getState().auth.role,
                   email: getState().auth.email,
                   phoneNumber:getState().auth.phoneNumber,
                   isVerified: getState().auth.isVerified,
                   isEnabled: getState().auth.isEnabled,
                   walletBalance: getState().auth.walletBalance,
                   profilePic: getState().auth.profilePic,
                   billingDetails: getState().auth.billingDetails,
                   pickUpDetails: {
                    store: user.store,
                    address: user.street,
                    state: user.state,
                    city: user.city,
                    phone: user.phone,
                   }
                  }, getToken(), "application/json")
      if (res.status === 201) {
        dispatch({ type: "PICKUP_UPDATE", data: user });
        cogoToast.success("Profile Update Successful!");
      }
      if(res.status === 400){
        dispatch({ type: "PROFILE_ERROR", err: res.data});
        cogoToast.error('Error while updating profile!!!')
      }
    } catch (err) {
      console.log(err)
    }
  };
};
  

// Upload a profile picture functionality
export const UploadPhoto = (value) => {
  return async (dispatch, getState) => {
    dispatch({ type: "PhotoLoader"});
      let formdata = new FormData()
      formdata.append("file", value);
    try {
      const res = await PostApi("profileimage", formdata, getToken(), "multipart/form-data");
      if (res.status === 201) {
            var image = res.data.imageUrl
            // actual call to update profile 
            dispatch({type: "profilePicture", image})
               const id = getState().auth.id
              const values = {
                firstName: getState().auth.firstname,
                lastName: getState().auth.lastname,
                role: getState().auth.role,
                email: getState().auth.email,
                phoneNumber:getState().auth.phoneNumber,
                isVerified: getState().auth.isVerified,
                isEnabled: getState().auth.isEnabled,
                walletBalance: getState().auth.walletBalance,
                profilePic: image,
                pickUpDetails: getState().auth.pickUpDetails,
                billingDetails: getState().auth.billingDetails
              }
              axios.put(apiUrl + "member/"+id, {...values}, {
                  headers: {
                      Accept: 'application/json',
                      Authorization: getToken()
                  }
              }).then((res) => {
                  if (res.status === 201) {
                    dispatch({ type: "StopPhotoLoader"});
                    cogoToast.success('Image updated successfully!')
                  } 
              }).catch((err) => {
                 dispatch({ type: "StopPhotoLoader"});
                  cogoToast.error('Error while uploading picture!')
              })
        }
        if(res.status === 400 || res.status === 404){
          cogoToast.error('Error while uploading image!')
          dispatch({ type: "StopPhotoLoader"});
        }
    } catch (err) {
      // var message = err.response.data
        console.log(err)
    }
  };
};


// get a user by id
export const getUserById = () => {
  return async (dispatch, getState) => {
    try {
      const id  = getState().auth.id
      const res = await GetApi("member/"+id, getToken());
      if (res.status === 200) {
        dispatch({ type: "UserById", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "User_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};