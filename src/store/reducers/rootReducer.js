import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import authReducer from './auth'
import productsReducer from './products'

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
