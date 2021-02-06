import * as actionTypes from "../actions/actionTypes";

const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_START:
        console.log("signup start");
      return {
        ...state,
        error: null,
      };
    case actionTypes.SIGNUP_SUCCESS:
      console.log("signup success");
      return {
        ...state,
        authError: null,
      };
    case actionTypes.SIGNUP_FAIL:
      console.log("signup failed");
      return {
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
