import React from "react";
import "../../../App.css";
import "./input.css";

const Input = (props) => {
  return (
    <div className="container input-wrapper dp-flex">
      <input
        type={props.type}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

export default Input;
