import React from "react";
import PropTypes from "prop-types";
import "./Button.style.scss";


const Button = ({text, style, icons, className}) => (
  <button
      className={${className}}
      style={{
      ...style,
      padding: '3px',
  }}>
      { icons }
      { text }
   </button>
)
Button.propType = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
