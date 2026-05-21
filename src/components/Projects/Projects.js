import React from "react";
import classes from "./Projects.module.css";
import { projects } from "../../data";

function Projects() {
  return (
    <div className={classes.section}>
        <h1 className={classes.title}>Selected projects</h1>
        <div className={classes.Projects} id="projects">
          {projects.map((proj) => (
            <div className={classes.card} key={proj.title}>
              <div className={classes.head}>
                <i
                  className="far fa-folder-open fa-3x"
                  aria-hidden="true"
                ></i>
              </div>
              <div className={classes.body}>
                <h3 className={classes.bodyhead}>{proj.title}</h3>
                <p className={classes.bodycon}>{proj.content}</p>
              </div>
              <div className={classes.footer}>
                <div className={classes.tile}>
                  {proj.tile?.map((tileItem) => (
                    <div className={classes.tileItem} key={tileItem}>
                      {tileItem}
                    </div>
                  ))}
                </div>
                {(proj.giturl || proj.url) && (
                  <div className={classes.actions}>
                    {proj.giturl && (
                      <a href={proj.giturl} target="_blank" rel="noreferrer">
                        Source
                      </a>
                    )}
                    {proj.url && (
                      <a href={proj.url} target="_blank" rel="noreferrer">
                        View
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Projects;
