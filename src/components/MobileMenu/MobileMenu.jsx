import React from "react";
import Accordion from "../common/Accordion/Accordion";
import { MenuItems } from "../Navigation/MenuItems/MenuItems";
import "./mobileMenu.css";

const MobileMenu = () => {
  return (
    <div className="nav-mobile">
      {MenuItems.map((el) => {
        return (
          <Accordion
            key={el.id}
            text={el.title}
            dev={el.devTools}
            content={el.options}
          />
        );
      })}
    </div>
  );
};

export default MobileMenu;
