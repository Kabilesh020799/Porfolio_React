import React, { useState, useEffect } from "react";
import "./Navigation.scss";
import { Link } from "react-scroll";
import { navigations } from "../../data";

function Navigation() {
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
      <nav className="navbar">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-150}
          onClick={closeMenu}
        >
          <span
            style={{ cursor: "pointer" }}
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
        <ul className={`nav no-search ${click ? "mobile-nav" : ""}`}>
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
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
