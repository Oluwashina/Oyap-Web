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
  billingDetails: {},
  pickUpDetails: {},
  profilePic: "",
  role: null,
  resetcode: false,
  isLoading: false,
  photoloader: false,
  forgot_success: false
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
              billingDetails: action.data.profile.billingDetails,
              profilePic: action.data.profile.profilePic,
              pickUpDetails: action.data.profile.pickUpDetails,
          }
      case 'LOGIN_FAIL':
        return {
            ...state,
            isAuthenticated: false,
            token: ""
        }
    case 'logout':
      localStorage.removeItem("token")
      return{
        ...state,
        isAuthenticated: false,
        token: "",
        firstname: "",
        lastname: "",
        id: "",
        email: "",
        phoneNumber: "",
        isVerified: false,
        isEnabled: false,
        walletBalance: "",
        billingDetails: {},
        pickUpDetails: {},
        profilePic: "",
        role: null
      }
    case 'UserById':
      return{
        ...state,
        walletBalance: action.data.walletBalance
      }
      case 'SIGNUP_SUCCESS':
        return{
          ...state,
        }
    case 'SIGNUP_FAIL':
      return{
        ...state
      }
    case 'FORGOT_SUCCESS':
      return{
        ...state,
        forgot_success: false
      }
    case 'FORGOT_ERROR':
      return{
        ...state,
        forgot_success: true
      }
    case 'PROFILE_UPDATE':
      return{
        ...state,
        billingDetails: {
          store: action.data.store,
          address: action.data.street,
          state: action.data.state,
          city: action.data.city,
          phone: action.data.phone,
         }
      }
    case 'PICKUP_UPDATE':
      return{
        ...state,
        pickUpDetails: {
          store: action.data.store,
          address: action.data.street,
          state: action.data.state,
          city: action.data.city,
          phone: action.data.phone,
         }
      }
    case 'PROFILE_ERROR':
      return{
        ...state
      }
     case 'PhotoLoader':
        return{
            ...state,
            photoloader: true
        }
    case 'StopPhotoLoader':
        return{
            ...state,
            photoloader: false
      }
   case 'profilePicture':
        return{
            ...state,
            profilePic: action.image   
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
