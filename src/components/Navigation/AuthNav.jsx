import React from "react";
import {Navbar, Nav} from "react-bootstrap"
import "../Navigation/AuthNav.scss"

function AuthNav() {
  return (
    <div className="nav-left">

      <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="nav-bar">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   
   
    <Nav className="mr-auto">
    <Nav.Link className="nav-link" href="#">Overview</Nav.Link>
      <Nav.Link className="nav-link"  href="/dashboard/information">Account Info</Nav.Link>
      <Nav.Link className="nav-link" href="/dashboard/order">Orders</Nav.Link>
      <Nav.Link className="nav-link" href="/dashboard/refund">Refunds</Nav.Link>
      <Nav.Link className="nav-link" href="#">Message Center</Nav.Link>
      <Nav.Link className="nav-link" href="#">Track Order</Nav.Link>
      <Nav.Link className="nav-link" href="/dashboard/statistics">Statistic</Nav.Link>
      <Nav.Link className="nav-link" href="#">Help</Nav.Link>
      <Nav.Link className="nav-link" href="#">Log-out</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

        </div>
  );
}
export default AuthNav