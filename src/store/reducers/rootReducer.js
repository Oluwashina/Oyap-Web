import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import authReducer from './auth'
import productsReducer from './products'
import cartReducers from './carts'

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  cart: cartReducers
});

export default rootReducer;
