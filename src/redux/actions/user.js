import {
  SIGNIN_ACTION_SUCCESS,
  SIGNIN_ACTION_FAIL,
  SIGNIN_ACTION_LOADING,
  TOGGLE_SIGNIN,
  GOOGLE_SIGNIN_ACTION_SUCCESS,
  FACEBOOK_SIGNIN_ACTION_SUCCESS,
} from "../constants/actionTypes";

const facebookSignInAction = payload => {
  return {
    type: FACEBOOK_SIGNIN_ACTION_SUCCESS,
    user: payload.user,
    token: payload.token
  };
};

const googleSignInAction = payload => {
  return {
    type: GOOGLE_SIGNIN_ACTION_SUCCESS,
    user: payload.user,
    token: payload.token
  };
};

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

const googleSignInActionSuccess = message => {
  return {
    type: GOOGLE_SIGNIN_ACTION_SUCCESS,
    message
  };
};

const facebookSignInActionSuccess = message => {
  return {
    type: FACEBOOK_SIGNIN_ACTION_SUCCESS,
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

export const googleSignIn = () => {
  return async dispatch => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/google`, {
      method: "get",
      headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(
      response =>
        response.status === "success"
          ? (
            dispatch(googleSignInAction(response.data)),
            dispatch(googleSignInActionSuccess("Login Success!")),
            setTimeout(() => {
              window.location.reload(true);
            }, 2000))
          : dispatch(signInLoading(false)),
      dispatch(signInActionFail("Login Error")),
      setTimeout(() => {
        dispatch(signInActionFail(false));
      }, 1000)
    );
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
        .then(
          response =>                                            
            response.status === "success"
              ? (console.log(
                  "Welldone Genius you rememebered your login credentials!"
                ),
                dispatch(signInAction(response.data)),
                dispatch(signInActionSuccess("Login Success!")),
                setTimeout(() => {
                  window.location.reload(true);
                }, 3000))
              : dispatch(signInLoading(false)),
          dispatch(signInActionFail("Invalid Email or Password")),
          setTimeout(() => {
            dispatch(signInActionFail(false));
          }, 1000)
        );
    } else {
      dispatch(signInActionFail("Please fill all fields"));
      setTimeout(() => {
        dispatch(signInActionFail(false));
      }, 3000);
    }
  };
};


export const facebookSignIn = () => {
  return async dispatch => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/facebook`, {
      method: "get",
      headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(
      response =>
        response.status === "success"
          ? (
            dispatch(facebookSignInAction(response.data)),
            dispatch(facebookSignInActionSuccess("Login Success!")),
            setTimeout(() => {
              window.location.reload(true);
            }, 2000))
          : dispatch(signInLoading(false)),
      dispatch(signInActionFail("Login Error")),
      setTimeout(() => {
        dispatch(signInActionFail(false));
      }, 1000)
    );
  };
};
