import React from "react";
import "../../../App.css";
import "./input.css";

const Input = ({ value, setValue }) => {
  return (
    <div className="container input-wrapper dp-flex">
      <h3>Let's Search some information!</h3>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name="search"
        id="search"
      ></input>
    </div>
  );
};

export default Input;
