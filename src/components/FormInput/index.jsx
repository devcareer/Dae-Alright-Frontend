import React from "react";
import PropTypes from "prop-types";
import "./formInput.style.css";

const FormInput = ({ placeholder, type, style, renderProps }) => {
  return (
    <input
      onChange={renderProps}
      className="input px-4"
      type={type}
      placeholder={placeholder}
      style={{
        ...style
      }}
    />
  );
};
FormInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default FormInput;
