import { combineReducers } from "redux";
import authReducer from './auth'
import productsReducer from './products'
import cartReducers from './carts'

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducers
});

export default rootReducer;
