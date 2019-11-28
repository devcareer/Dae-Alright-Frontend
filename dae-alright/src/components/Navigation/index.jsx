import React from "react";
import "../Navigation/index.scss";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import AuthNav from "../Navigation/AuthNav";
import { Button } from "react-bootstrap";
import SignUpModal from "../Modal/SignUpModal";
import { connect } from "react-redux";
import { toggleSignUp } from "../../redux/actions/user";

const Navigation = props => (
  <div className="navigation">
    <nav className="navbar navbar-light hamburger">
      <a className="navbar-brand" href="index.jsx">
        <img
          src={logo}
          width="100"
          height="100"
          className="d-inline-block align-top logo"
          alt="DaeAlright logo"
        />
      </a>

      <img src={cart} className="shopping-cart" alt="shopping-bag" />
      {!props.isAuthenticated ? (
        <Button
          variant="primary"
          size="sm"
          className="navi-text"
          onClick={() => props.toggleSignUp(true)}
        >
          <SignUpModal />
          LOGIN/SIGNUP
        </Button>
      ) : (
        <AuthNav />
      )}
    </nav>
  </div>
);

const maStateToProps = state => {
  const { showSignUp } = state.userReducer;
  return {
    showSignUp
  };
};

export default connect(maStateToProps, { toggleSignUp })(Navigation);
