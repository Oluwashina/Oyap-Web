import { combineReducers } from "redux";
import authReducer from './auth'
import productsReducer from './products'
import cartReducers from './carts'
import farmersReducer from "./farmers";
import orderReducer from "./orders";
import adminReducer from './admin'

const appReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducers,
  farmers: farmersReducer,
  order: orderReducer,
  admin: adminReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'logout') {
    state = undefined
  }

    return appReducer(state, action)
  }

export default rootReducer;
