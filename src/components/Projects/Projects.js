import React from "react";
import classes from "./Projects.module.css";
import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <Fade left>
      <div className={classes.Projects} id="projects">
        <h1>Projects</h1>
      </div>
    </Fade>
  );
}

export default Projects;
