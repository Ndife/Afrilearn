import React from "react";

import "./form-input.styles.css";

const FormInput = ({ handleChange, label, value, ...otherProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      value={value}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${otherProps.length ? "shrink" : ""} || ${value.length ? "left" : ""
          } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
