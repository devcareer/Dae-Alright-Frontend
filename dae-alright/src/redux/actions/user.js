import { SIGNIN_ACTION, SIGNIN_ACTION_FAIL } from '../constants/actionTypes'

const signInAction = (payload) => {
  return {
    type: SIGNIN_ACTION,
    user: payload.user,
    token: payload.token
  }
}

const signInActionFail = (message) => {
  return {
    type: SIGNIN_ACTION_FAIL,
    message
  }
}

export const signIn = (password,email) => {
  console.log(process.env)
  return async (dispatch) => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/signin`,{
      method: 'post',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(response=> response.json())
    .then(response=> {

      if(response.status==='success'){
        console.log('Welldone Genius you rememebered your login credentials!');
        document.querySelector('.submit').disabled = true;
        dispatch(signInAction(response.data))

      }
      else {
        dispatch(signInActionFail('Incorrect Email or Password'))
      }
    
  
  })
}}
