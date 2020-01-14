import React, { Component } from "react";
import { connect } from "react-redux";
import CustomModal from "../CustomModal";
import "./index.scss";
import { signUp } from "../../../redux/actions/user";

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

class SignUpModal extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: ""
    };
  }

  handleSignUpButton = event => {
    event.preventDefault();
    this.props.signUp(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password,
      this.state.phone
    );
  };

  titleJSX = () => (
    <React.Fragment>
      <h2>Sign Up</h2>
      <h6>
        Hi,Welcome fill in the input to <br /> proceed shopping
      </h6>
    </React.Fragment>
  );

  bodyJSX = () => (
    <React.Fragment>
      <form>
        {this.props.signUpError && (
          <div className="alert alert-danger ">{this.props.signUpError}</div>
        )}
        {this.props.signUpSuccess && (
          <div className="alert alert-success">{this.props.signUpSuccess}</div>
        )}
        <div className="form-input">
          <input
            type="text"
            placeholder="First Name"
            className="form-control"
            style={inputStyles}
            required
            onChange={event => {
              this.setState({ firstName: event.target.value });
            }}
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            placeholder="Last Name"
            className="form-control"
            style={inputStyles}
            required
            onChange={event => {
              this.setState({ lastName: event.target.value });
            }}
          />
        </div>
        <div className="form-input">
          <input
            type="email"
            placeholder="Email Address"
            className="form-control"
            style={inputStyles}
            required
            onChange={event => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>
        <div className="form-input">
          <input
            type="password"
            placeholder=" Password"
            className="form-control"
            style={inputStyles}
            required
            onChange={event => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>
        <div className="form-input">
          <input
            type="number"
            placeholder=" Phone Number"
            className="form-control"
            style={inputStyles}
            required
            onChange={event => {
              this.setState({ phone: event.target.value });
            }}
          />
        </div>
        {this.props.signUpLoader ? (
          <button
            style={btnStyles}
            disabled
            className="btn 
        bnt-lg form-control"
          >
            <div className="loader"></div>
          </button>
        ) : (
          <button
            style={btnStyles}
            className="btn 
        bnt-lg form-control"
            onClick={event => this.handleSignUpButton(event)}
          >
            Sign Up
          </button>
        )}
        <p>
          Already Sign Up? <span>Sign In</span>
        </p>
      </form>
    </React.Fragment>
  );

  render() {
    return (
      <CustomModal
        show={this.props.showSignUp}
        onHide={this.props.showSignUp}
        title={this.titleJSX}
        body={this.bodyJSX}
      />
    );
  }
}
const mapStateToProps = state => {
  const {
    signUpError,
    signUpSuccess,
    signUpLoader,
    showSignUp
  } = state.userReducer;
  return {
    signUpError,
    signUpLoader,
    signUpSuccess,
    showSignUp
  };
};

export default connect(mapStateToProps, { signUp })(SignUpModal);
