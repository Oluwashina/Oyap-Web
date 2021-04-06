import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const LogissticRoute = ({ component: Component, isAuth, role, ...rest }) => {
  console.log(isAuth);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuth) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
        if (role !== "Logistics") {
          // role not authorised so redirect to unnauthorised page
          alert("You do not have access to this page as !" + role);
          return <Redirect to="/faq" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
    role: state.auth.role,
  };
};
export default connect(mapStateToProps)(LogissticRoute);
