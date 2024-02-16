import React, { useState } from "react";
import classes from "./Projects.module.css";
import Fade from "react-reveal/Fade";
import Labels from "./components/labels/labels";
import projects from "./constants";

function Projects() {

  return (
    <Fade bottom>
      <div>
        <h1>Some Of my works!</h1>
        <div className={classes.Projects} id="projects">
          {projects.map((proj) => (
            <div className={classes.card}>
              <div className={classes.head}>
                <i
                  class="far fa-folder-open fa-3x"
                  style={{ color: "#327D7A" }}
                ></i>
                <div className={classes.left}>
                  <a href={proj.giturl} target="blank">
                    <i
                      class="fab fa-github-square "
                      style={{ color: "#97A2C0", fontSize: "20px" }}
                    ></i>
                  </a>
                  <a href={proj.url} target="blank">
                    <i
                      class="fas fa-external-link-alt"
                      style={{ color: "#97A2C0", fontSize: "20px" }}
                    ></i>
                  </a>
                </div>
              </div>
              <div className={classes.body}>
                <h3 className={classes.bodyhead}>{proj.title}</h3>
                <p className={classes.bodycon}>{proj.content}</p>
              </div>
              <div className={classes.footer}>
                <div className={classes.tile}>{proj.tile?.map((tileItem) => (
                  <div className={classes.tileItem}>
                    {tileItem}
                  </div>
                ))}</div>
                <div><Labels type={proj.type} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}

export default Projects;
