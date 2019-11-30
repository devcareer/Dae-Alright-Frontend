import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import "./signup-modal.styles.scss";

const btnStyles = {
  background: "#D6DB46",
  borderRadius: 0,
  color: "#FFF",
  padding: "0 1.5em",
  width: "93%",
  height: "3em",
  margin: "1em 0",
  hover: {
    background: "#D6DB48"
  }
};
const inputStyles = {
  borderRadius: 0,
  height: "3em"
};

const SignUpModal = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign-Up now
      </Button>

      <Modal show={show} onHide={handleClose} className="signup-modal">
        <Modal.Title>
          <h2>Sign Up</h2>
          <h6>
            Hi,Welcome fill in the input to <br /> proceed shopping
          </h6>
        </Modal.Title>

        <Modal.Body className="modal__body">
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
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignUpModal;
