import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { Link }from "react-scroll";
import navigations from "./constant";

import ResumePdf from '../../assets/KabileshResumee.pdf';

function Navigation({ checkedB }) {
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
          offset={-150}
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
        <ul
          class={`nav no-search ${click ? "mobile-nav" : ""} ${
            !checkedB ? "ul_tomato" : "ul_normal"
          }`}
        >
          {
            navigations?.map((navigation) => (
              <li class="nav-item">
                <Link
                  to={navigation.path}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={navigation?.path === 'projects' ? -180 : -110}
                  onClick={clicked}
                >
                  {navigation?.name}
                </Link>
              </li>
            ))
          }
          <li className="nav-item">
            <a
              href={ResumePdf}
              download="Kabilesh_Resume"
              target="_blank"
              rel="noreferrer"
              className="resume"
            >
              <button className="btn-resume">
                Resume
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
