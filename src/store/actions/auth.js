import * as actionTypes from "./actionTypes";
// import {apiUrl} from '../config'
import {PostApi} from '../helpers'
import cogoToast from "cogo-toast";


// const getToken = () => {
// 	const token = localStorage.getItem("token");
// 	return token
// }

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
        cogoToast.success("Check your email for password reset instructions!", {
          position: "top-center",
        });
      }
      if(res.status === 400){
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
      const res = await PostApi("verifyCode", {code}, "", "application/json")
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


// sign up user functionality
export const updateProfile = (user) => {
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("updateprofile", {
                   store: user.store,
                   address: user.street,
                   state: user.state,
                   city: user.city,
                   phone: user.phone,
                  }, "", "application/json")
      if (res.status === 201) {
        dispatch({ type: "PROFILE_UPDATE", data: res.data });
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
