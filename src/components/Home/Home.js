import React from "react";
import classes from "./Home.module.css";
import Fade from "react-reveal/Fade";
import Typical from "react-typical";
import "./Home.css";
import { Link } from "react-scroll";

function Body() {
  return (
    <Fade left>
      <div className={classes.body} id="home">
        <h1 className={classes.heading}>KABILESH</h1>
        <h3 className={classes.heading1}>
          I am{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Student 👨‍🎓",
              1000,
              "Web Developer 👨‍💻⚛️",
              1000,
              "ML Aspirant 💻",
              1000,
              "Freelancer 🤖",
              1000,
              "Coding Instructor 🧑‍",
              1000,
              "Cricketer 🏏",
              1000,
            ]}
          ></Typical>
        </h3>
        <div class="footer-social-icons">
          <ul class="social-icons">
            <li>
              <a
                href="https://www.facebook.com/ravichandran.kabilesh/"
                class="social-icon"
              >
                {" "}
                <i class="fa fa-facebook ls"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kabilesh_ravichandran/"
                class="social-icon"
              >
                {" "}
                <i class="fa fa-instagram ls"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kabileshravi27/"
                class="social-icon"
              >
                {" "}
                <i class="fa fa-linkedin ls"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Kabilesh020799" class="social-icon">
                {" "}
                <i class="fa fa-github ls"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.hackerrank.com/itsmekabilesh"
                class="social-icon"
              >
                {" "}
                <i class="fab fa-hackerrank ls"></i>
              </a>
            </li>
          </ul>
        </div>
        <a class="container-arrow scroll-to">
          <Link to="about" spy={true} smooth={true} duration={500} offset={-50}>
            <span>
              <i class="fa fa-angle-down" aria-hidden="true"></i>{" "}
            </span>
          </Link>
        </a>
      </div>
    </Fade>
  );
}

export default Body;
