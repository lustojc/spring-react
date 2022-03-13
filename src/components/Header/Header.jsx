import React from "react";
import { MenuItems } from "./MenuItems";
import logo from "../../assets/img/spring-logo.svg";
import "./header.css";
import Dropdown from "./Dropdown";
const Header = () => {
    

  return (
    <header>
      <nav className="nav">
        <div className="container nav-wrapper dp-flex jc-betw">
          <a href="">
            <img className="logo" src={logo} alt="Spring-logo" />
          </a>
          <div id="navbar" className="navbar hide">
            <div className="dp-flex jc-betw" id="dropdown">
              {MenuItems.map((el, index) => {
                return <Dropdown element={el} content={el.options} id={el.id} key={index} />;
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
