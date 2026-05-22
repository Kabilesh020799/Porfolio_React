import React, { useState, useEffect } from "react";
import "./Navigation.scss";
import { Link } from "react-scroll";
import { navigations } from "../../data";

function Navigation({ theme, onThemeToggle }) {
  const [click, setClick] = useState(false);
  const [show, handleShow] = useState(false);

  const toggleMenu = () => {
    setClick((isOpen) => !isOpen);
  };

  const closeMenu = () => {
    setClick(false);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={`nav-wrapper ${show ? "nav_back" : ""}`}>
      <nav className="navbar u-flex u-align-center u-justify-between">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-150}
          onClick={closeMenu}
        >
          <span
            className={`heading ${show && "head_gold"}`}
          >
            KABILESH
          </span>
        </Link>
        <button
          type="button"
          className={`menu-toggle ${click ? "is-active" : ""}`}
          id="mobile-menu"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={click}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav no-search u-list-reset u-flex u-align-center u-justify-between u-stack-on-nav u-justify-start-on-nav u-text-center-on-nav ${click ? "mobile-nav" : ""}`}>
          {navigations?.map((navigation) => (
            <li className="nav-item" key={navigation.path}>
              <Link
                activeClass="active-nav"
                to={navigation.path}
                spy={true}
                smooth={true}
                duration={500}
                offset={navigation?.path === "projects" ? -180 : -110}
                onClick={closeMenu}
              >
                {navigation?.name}
              </Link>
            </li>
          ))}
          <li className="nav-item nav-item--theme">
            <button
              type="button"
              className={`theme-toggle theme-toggle--${theme}`}
              onClick={onThemeToggle}
              aria-pressed={theme === "light"}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              <span className="theme-toggle__icon" aria-hidden="true">
                {theme === "dark" ? "☾" : "☀"}
              </span>
              <span className="theme-toggle__track" aria-hidden="true">
                <span className="theme-toggle__thumb"></span>
              </span>
              <span className="theme-toggle__label">
                {theme === "dark" ? "Dark" : "Light"}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
