import React from "react";
import PropTypes from "prop-types";
import "./Button.style.scss";


const Button = ({text, style, icons, className}) => (

Button.propType = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default Button;
