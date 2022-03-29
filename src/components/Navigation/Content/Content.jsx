import React from "react";

const Content = ({ element, content, devTools }) => {
  return (
    <>
      {content.map((el, index) => {
        return (
          <a key={index} href="#">
            {el}
          </a>
        );
      })}
      {element.devTools ? (
        <>
          <div>Development Tools</div>
          {devTools.map((el, i) => (
            <a key={i} href="#">
              {el}
            </a>
          ))}
        </>
      ) : null}
    </>
  );
};

export default Content;
