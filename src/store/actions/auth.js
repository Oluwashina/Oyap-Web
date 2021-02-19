import * as actionTypes from './actionTypes'
import cogoToast from 'cogo-toast';

export const signUp = (newUser) => {
  return (dispatch, _ , { getFirebase, getFirestore }) => {
    dispatch({type: actionTypes.SIGNUP_START})
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) => {
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            role: newUser.role            
          });
      })
      .then(() => {
        dispatch({ type: actionTypes.SIGNUP_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.SIGNUP_FAIL, err });
        console.log(err);
      });
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