import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const LogisticRoute = ({ component: Component, isAuth, role, ...rest }) => {
  console.log(isAuth);
  return (
    <Route
      {...rest}
      render={(props) =>  role !== 'Logistics' ? (
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
export default connect(mapStateToProps)(LogisticRoute);
