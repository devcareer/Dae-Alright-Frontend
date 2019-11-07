import React from "react";
import CustomModal from "../CustomModal";
import "./index.scss";

const btnStyles = {
    background: "#D6DB46",
    borderRadius: 0,
    color: "#FFF",
    padding: "0 1.5em",
    width: "93%",
    height: "3em",
    margin: "1em 0"
};
  
const h2forgot = {
    color: "rgba(0, 0, 0, 0.6)",
    marginTop: "2rem",
    fontSize: "2.5rem",
};

const Pforgot = {
    color: "rgba(0, 0, 0, 0.4)",
    marginTop: "1rem",
    
};
  
  const inputStyles = {
    borderRadius: 0,
    height: "3em"
  };
  
  const titleJSX = () => (
    <React.Fragment>
      <h2 style={h2forgot}>Forgot Password</h2>
      <p style={Pforgot}>worry no more we have you covered kindly input your mailing address you use in registration with us and let’s so the work</p>
    </React.Fragment>
  );
  
  const bodyJSX = () => (
    <React.Fragment>
      <form >
        
        <div className="form-input">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            style={inputStyles}
          />
        </div>
        
        <button
        style={btnStyles}
        className="btn 
             bnt-lg form-control"
      >
        Sign Up
      </button>
      </form>
    </React.Fragment>
  );
  
  const ForgotPasswordModal = () => {
    return <CustomModal title={titleJSX} body={bodyJSX} />;
  };
  
  export default ForgotPasswordModal;
  