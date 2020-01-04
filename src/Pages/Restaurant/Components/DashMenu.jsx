import React from "react";
import {
  faCommentDots,
  faConciergeBell,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DasMenu.scss";

class DashMenu extends React.Component {
  render() {
    return (
      <div className="dashmenu-wrapper">
        <button className="dash-button">
          {" "}
          <FontAwesomeIcon icon={faConciergeBell} /> Menu
        </button>

        <button className="dash-button">
          <FontAwesomeIcon icon={faCommentDots} /> Reviews (1)
        </button>
        <button className="dash-button">
          {" "}
          <FontAwesomeIcon icon={faInfoCircle} /> Restaurant Info
        </button>
      </div>
    );
  }
}

export default DashMenu;
