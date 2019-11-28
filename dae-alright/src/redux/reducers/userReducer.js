import {
  SIGNIN_ACTION_SUCCESS,
  SIGNIN_ACTION_FAIL,
  SAMPLE_ACTION,
  SIGNIN_ACTION,
  SIGNIN_ACTION_LOADING,
  TOGGLE_SIGNIN
} from "../constants/actionTypes";

const initialState = {
  user: {
    address: "",
    createdAt: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    id: "",
    updatedAt: ""
  },
  token: "",
  signInError: "",
  signInLoader: false,
  signInSuccess: "",
  showSignIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return action.payload;

    case SIGNIN_ACTION:
      return {
        ...state,
        user: action.user,
        token: action.token,
        signInError: "",
        signInLoader: true,
        signInSuccess: ""
      };
    case SIGNIN_ACTION_FAIL:
      return {
        ...state,
        signInError: action.message,
        signInLoader: false,
        user: ''
      };
    case SIGNIN_ACTION_SUCCESS:
      return {
        ...state,
        signInError: action.message,
        signInLoader: false
      };

    case SIGNIN_ACTION_LOADING:
      return {
        ...state,
        signInLoading: action.loader
      };
      case TOGGLE_SIGNIN:
          return{
              ...state,
              showSignIn:action.showSignIn
          }
    default:
      return state;
  }
};
