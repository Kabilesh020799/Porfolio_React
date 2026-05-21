import React from "react";
import classes from "./Home.module.css";
import "./Home.css";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/Dp.JPG";
import ResumePdf from "../../assets/Kabilesh27Resume.pdf";

function Body() {
  return (
    <div className={classes.body} id="home">
        <img
          src={profile}
          className={classes.profile}
          alt="Kabilesh Ravichandran"
        />

        <h1 className={classes.heading}>KABILESH</h1>
        <h3 className={classes.heading1}>
          Software engineer focused on{" "}
          <TypeAnimation
            repeat={Infinity}
            wrapper="b"
            sequence={[
              "full-stack products",
              1000,
              "frontend systems",
              1000,
              "reliable web apps",
              1000,
              "ML-enabled tools",
              1000,
            ]}
          ></TypeAnimation>
        </h3>
        <p className={classes.intro}>
          I build thoughtful, production-ready experiences with React, Vue,
          Node.js, cloud tooling, and a strong eye for usability.
        </p>
        <div className={classes.actions}>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-150}
            className={classes.primaryAction}
          >
            View projects
          </Link>
          <a
            href={ResumePdf}
            download="Kabilesh_Resume"
            target="_blank"
            rel="noreferrer"
            className={classes.secondaryAction}
          >
            Resume
          </a>
        </div>
        <div className="footer-social-icons">
          <ul className="social-icons" aria-label="Social profiles">
            <li>
              <a
                href="https://www.linkedin.com/in/kabileshravi27/"
                className="social-icon"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="fa fa-linkedin ls"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Kabilesh020799"
                className="social-icon"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="fa fa-github ls"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:kabilesh020799@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                {" "}
                <i className="fa fa-envelope ls"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="container-arrow scroll-to">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-150}
          >
            <span>
              <i className="fa fa-angle-down" aria-hidden="true"></i>{" "}
            </span>
          </Link>
        </div>
    </div>
  );
}

export default Body;
