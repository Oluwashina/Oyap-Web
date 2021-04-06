import { combineReducers } from "redux";
import authReducer from './auth'
import productsReducer from './products'
import cartReducers from './carts'
import farmersReducer from "./farmers";
import orderReducer from "./orders";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducers,
  farmers: farmersReducer,
  order: orderReducer
});

export default rootReducer;
