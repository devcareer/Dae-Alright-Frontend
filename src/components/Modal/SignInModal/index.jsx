import React, { Component } from "react";
import CustomModal from "../CustomModal";
import "./index.scss";
import Button from "../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGooglePlusG
} from "@fortawesome/free-brands-svg-icons";
import { signIn } from '../../../redux/actions/user.signin'


class SignInModal extends Component {
  constructor(){
    super()

    this.state={
      SignInEmail: '',
      SignInPassword: ''
    }
  }
  
  onEmailChange = e =>{
    this.setState({SignInEmail: e.target.value})
    
  }
  onPasswordChange = e =>{
    this.setState({SignInPassword: e.target.value})
    
  }
  
  onloginSubmit=async (e)=>{
    e.preventDefault()
   const {SignInEmail, SignInPassword} = this.state;
    const showAlert=(message, className)=> {
      
      const alert = document.createElement('alert');
      alert.className = `alert ${className}`;
      alert.appendChild(document.createTextNode(message));
      const container = document.querySelector('.form-container');
      const form = document.querySelector('.form');
      container.insertBefore(alert, form);
    }
    if(SignInEmail && SignInPassword){
     let error = document.querySelector('.alert')
     console.log('Error!', error)
     if (error){
        error.remove()
     }
      
      await fetch('https://dae-alright-staging.herokuapp.com/auth/signin',{
      method: 'post',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.SignInEmail,
        password: this.state.SignInPassword
      })
    })
    .then(response=> response.json())
    .then(response=> {
      if(response.status==='success'){
        console.log('Welldone Genius you rememebered your login credentials!')

      }
      else
      showAlert('Incorrect Email or Password', alert)
      }
    
    )
  }
else{
    showAlert('Please Fill in all fields', alert)
}
  }

  

render(){
  
const btnStyles = {
  background: "#D6DB46",
  borderRadius: 0,
  color: "#FFF",
  padding: "0 1.5em",
  width: "93%",
  height: "3em",
  margin: "1em 0"
};

const inputStyles = {
  borderRadius: 0,
  height: "3em"
};
const btnColorStyles = {
  width: "93%",
  height: "3em",
  color: "white",
  border: "none",
  margin: "0.2rem"
};

const titleJSX = () => (
  <React.Fragment>
    <h2 className="welcomeText__primary">Sign In</h2>
    <h5 className="welcomeText__secondary">Welcome back</h5>
  </React.Fragment>
);

const bodyJSX = () => (
  <React.Fragment>
     <div className="form-container">
    <div className='form'>
      <div className="form-input">
        <input
          type="text"
          placeholder="Email"
          className="form-control"
          required
          style={inputStyles}
          onChange={this.onEmailChange}
        />
      </div>

      <div className="form-input">
        <input
          
          type="password"
          placeholder="Password"
          className="form-control"
          style={inputStyles}
          required
          onChange={this.onPasswordChange}
        />
      </div>
      <p className="forgot-pswd">Forgot Password?</p>
      {this.props.signInLoading ?(
         <button
         disabled
         style={btnStyles}
         className="btn 
              bnt-lg form-control"
       >
       <div className="loader"></div>
         
       </button>

      ):(
      <button
        style={btnStyles}
        className="btn 
             bnt-lg form-control"
             onClick={this.onloginSubmit}
      >
        Login
        
      </button>
      <p className="not-signed-in">
        Not Signed In? <span className="sign-up">Sign Up</span>
      </p>
      <div className="btnCollection">
        <Button
          className="facebook-button"
          text={" Sign Up With Facebook"}
          style={btnColorStyles}
          icons={
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="lg"
              className="iconClass"
            />
          }
        /> 
         <Button
          className="google-button"
          text={" Sign Up With Google"}
          style={btnColorStyles}
          icons={
            <FontAwesomeIcon
              icon={faGooglePlusG}
              size="lg"
              className="iconClass"
            />
          }
        />
      </div>
    </div>
    </div>
  </React.Fragment>
);
return <CustomModal title={titleJSX} body={bodyJSX} />;
}
};
const mapStateToProps =(state)=>{
 
  const {signInError, signInLoading, signInSuccess, showSignIn} = state.userReducer
  return {
    signInError,
    signInLoading,
    signInSuccess,
    showSignIn
  }
}


export default SignInModal
