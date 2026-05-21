import React from "react";
import "./Home.scss";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/Dp.JPG";
import ResumePdf from "../../assets/Kabilesh27Resume.pdf";
import SocialLinks from "../common/SocialLinks/SocialLinks";
import { socialLinks } from "../../data";

function Body() {
  return (
    <section className="home" id="home" aria-labelledby="home-title">
        <img
          src={profile}
          className="home__profile"
          alt="Kabilesh Ravichandran"
        />

        <h1 className="home__heading" id="home-title">KABILESH</h1>
        <h3 className="home__subheading">
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
        <p className="home__intro">
          I build thoughtful, production-ready experiences with React, Vue,
          Node.js, cloud tooling, and a strong eye for usability.
        </p>
        <div className="home__actions">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-150}
            className="home__primary-action"
          >
            View projects
          </Link>
          <a
            href={ResumePdf}
            download="Kabilesh_Resume"
            target="_blank"
            rel="noreferrer"
            className="home__secondary-action"
          >
            Resume
          </a>
        </div>
        <div className="home__social-wrap">
          <SocialLinks links={socialLinks} className="home__social-list" />
        </div>
        <div className="home__scroll-cue">
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
    </section>
  );
}

export default Body;
