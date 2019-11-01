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

const inputStyles = {
  borderRadius: 0,
  height: "3em"
};

const titleJSX = () => (
  <React.Fragment>
    <h2>Sign Up</h2>
    <h6>
      Hi,Welcome fill in the input to <br /> proceed shopping
    </h6>
  </React.Fragment>
);

const bodyJSX = () => (
  <React.Fragment>
    <form className="body--form">
      <div className="form-input">
        <input
          type="text"
          placeholder="Full Name"
          className="form-control"
          style={inputStyles}
        />
      </div>
      <div className="form-input">
        <input
          type="email"
          placeholder="Email"
          className="form-control"
          style={inputStyles}
        />
      </div>
      <div className="form-input">
        <input
          type="password"
          placeholder="Password"
          className="form-control"
          style={inputStyles}
        />
      </div>
      <div className="form-input">
        <input
          type="password"
          placeholder="Confirm Password"
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
      <p>
        Already Sign Up? <span>Sign In</span>
      </p>
    </form>
  </React.Fragment>
);

const SignUpModal = () => {
  return <CustomModal title={titleJSX} body={bodyJSX} />;
};

export default SignUpModal;
