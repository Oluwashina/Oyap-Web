import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserSignup from "./pages/Signup/UserSignup";
import UserLogin from "./pages/Login/userLogin";
import Home from "./pages/Home/Home"
import PrivateRoute from "./components/PrivateRoute"

import { useSelector } from 'react-redux'


function App() {
  const auth = useSelector((state) => state.firebase.auth);
  console.log(auth);
  return (
    <>
      <div className="">
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/signup" component={UserSignup} />
            <Route path="/login" component={UserLogin} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
