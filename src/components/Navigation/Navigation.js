import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { Link, animateScroll as scroll } from "react-scroll";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";

function Navigation({ checkedB, setCheckedB }) {
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

  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: "white",
        "& + $track": {
          backgroundColor: "tomato",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#52d869",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: "#0a192f",
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  const handleChange = (event) => {
    setCheckedB(event.target.checked);
  };

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
        <ul
          class={`nav no-search ${click ? "mobile-nav" : ""} ${
            !checkedB ? "ul_tomato" : "ul_normal"
          }`}
        >
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
          <li className="nav-item">
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={checkedB}
                  onChange={handleChange}
                  name="checkedB"
                />
              }
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
