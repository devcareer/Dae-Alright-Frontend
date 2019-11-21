import React, { Component } from "react";
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

class SignUpModal extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      isSubmit: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSignUpButton = event => {
    event.preventDefault();
    this.setState({ isSubmit: true });
    fetch("https://dae-alright-staging.herokuapp.com/auth/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ isSubmit: false });
        console.log(data);
      })
      .catch(error => {
        this.setState({ isSubmit: false });
        console.log(error);
      });
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
        <div className="form-input">
          <input
            type="text"
            placeholder="First Name"
            className="form-control"
            style={inputStyles}
            required
            name="firstName"
            value={this.state.firstName}
            onChange={event => this.handleChange(event)}
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            placeholder="Last Name"
            className="form-control"
            style={inputStyles}
            required
            name="lastName"
            value={this.state.lastName}
            onChange={event => this.handleChange(event)}
          />
        </div>
        <div className="form-input">
          <input
            type="email"
            placeholder="Email Address"
            className="form-control"
            style={inputStyles}
            required
            name="email"
            value={this.state.email}
            onChange={event => this.handleChange(event)}
          />
        </div>
        <div className="form-input">
          <input
            type="password"
            placeholder=" Password"
            className="form-control"
            style={inputStyles}
            required
            name="password"
            value={this.state.password}
            onChange={event => this.handleChange(event)}
          />
        </div>
        <div className="form-input">
          <input
            type="number"
            placeholder=" Phone Number"
            className="form-control"
            style={inputStyles}
            required
            name="phone"
            value={this.state.phone}
            onChange={event => this.handleChange(event)}
          />
        </div>
        {this.state.isSubmit ? (
          <button
            style={btnStyles}
            className="btn 
        bnt-lg form-control"
          >
            Please wait ...
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
    return <CustomModal title={this.titleJSX} body={this.bodyJSX} />;
  }
}

export default SignUpModal;
