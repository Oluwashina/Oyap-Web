import { combineReducers } from "redux";
import authReducer from './auth'
import productsReducer from './products'
import cartReducers from './carts'
import farmersReducer from "./farmers";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducers,
  farmers: farmersReducer
});

export default rootReducer;
