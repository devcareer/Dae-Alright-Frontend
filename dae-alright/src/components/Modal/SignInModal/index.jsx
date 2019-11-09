import React from "react";
import CustomModal from "../CustomModal";
import "./index.scss";
import Button from "../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGooglePlusG
} from "@fortawesome/free-brands-svg-icons";

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
    <form>
      <div className="form-input">
        <input
          type="text"
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
      <p className="forgot-pswd">Forgot Password?</p>
      <button
        style={btnStyles}
        className="btn 
             bnt-lg form-control"
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
    </form>
  </React.Fragment>
);

const SignInModal = ({ user }) => {
  return <CustomModal title={titleJSX} body={bodyJSX} />;
};

export default SignInModal;
