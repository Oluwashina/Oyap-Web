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
import BuyerHome from "./pages/Home/BuyerHome";
import BuyerItemPage from "./pages/Home/BuyerItemPage"
import CheckoutPage from "./pages/Home/BuyerCheckout"
import Cart from "./pages/Home/BuyerCart"
import Orders from "./pages/BuyerOrders/Orders"
import OrderDetails from "./pages/BuyerOrders/OrderDetails"
import BuyerProfile from './pages/Home/BuyerProfile'
import FAQ from "./pages/FAQ/faq"

// farmers route
import FarmersDashboard from "./pages/Farmers/FarmersDashboard/FarmersDashboard";
import FarmersOrder from "./pages/Farmers/FarmersOrder/FarmersOrder";
import FarmersOrderDetails from "./pages/Farmers/FarmersOrder/FarmersOrderDetails";
import FarmersProduct from "./pages/Farmers/FarmersProducts/FarmersProduct";
import FarmersProductDetails from "./pages/Farmers/FarmersProducts/FarmersProductDetails";
import FarmersWallet from "./pages/Farmers/FarmersWallet/FarmersWallet";
import FarmersCreditTransactions from "./pages/Farmers/FarmersTransactions/FarmersCreditTransactions";
import FarmersDebitTransactions from "./pages/Farmers/FarmersTransactions/FarmersDebitTransactions";
import FarmersWithdraw from "./pages/Farmers/FarmersWithdraw/FarmersWithdraw";
import FarmersProfile from "./pages/Farmers/FarmersProfile/FarmersProfile";
import FarmersOrderConfirmed from "./pages/Farmers/FarmersOrder/FarmersConfirmedOrders";
import FarmersOrderCompleted from "./pages/Farmers/FarmersOrder/FarmersCompletedOrders";
import FarmersProductAdd from "./pages/Farmers/FarmersProducts/FarmersProductAdd";
import FarmersProductEdit from "./pages/Farmers/FarmersProducts/FarmersProductEdit";


// admin route
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import AdminUserManage from "./pages/Admin/UserManagement/UserManagement";
import UserPortfolio from "./pages/Admin/UserManagement/UserPortfolio";


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

            {/* farmers route */}
            <Route exact path="/farmers" component={FarmersDashboard} />   
            <Route path="/farmers/neworder" component={FarmersOrder} />   
            <Route path="/farmers/confirmedorder" component={FarmersOrderConfirmed} />
            <Route path="/farmers/completedorder" component={FarmersOrderCompleted} />
            <Route path="/farmers/order/:id" component={FarmersOrderDetails} />
            <Route path="/farmers/products" component={FarmersProduct} />
            <Route path="/farmers/product/:id" component={FarmersProductDetails} />
            <Route path="/farmers/addproduct" component={FarmersProductAdd} />
            <Route path="/farmers/editproduct/:id" component={FarmersProductEdit} />
            <Route path="/farmers/wallet" component={FarmersWallet} />
            <Route path="/farmers/transactions/credit/:id" component={FarmersCreditTransactions} />
            <Route path="/farmers/transactions/debit/:id" component={FarmersDebitTransactions} />
            <Route path="/farmers/withdraw" component={FarmersWithdraw} />
            <Route path="/farmers/profile" component={FarmersProfile} />

            {/* admin routes */}
            <Route path="/admin/dashboard" component={AdminDashboard} />
            <Route path="/admin/users" component={AdminUserManage} />
            <Route path="/admin/user/:id" component={UserPortfolio} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
