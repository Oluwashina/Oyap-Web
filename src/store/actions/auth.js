import * as actionTypes from "./actionTypes";
import cogoToast from "cogo-toast";

export const signUp = (newUser) => {
  return async (dispatch, _, { getFirebase, getFirestore }) => {
    dispatch({ type: actionTypes.SIGNUP_START });
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password);
      await firestore.collection("users").doc(res.user.uid).set({
        firstName: newUser.firstname,
        lastName: newUser.lastname,
        username: newUser.email,
        phoneNumber: newUser.phone,
        role: newUser.role,
        createdAt: new Date()
      });
      dispatch({ type: actionTypes.SIGNUP_SUCCESS });
      cogoToast.success("Registration Successful!, Login to continue");
    } catch (err) {
      console.log(err);
      dispatch({ type: actionTypes.SIGNUP_FAIL, err });
      console.log(err);
    }
  };
};

export const signIn = (credentials) => {
  return async (dispatch, _, { getFirebase }) => {
    //make async call to firebase
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
      dispatch({ type: actionTypes.LOGIN_SUCCESS });
      cogoToast.success('Login Successful!', { position: 'bottom-right', })
    } catch (err) {
      console.log(err);
      dispatch({ type: actionTypes.LOGIN_FAIL, err });
      cogoToast.error("Invalid Credentials!");
    }
  };
};

export const signOut = () => {
  return async (dispatch, _, { getFirebase }) => {
    const firebase = getFirebase();

    try {
      await firebase.auth().signOut();
      dispatch({ type: actionTypes.SIGNOUT_SUCCESS });
    } catch (error) {
      console.log(error);
    }
  };
};

export const passwordReset = (emailAddress) => {
  return async (dispatch, _, { getFirebase }) => {
    const firebase = getFirebase();

    try {
      await firebase.auth().sendPasswordResetEmail(emailAddress);
      console.log("Reseting password");
      dispatch({ type: actionTypes.RESET_PASSWORD });
      cogoToast.success("Check your email for password reset instructions!", {
        position: "top-center",
      });
    } catch (err) {
      console.log(err);
      cogoToast.error("Kindly check that the credentials entered is valid!");
    }
  };
};

export const verifyResetCode = (code) => {
  return async (dispatch, _, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      firebase.auth().verifyPasswordResetCode(code);
      dispatch({ type: actionTypes.VALID_RESETCODE });
    } catch {
      // Invalid code
      dispatch({ type: actionTypes.INVALID_RESETCODE });
    }
  };
};

export const ResetPassword = (values) => {
  return async (dispatch, _, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch({ type: actionTypes.PASSWORD_CHANGED_START });
    try {
      // Reset a user's password
      await firebase.auth().confirmPasswordReset(values.code, values.password);
      dispatch({ type: actionTypes.PASSWORD_CHANGED_SUCCESS });
      cogoToast.success("Password successfully changed, Login to continue", {
        position: "top-center",
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: actionTypes.PASSWORD_CHANGED_FAIL });
    }
  };
};
