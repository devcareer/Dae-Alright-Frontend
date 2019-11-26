import React, {useState} from "react";
import "../Navigation/index.scss";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import AuthNav from "../Navigation/AuthNav";
import SignUpModal from "../Modal/SignUpModal";
import { Button } from "react-bootstrap";

// const [show, setShow] = useState(false);

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);


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
        <Button variant="primary"  size="sm" className="navi-text">
          <SignUpModal />
          LOGIN/SIGNUP
        </Button>
      ) : (
        <AuthNav />
      )}
    </nav>
  </div>
);

export default Navigation;
