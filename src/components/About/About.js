import React from "react";
import classes from "./About.module.css";
import Fade from "react-reveal/Fade";
import img from "./../../assets/Dp.JPG";
import Skills from "../Skills/Skills";
function About() {
  return (
    <Fade bottom>
      <div className={classes.About} id="about">
        <div className={classes.container}>
          {/* <img src={img} className={classes.img} /> */}
          <div className={classes.wrapper}>
            <h3 className={classes.heading2}>Who am I?</h3>
            <p className={classes.para}>
              I discovered my love for technology during my undergraduate years
              in 2020 when I started my first software project. Since then, I've
              been on a journey fueled by curiosity and a thirst for knowledge.
              I've explored various frameworks and languages, each new one
              expanding my skills and giving me deeper insights into building
              efficient solutions.
              <br />
              <br />
              With every line of code I write, I gain a greater appreciation for
              the creativity and precision of{" "}
              <b className={classes.green}>Software Development</b>. Now, as I
              pursue my graduate studies in computer science in{" "}
              <b className={classes.green}> Canada </b>, I'm excited to keep
              growing and innovating in this ever-changing field.
              <br />
              <br />
              I'm eager to contribute my skills and ideas to the world of
              technology, and I can't wait to see where this journey takes me
              next.
              <br />
              <br />I am looking forward to work on projects that creates a
              social impact on the society and will be interested in working on{" "}
              <b className={classes.green}>Freelance</b> projects
            </p>
          </div>
          <div className={classes.wrapper}>
            <h3 className={classes.heading2}>My skills</h3>
            <Skills />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default About;
