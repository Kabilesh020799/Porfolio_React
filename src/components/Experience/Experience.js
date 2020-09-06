import React from "react";
import classes from "./Experience.module.css";
import Fade from "react-reveal/Fade";

function Experience() {
  return (
    <Fade left>
      <div className={classes.Experience} id="experience">
        <h1 className={classes.heading}>Experience</h1>
        <div className={classes.expbody}>
          <div className={classes.exphead}>
            Internship at ADHI Software | MAY-JUNE 2019
          </div>
          <div className={classes.expcontent}>
            During the 1 month of this internship, I have learned a lot about
            the current industry and it's trends. While working with Industry
            professionals, I was able to gain the maximum knowledge out of them.
            In this internship I was asked to develop an Deep Learning model for
            monitoring the activities in the office.This gave me a clear start
            on entering into Data science World.
          </div>
        </div>
        <div className={classes.expbody}>
          <div className={classes.exphead}>
            Executive Member at United intelligence club | SEPT 2019 - Present
          </div>
          <div className={classes.expcontent}>
            As an Executive member my role was to organize events and help
            students to improve their efficiency in coding and other activities.
          </div>
        </div>
        <div className={classes.expbody}>
          <div className={classes.exphead}>
            Campus Ninja Internship at Coding Ninjas | Apr 2020 - June 2020
          </div>
          <div className={classes.expcontent}>
            During these 3 months of the internship I was able to improve my
            communication skills and connect with many peoples from different
            parts of the country.
          </div>
        </div>
        <div className={classes.expbody}>
          <div className={classes.exphead}>
            Member at Web Team Of ACE | Aug 2020 - Present
          </div>
          <div className={classes.expcontent}>
            An active member at the Web Team Of Association of Computer
            Engineers Club Of SVCE.
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Experience;
