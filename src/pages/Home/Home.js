import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const Home = ({ logout }) => {
  alert("Page under construction");

  return (
    <div>
      <button type="sumbit" className="btn btn-primary" onClick={logout}>
        {" "}
        Log out
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.signOut()),
  };
};
export default connect(null, mapDispatchToProps)(Home);
