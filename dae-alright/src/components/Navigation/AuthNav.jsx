import React from "react";
import "../Navigation/AuthNav.scss";
const AuthNav = () => (
  <div className="nav-left">
    <nav className="nav-bar">
      <ul>
        <li>
          <a className="nav-link" href="">
            Overview
          </a>
        </li>
        <li>
          <a className="nav-link" href="">
            Account Info
          </a>
        </li>
        <li>
          <a className="nav-link" href="">
            Orders
          </a>
        </li>
        <li>
          <a className="nav-link" href="">
            Refunds
          </a>
        </li>
        <li>
          <a className="nav-link" href="">
            Message Center
          </a>
        </li>
        <li>
          <a className="nav-link" href="">
            Track Orders
          </a>
        </li>
        <li>
          <a className="nav-link" href="">
            Statistics
          </a>
        </li>
        <li>
          <a className="nav-link" href="">
            Help
          </a>
        </li>
        <li>
          <a className="nav-link" href="">
            Log-out
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default AuthNav;
