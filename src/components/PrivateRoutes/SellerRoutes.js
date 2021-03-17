import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
// import { isLoaded, isEmpty } from "react-redux-firebase";

const BuyerRoute = ({ component: Component, ...rest }) => {
  const {
    auth,
    profile,
  } = useSelector((state) => state.firebase);

  return (
    <Route
      {...rest}
      render={(props) => {
          if (!auth.uid){
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          }
          if (profile.role !== 'Seller') {
            // role not authorised so redirect to unnauthorised page
            alert("You are not a seller!")
            return <Redirect to='/login' />
        }
        return <Component {...props} />
      }              
      }
    />
  );
};

export default BuyerRoute;
