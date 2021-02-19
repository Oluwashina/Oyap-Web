import * as actionTypes from './actionTypes'
import cogoToast from 'cogo-toast';

export const signUp = (newUser) => {
  return async (dispatch, _ , { getFirebase, getFirestore }) => {
    dispatch({type: actionTypes.SIGNUP_START})
    const firebase = getFirebase();
    const firestore = getFirestore();
      try {
       const res = await firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
        await firestore
      .collection("users")
      .doc(res.user.uid)
      .set({
        firstName: newUser.firstname,
        lastName: newUser.lastname,
        role: newUser.role            
      });
      dispatch({ type: actionTypes.SIGNUP_SUCCESS });
      cogoToast.success('Registration Successful!, Login to continue')
    } catch (err) {
      console.log(err)
      dispatch({ type: actionTypes.SIGNUP_FAIL, err });
      console.log(err);
    }
  };
};

export const signIn = (credentials) => {
    return async (dispatch, _, {getFirebase}) =>{
        //make async call to firebase
        const firebase = getFirebase()
        try {
            await firebase.auth().signInWithEmailAndPassword(
              credentials.email,
              credentials.password
          )
          dispatch({ type: actionTypes.LOGIN_SUCCESS})
        } catch (err) {
          console.log(err)
          dispatch({type: actionTypes.LOGIN_FAIL, err})
          cogoToast.error('Invalid Credentials!')
        }
    }
}

export const signOut = () => {
    return (dispatch, _, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: actionTypes.SIGNOUT_SUCCESS})
        });
    }
}