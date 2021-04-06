import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const SellerRoute = ({ component: Component, isAuth, role, ...rest }) => {
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
        if (role !== "Seller") {
          // role not authorised so redirect to unnauthorised page
          alert("You are not a seller!");
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
export default connect(mapStateToProps)(SellerRoute);
