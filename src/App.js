import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserSignup from "./pages/Signup/UserSignup";
import SignUpStart from "./pages/Signup/signUpStart";
import UserLogin from "./pages/Login/userLogin";
import ForgotPassword from "./pages/ForgotPassword/forgotPassword";
import ResetPassword from "./pages/ResetPassword/resetPassword";
import VerifyUser from './pages/VerifyUser/verifyUser';
import CreateProduct from "./components/CreateProduct/CreateProduct";
// import PrivateRoute from "./components/PrivateRoute"
import BuyerHome from "./pages/Home/BuyerHome";
import BuyerItemPage from "./pages/Home/BuyerItemPage"
import CheckoutPage from "./pages/Home/BuyerCheckout"
import Cart from "./pages/Home/BuyerCart"
import Orders from "./pages/BuyerOrders/Orders"
import OrderDetails from "./pages/BuyerOrders/OrderDetails"
import BuyerProfile from './pages/Home/BuyerProfile'
import FAQ from "./pages/FAQ/faq"

// import BuyerRoute from './components/PrivateRoutes/BuyerRoute'

function App() {
  return (
    <>
      <div className="">
        <Router>
          <Switch>        
          {/* <Route exact path="/" component={BuyerHome} /> */}
            <Route exact path="/" component={BuyerHome} />
            <Route path="/item/:id" component={BuyerItemPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/cart" component={Cart} />
            <Route path="/orders" component={Orders} />
            <Route path="/customer/account" component={BuyerProfile} />
            <Route path="/order/:id" component={OrderDetails} />
            <Route path="/signup/:id" component={UserSignup} />
            <Route path="/signup" component={SignUpStart} />
            <Route path="/verify-code" component={VerifyUser} />
            <Route path="/login" component={UserLogin} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/resetpassword" component={ResetPassword} />
            <Route path="/createProduct" component={CreateProduct} />   
            <Route path="/faq" component={FAQ} />         
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
