import React from "react";
import classes from "./About.module.css";
import Fade from "react-reveal/Fade";
import img from "./../../assets/Dp.JPG";
function About() {
  return (
    <Fade bottom>
      <div className={classes.About} id="about">
        <div className={classes.container}>
          <img src={img} className={classes.img} />
          <h3 className={classes.heading2}>Hi There!Let me intoduce myself.</h3>
          <p className={classes.para}>
            I am a <b className={classes.green}>Web Developer</b> and a <b className={classes.green}>Data Analyst</b> from <b className={classes.green}>Halifax, Nova Scotia, Canada</b>. I love to build creative and productive websites.
            From the time I started my Bachelor's degree I have come across many
            domains but Web Development and Machine Learning makes me super
            interested while working on them. The World is moving towards
            Automation and it has been my main motivation for working on these
            domains.
            <br />
            <br />I love to play <u>Cricket</u> as I am passionate in playing
            it. I have been playing cricket since my school times and have
            represented my school team. <br />
            <br />I am looking forward to work on projects that creates a social
            impact on the society and will be interested in working on{" "}
            <u>Freelance</u> projects
          </p>
        </div>
      </div>
    </Fade>
  );
}

export default About;
