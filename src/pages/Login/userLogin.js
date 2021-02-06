import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actions from "../../store/actions";

const UserSignup = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const auth = useSelector((state) => state.firebase.auth)


  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(user);
    
  };
  if(auth.uid) return <Redirect to = "/" />
  return (
    <div className="card w-50">
      <h2 className="text-center mt-4">Log In</h2>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              required
              onChange={handleChange}
              value={user.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              required
              onChange={handleChange}
              value={user.password}
            />
          </div>          
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => dispatch(actions.signIn(credentials)),
  };
};
export default connect(null, mapDispatchToProps)(UserSignup);
