import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserSignup from "./pages/Signup/UserSignup";
import SignUpStart from "./pages/Signup/signUpStart";
import UserLogin from "./pages/Login/userLogin";
import ForgotPassword from "./pages/ForgotPassword/forgotPassword";
import ResetPassword from "./pages/ResetPassword/resetPassword";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import Home from "./pages/Home/Home"
import PrivateRoute from "./components/PrivateRoute"

import { useSelector } from "react-redux";
import BuyerHome from "./pages/Home/BuyerHome";
import BuyerItemPage from "./pages/Home/BuyerItemPage"
import CheckoutPage from "./pages/Home/BuyerCheckout"
import Cart from "./pages/Home/BuyerCart"

function App() {
  const role = useSelector((state) => state.firebase.profile.role);
  let homeRoute = null
  if(role === 'Buyer'){
    homeRoute = (
      <PrivateRoute exact path="/" component={BuyerHome} />
    )
  }else{
    homeRoute = (
      <PrivateRoute exact path="/" component={Home} />
      )
  }
  return (
    <>
      <div className="">
        <Router>
          <Switch>        
            {homeRoute}
            <Route path="/item/:id" component={BuyerItemPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/cart" component={Cart} />
            <Route path="/signup/:id" component={UserSignup} />
            <Route path="/signup" component={SignUpStart} />
            <Route path="/login" component={UserLogin} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/resetpassword" component={ResetPassword} />
            <Route path="/createProduct" component={CreateProduct} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
