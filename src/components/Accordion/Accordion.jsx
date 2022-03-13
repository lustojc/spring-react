import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./Accordion.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        {props.text === "Training" || props.text === "Support" ? (
          <p className="accordion__title">{props.text}</p>
        ) : (
          <>
            <p className="accordion__title">{props.text}</p>
            <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
          </>
        )}
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        {props.text === "Projects" ? (
          <>
            {props.content.map((el, index) => {
              return (
                <a
                  href="#"
                  key={index}
                  className="accordion__text"
                  dangerouslySetInnerHTML={{ __html: el }}
                />
              );
            })}
            <div className="devTools">Developer Tools</div>
            {props.dev.map((el, index) => {
              return (
                <a
                  href="#"
                  key={index}
                  className="accordion__text"
                  dangerouslySetInnerHTML={{ __html: el }}
                />
              );
            })}
          </>
        ) : (
          props.content.map((el, index) => {
            return (
              <a
                href="#"
                key={index}
                className="accordion__text"
                dangerouslySetInnerHTML={{ __html: el }}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Accordion;
