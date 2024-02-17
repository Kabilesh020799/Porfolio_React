import React from "react";
import classes from "./Home.module.css";
import Fade from "react-reveal/Fade";
import "./Home.css";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import profile from '../../assets/Dp.JPG';

function Body() {
  return (
    <Fade bottom>
      <div className={classes.body} id="home">
        <img
          src={profile}
          className={classes.profile}
          alt="profile"
        />
        <h1 className={classes.heading}>KABILESH</h1>
        <h3 className={classes.heading1}>
          I am{" "}
          <TypeAnimation
            repeat={Infinity}
            wrapper="b"
            sequence={[
              "Software Engineer 👨‍💻⚛️",
              1000,
              "Fullstack Developer 🤖",
              1000,
              "App Developer 📱",
              1000,
              "ML Aspirant 💻",
              1000,
              "Graduate Student 👨‍🎓",
              1000,
            ]}
          ></TypeAnimation>
        </h3>
        <div class="footer-social-icons">
          <ul class="social-icons">
            <li>
              <a
                href="https://www.facebook.com/ravichandran.kabilesh/"
                class="social-icon"
                style={{color: '#71C5A5'}}
              >
                {" "}
                <i class="fa fa-facebook ls"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kabilesh_ravichandran/"
                class="social-icon"
                style={{color: '#71C5A5'}}
              >
                {" "}
                <i class="fa fa-instagram ls"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kabileshravi27/"
                class="social-icon"
                style={{color: '#71C5A5'}}
              >
                {" "}
                <i class="fa fa-linkedin ls"></i>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/Kabilesh020799"
                class="social-icon"
                style={{color: '#71C5A5'}}  
              >
                {" "}
                <i class="fa fa-github ls"></i>
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/kabilesh020799/"
                class="social-icon"
                style={{color: '#71C5A5'}}
              >
                {" "}
                <i class="fa fa-laptop-code ls"></i>
              </a>
            </li>
          </ul>
        </div>
        <a class="container-arrow scroll-to">
          <Link to="about" spy={true} smooth={true} duration={500} offset={-150}>
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
