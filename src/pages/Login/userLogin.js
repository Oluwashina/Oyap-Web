import React from "react";
import Logo from "../../assets/images/logo.png";
import WelcomeImg from "../../assets/images/welcome-img.png";

const UserLogin = () => {
  return (
    <div className="conatiner-fluid">
      <div class="row">
        <div class="col-sm">
          <img src={Logo} alt="oyap logo" />
          <div>
            <p>Login As</p>
            <form>
              <div className="form-group">
                <label htmlFor="Email">Enter your email address</label>
                <input className="form-control" placeholder="sample@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="Password">Enter your password</label>
                <input className="form-control" placeholder="password" />
              </div>
              <button className="btn btn-primary btn-block">Login</button>
            </form>
            <p>Forget password?</p>
            <hr/>
            <button className="btn btn-primary btn-block">Sign Up</button>
          </div>
        </div>
        <div class="col-sm">
          <img src={WelcomeImg} alt="oyap" />
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
