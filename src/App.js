import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserSignup from "./pages/Signup/UserSignup";
import SignUpStart from "./pages/Signup/signUpStart";
import UserLogin from "./pages/Login/userLogin";
import ForgotPassword from "./pages/ForgotPassword/forgotPassword";
import ResetPassword from "./pages/ResetPassword/resetPassword";
import CreateProduct from "./components/CreateProduct/CreateProduct";
// import Home from "./pages/Home/Home"
// import PrivateRoute from "./components/PrivateRoute"

import { useSelector } from "react-redux";
import BuyerHome from "./pages/Home/BuyerHome";

function App() {
  const state = useSelector((state) => state.firebase);
  console.log(state);
  return (
    <>
      <div className="">
        <Router>
          <Switch>
            {/* <PrivateRoute exact path="/" component={Home} /> */}
            <Route exact path="/" component={BuyerHome} />
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
