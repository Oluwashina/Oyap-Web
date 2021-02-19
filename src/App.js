import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserSignup from "./pages/Signup/UserSignup";
import SignUpStart from './pages/Signup/signUpStart'
import UserLogin from "./pages/Login/userLogin";
import ForgotPassword from "./pages/ForgotPassword/forgotPassword"
import ResetPassword from "./pages/ResetPassword/resetPassword"
import Home from "./pages/Home/Home"
import PrivateRoute from "./components/PrivateRoute"

import { useSelector } from 'react-redux'


function App() {
  const state = useSelector((state) => state.firebase)
  console.log(state);
  const auth = useSelector((state) => state.firebase.auth);
  console.log(auth);
  return (
    <>
      <div className="">
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/signup/:id" component={UserSignup} />
            <Route path="/signup" component={SignUpStart} />
            <Route path="/login" component={UserLogin} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/resetpassword" component={ResetPassword} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
