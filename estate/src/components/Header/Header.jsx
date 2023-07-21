import React, { useEffect, useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = (boy) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [show, setShow] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > 40) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.addEventListener("scroll", controlNavbar);
    };
  }, []);
  const scrollNavbar = () => {
    if (window.scrollY > 700) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollNavbar);
    return () => {
      window.addEventListener("scroll", scrollNavbar);
    };
  }, []);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <div>
      <section className={showNav ? "h-wrapper" : "h-hidden"}>
        <div
          className={
            show
              ? "flexCenter innerWidth h-container active"
              : "flexCenter innerWidth h-container"
          }
        >
          <img
            className="flexStart"
            src="./pics/logo.png"
            alt="logo"
            width={100}
          />

          <OutsideClickHandler
            onOutsideClick={() => {
              setMenuOpened(false);
            }}
          >
            <div
              className="flexCenter h-menu"
              style={getMenuStyles(menuOpened)}
            >
              <a href="#r-wrapper">Residencies</a>
              <a href="#v-wrapper">Our Value</a>
              {/* <a href="#cc-wrapper">Contact Us</a> */}
              <a href="#con-wrapper">Get Started</a>
              <button className="button">
                <a href="#cc-wrapper">Contact Us</a>
              </button>
            </div>

            <div
              className="menu-icon"
              onClick={() => {
                setMenuOpened((prev) => !prev);
              }}
            >
              <BiMenuAltRight size={30} />
            </div>
          </OutsideClickHandler>
        </div>
      </section>
    </div>
  );
};

export default Header;
