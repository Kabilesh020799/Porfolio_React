import React from "react";
import classes from "./About.module.css";
import { aboutContent } from "../../data";

function About() {
  return (
    <div className={classes.About} id="about">
        <div className={classes.container}>
          <div className={classes.wrapper}>
            <h3 className={classes.heading2}>Who am I?</h3>
            <p className={classes.para}>
              {aboutContent.sentence1}
              <br />
              <br />
              {aboutContent.sentence2}{" "}
              <b className={classes.green}>Software Development</b>
              {aboutContent.sentence3} <b className={classes.green}> Canada </b>,
              {aboutContent.sentence4}
              <br />
              <br />
              {aboutContent.sentence5}
              <br />
              <br />
              {aboutContent.sentence6} <b className={classes.green}>Freelance</b>{" "}
              projects
            </p>
          </div>
        </div>
    </div>
  );
}

export default About;
