import React from "react";
import "../Navigation/index.scss";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import AuthNav from "../Navigation/AuthNav";e 
import { Button } from "react-bootstrap";

const Navigation = props => (
  <div className="navigation">
    <nav class="navbar navbar-light hamburger">
      <a class="navbar-brand" href="#">
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
        <Button variant="primary" size="sm" className="navi-text">
          LOGIN/SIGNUP
        </Button>
      ) : (
        <AuthNav />
      )}
    </nav>
  </div>
);

export default Navigation;
