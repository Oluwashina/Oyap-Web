import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const BuyerRoute = ({ component: Component, isAuth, role, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => 
        role !== 'Buyer' ? (
          <>
           <Redirect to={'/'} />
          </>
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
    role: state.auth.role,
  };
};
export default connect(mapStateToProps)(BuyerRoute);
