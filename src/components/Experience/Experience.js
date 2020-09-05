import React from "react";
import classes from "./Experience.module.css";
import Fade from "react-reveal/Fade";

function Experience() {
  return (
    <Fade left>
      <div className={classes.Experience} id="experience">
        <h1>Experience</h1>
      </div>
    </Fade>
  );
}

export default Experience;
