import React from "react";
import "./About.scss";
import { aboutContent } from "../../data";

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
        <div className="about__container u-flex u-stack-on-content u-flex-wrap u-align-start u-center-on-content u-full-width">
          <div className="about__wrapper u-flex u-flex-column u-align-center">
            <h2 className="about__heading u-text-left u-text-center-on-content" id="about-title">Who am I?</h2>
            <p className="about__copy u-text-left u-text-center-on-content">
              {aboutContent.sentence1}
              <br />
              <br />
              {aboutContent.sentence2}{" "}
              <b className="about__highlight">Software Development</b>
              {aboutContent.sentence3} <b className="about__highlight"> Halifax, Canada </b>,
              {aboutContent.sentence4}
              <br />
              <br />
              {aboutContent.sentence5}
              <br />
              <br />
              {aboutContent.sentence6} <b className="about__highlight">Freelance</b>{" "}
              projects
            </p>
          </div>
        </div>
    </section>
  );
}

export default About;
