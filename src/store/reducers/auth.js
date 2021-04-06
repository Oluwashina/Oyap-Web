import * as actionTypes from "../actions/actionTypes";

const initState = {
  isAuthenticated: false,
  token: '',
  firstname: "",
  lastname: "",
  id: "",
  email: "",
  phoneNumber: "",
  isVerified: false,
  isEnabled: false,
  walletBalance: "",
  role: null,
  resetcode: false,
  isLoading: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
          localStorage.setItem("token", action.data.token)
          return {
              ...state,
              isAuthenticated: true,
              token: action.data.token,
              firstname: action.data.profile.firstName,
              lastname: action.data.profile.lastName,
              email: action.data.profile.email,
              role: action.data.profile.role,
              id: action.data.profile.id,
              phoneNumber: action.data.profile.phoneNumber,
              isVerified: action.data.profile.isVerified,
              isEnabled: action.data.profile.isEnabled,
              walletBalance: action.data.profile.walletBalance,
          }
      case 'LOGIN_FAIL':
        return {
            ...state,
            isAuthenticated: false,
        }
    case 'logout':
          return {
              ...state,
              isAuthenticated: false,
              token: '',
              firstname: "",
              lastname: "",
              email: "",
              id: "",
              phoneNumber: "",
              isVerified: false,
              isEnabled: false,
              walletBalance: "",
              role: null
          }
      case 'SIGNUP_SUCCESS':
        return{
          ...state,
        }
    case 'SIGNUP_FAIL':
      return{
        ...state
      }
    case 'PROFILE_UPDATE':
      return{
        ...state
      }
    case  'PROFILE_ERROR':
      return{
        ...state
      }
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
