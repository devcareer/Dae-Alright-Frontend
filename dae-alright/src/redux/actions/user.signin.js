import {
  SIGNIN_ACTION_SUCCESS,
  SIGNIN_ACTION_FAIL,
  SIGNIN_ACTION_LOADING,
  TOGGLE_SIGNIN
} from "../constants/actionTypes";

const signInAction = payload => {
  return {
    type: SIGNIN_ACTION_SUCCESS,
    user: payload.user,
    token: payload.token
  };
};

const signInActionFail = message => {
  return {
    type: SIGNIN_ACTION_FAIL,
    message
  };
};

const signInActionSuccess = message => {
  return {
    type: SIGNIN_ACTION_SUCCESS,
    message
  };
};
const signInLoading = loader => {
  return {
    type: SIGNIN_ACTION_LOADING,
    loader
  };
};
export const toggleSignIn = showSignIn => {
  return {
    type: TOGGLE_SIGNIN,
    showSignIn
  };
};

export const signIn = (password, email) => {
  return async dispatch => {
    if (email && password) {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/user/signin`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password
        })
      })
        .then(response => response.json())
        .then(response =>
          response.status === "success"
            ? (dispatch(signInAction(response.data)),
              dispatch(signInActionSuccess("Login Success!")),
              dispatch(signInLoading(true)),
              setTimeout(() => {
                window.location.reload(true);
              }, 2000))
            : (dispatch(signInLoading(true)),
              dispatch(signInActionFail("Invalid Email or Password")),
              dispatch(signInLoading(false)))
        );
    } else {
      dispatch(signInActionFail("Please fill all fields"))
      setTimeout(() => dispatch(signInActionFail(false))
, 1000)
     
    }
  }
}
