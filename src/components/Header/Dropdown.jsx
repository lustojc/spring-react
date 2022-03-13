import React, { useState } from "react";
import "../Header/header.css";
import Content from "./Content";

const Dropdown = ({ content, element, id}) => {


  let filteredTitles;
  if (element.options.length == 0) {
    filteredTitles = <p className="drop color-gr">{element.title}</p>;
  } else {
    filteredTitles = (
      <>
        <p className="drop">
          {element.title}
          <i className="arrow down"></i>
        </p>
        <div className="dropdown-content">
          <Content element={element} devTools={element.devTools} content={content} id={id} />
        </div>
      </>
    );
  }

  return (
    <div className="dropdown" key={element.id}>
      {filteredTitles}
    </div>
  );
};

export default Dropdown;
