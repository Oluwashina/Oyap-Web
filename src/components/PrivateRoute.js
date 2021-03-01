import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {
    auth,
    profile: { role },
  } = useSelector((state) => state.firebase.auth);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.uid) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
        
        if (!role === "Farmer") {
          // role not authorised so redirect to home page
          return <Redirect to={{ pathname: `/${role}` }} />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
