import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Navigation() {
  const [click, setClick] = useState(false);
  const [show, handleShow] = useState(false);
  const clicked = () => {
    setClick(!click);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.addEventListener("scroll");
    };
  }, []);

  return (
    <div class={`nav-wrapper ${show && "nav_back"}`}>
      <div class="grad-bar"></div>
      <nav class="navbar">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          onClick={clicked}
        >
          <h1
            style={{ cursor: "pointer" }}
            className={`heading ${show && "head_gold"}`}
          >
            KABILESH
          </h1>
        </Link>
        <div
          class={`menu-toggle ${click ? "is-active" : ""}`}
          id="mobile-menu"
          onClick={clicked}
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class={`nav no-search ${click ? "mobile-nav" : ""}`}>
          <li class="nav-item">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              onClick={clicked}
            >
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              onClick={clicked}
            >
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              offset={-110}
              onClick={clicked}
            >
              Skills
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={clicked}
            >
              Experience
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              onClick={clicked}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={clicked}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
