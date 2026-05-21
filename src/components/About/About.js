import React from "react";
import "./About.scss";
import { aboutContent } from "../../data";

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
        <div className="about__container">
          <div className="about__wrapper">
            <h2 className="about__heading" id="about-title">Who am I?</h2>
            <p className="about__copy">
              {aboutContent.sentence1}
              <br />
              <br />
              {aboutContent.sentence2}{" "}
              <b className="about__highlight">Software Development</b>
              {aboutContent.sentence3} <b className="about__highlight"> Canada </b>,
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
