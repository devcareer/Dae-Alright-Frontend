import React, { Component } from "react";
import {connect} from 'react-redux'
import CustomModal from "../CustomModal";
import "./index.scss";
import Button from "../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGooglePlusG
} from "@fortawesome/free-brands-svg-icons";
import { signIn } from '../../../redux/actions/user'


class SignInModal extends Component {
  constructor(){
    super()
    this.state={
      email: '',
      password: ''
    }
  }
  
  onEmailChange = e =>{
    this.setState({email: e.target.value})
    
  }
  onPasswordChange = e =>{
    this.setState({password: e.target.value})
    
  }
  
  onloginSubmit=(e)=>{
    e.preventDefault()
   this.props.signIn(this.state.password,this.state.email)
   
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
  <React.Fragment >
    <h2 className="welcomeText__primary">Sign In</h2>
    <h5 className="welcomeText__secondary">Welcome back</h5>
  </React.Fragment>
);

const bodyJSX = () => (
  <React.Fragment>
     <div className='form'>
{
this.props.signInError && <div className='alert alert-danger' >{this.props.signInError }</div>}
{this.props.signInSuccess && <div className="alert alert-success">{this.props.signInSuccess}</div>}
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
        
      </button>)}
      
      
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
 
  </React.Fragment>
);
return <CustomModal show={this.props.showSignIn} title={titleJSX} body={bodyJSX} />;
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


export default connect(mapStateToProps, {signIn})(SignInModal)
