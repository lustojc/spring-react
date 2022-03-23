import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import MobileMenu from "../../MobileMenu/MobileMenu";
import logo from "../../../assets/img/spring-logo.svg";
import "./header.css";
import { MenuItems } from "../MenuItems/MenuItems";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/reducers/authReducer";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.isAuth)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobile]);
  
  return (
    <header>
      <nav className="nav">
        <div className="container nav-wrapper dp-flex jc-betw">
          <a className="mg-bt_20" href="">
            <img className="logo" src={logo} alt="Spring-logo" />
          </a>
          
          <div id="navbar" className={isMobile ? "navbar-mobile" : "navbar"}>
            <div className="dp-flex jc-betw" id="dropdown">
              {isMobile ? (
                <MobileMenu />
              ) : 
              (
                MenuItems.map((el, index) => {
                  return (
                    <Dropdown
                      element={el}
                      content={el.options}
                      id={el.id}
                      key={index}
                    />
                  );
                })
              )}
              {isAuth && <div className="exit__btn" onClick={ ()=> dispatch(logout())}>Выйти</div>}
            </div>
          </div>
        </div>
      </nav>
      <div
        onClick={() => setIsMobile(!isMobile)}
        className={isMobile ? "burger-menu open" : "burger-menu"}
      >
        {isMobile ? (
          <div className="burger-line"></div>
        ) : (
          <div className="burger-line dp-hide"></div>
        )}
      </div>
    </header>
  );
};

export default Header;
