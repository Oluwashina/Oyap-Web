import * as actionTypes from "../actions/actionTypes";

const initState = {
  authError: null,
  resetcode: false,
  isLoading: false
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
    case actionTypes.VALID_RESETCODE:
      return{
        ...state,
        resetcode: false
      }
    case actionTypes.INVALID_RESETCODE:
      return{
        ...state,
        resetcode: true
      }
    case actionTypes.PASSWORD_CHANGED_START:
      return {
        ...state,
        isLoading: true
      }

    case actionTypes.PASSWORD_CHANGED_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case actionTypes.PASSWORD_CHANGED_FAIL:
      return{
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
};

export default authReducer;
