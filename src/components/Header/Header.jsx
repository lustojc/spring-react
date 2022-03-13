import React, { useEffect, useState } from "react";
import { MenuItems } from "./MenuItems";
import logo from "../../assets/img/spring-logo.svg";
import "./header.css";
import Dropdown from "./Dropdown";
import MobileMenu from "../MobileMenu/MobileMenu";


const Header = () => {
  
  const [isMobile, setIsMobile] = useState(false)
  
  

  useEffect(() => {
    if(isMobile){
    document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  },[isMobile] );

  return (
    <header>
      <nav className="nav">
        <div className="container nav-wrapper dp-flex jc-betw">
          <a className="mg-bt_20" href="">
            <img className="logo" src={logo} alt="Spring-logo" />
          </a>
          <div id="navbar" className={isMobile ? "navbar-mobile" : "navbar"}>
            <div className="dp-flex jc-betw" id="dropdown">
              {isMobile 
              ? <MobileMenu/>
              : MenuItems.map((el, index) => {
                return <Dropdown element={el} content={el.options} id={el.id} key={index} />;
              })
              }
            </div>
          </div>
        </div>
      </nav>
      <div onClick={()=> setIsMobile(!isMobile)} className={isMobile ? "burger-menu open" : "burger-menu"}>
          {isMobile ? <div className="burger-line"></div> : <div className="burger-line dp-hide"></div>}
      </div>
    </header>
  );
};

export default Header;
