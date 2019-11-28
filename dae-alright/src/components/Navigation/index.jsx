import React from "react";
import "../Navigation/index.scss";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import AuthNav from "../Navigation/AuthNav";
import { Button } from "react-bootstrap";
import { connect } from 'react-redux'
<<<<<<< HEAD
import {toggleSignIn} from '../../redux/actions/user.signin'
=======
import {toggleSignIn} from '../../redux/actions/user'
>>>>>>> 8d6af9f0be04ab5e3820c4f16d3bb5b1c58c8932
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
        <Button variant="primary" size="sm" className="navi-text" onClick={()=> props.toggleSignIn(true)}>
          LOGIN/SIGNUP
        </Button>
      ) : (
        <AuthNav />
      )}
    </nav>
  </div>
);
const mapStateToProps = state =>{
  const {showSignIn} = state.userReducer
return{
  showSignIn
}
}

 export default connect(mapStateToProps, {toggleSignIn})(Navigation) ;
