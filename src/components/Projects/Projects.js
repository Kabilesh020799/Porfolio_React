import React, { useState } from "react";
import classes from "./Projects.module.css";
import Fade from "react-reveal/Fade";

function Projects() {
  const [project, setProject] = useState([
    {
      title: "KILL A WATT",
      content:
        "A project in which the existing Electric meter is converted to a  Smart meter.This project automates the whole process of reading and billing the usage of Electric usage and estimates in an Mobile Application.This project also make the people aware of therir Electricity usage.",
      tile: "IOT  Android",
      giturl: "https://github.com/Kabilesh020799/killawatt",
      url: "https://github.com/Kabilesh020799/killawatt",
    },
    {
      title: "ACE(Association Of Computer Engineers) Website",
      content:
        "Website designed for the Association of Computer Engineers,SVCE to showcase their upcoming and past events and the results of every events to students.This was build along with a team of 5 members",
      url: "https://acesvce.in/",
      giturl: "https://acesvce.in/",
      tile: "HTML5 CSS3 React Js",
    },
    {
      title: "Obstacle Detector",
      content:
        "This project is designed for blind people,it detects the object in front of them and warns them that there is n object in front of them at a specific distance,so the blind person could be aware of things in front of him.This is done using Arduino and Ultrasonic Sensor",
      tile: "IOT",
    },
    {
      title: "Object Detection",
      content:
        "This project is build to detect different types of object in a given video footage.This model can identify around 80 different objects that we come across in our day to day life.This is developed using Opencv library and a pretrained yolo model,so this project uses transfer learning.",
      tile: "ComputerVision  Python",
      giturl: "https://github.com/Kabilesh020799/Object-Detection1",
      url: "https://github.com/Kabilesh020799/Object-Detection1",
    },
    // {
    //   title: "Motion Detection",
    //   content:
    //     "This project is build to detect if there is any motion in the given video footage or in a live cctv camera.This model marks the motion and records the timestamp of the motion and gives a report to the user.This model can be used for survivallence in high threat places like banks,etc",
    //   tile: "ComputerVision  Python",
    //   giturl: "https://github.com/Kabilesh020799/Motion-Detection1",
    //   url: "https://github.com/Kabilesh020799/Motion-Detection1",
    // },
    {
      title: "Credit Card Fraud Predictor",
      content:
        "This project is build to detect whether the current transaction is a fraud one or not.This model is a classification model which is build in machine learning using sklearn,numpy and pandas library.This helps in reducing the frauds happening in the banking sector",
      tile: "Machine Learning",
      giturl: "https://github.com/Kabilesh020799/Credit-Card-Fraud-Predictor",
      ur: "https://github.com/Kabilesh020799/Credit-Card-Fraud-Predictor",
    },
    {
      title: "Netflix Clone",
      content:
        "This is a Responsive website clone of the Netflix website version.It was build using the TMDB movie Api.This website plays the trailer of every movies in Netflix.This is also build with some CSS animations.",
      tile: " HTML5  CSS3  React Js",
      giturl:
        "https://github.com/Kabilesh020799/Web-App-Clones-in-React/tree/master/Netflix%20UI%20Clone",
      url: "https://netflix-clone-6401b.web.app/",
    },
    {
      title: "Instagram Clone",
      content:
        "This is a Mobile Responsive site of Instagram build over HTML and CSS.This website gives the basic functionalities of Instagram like uploading a post and comment on a post.This website is also build using the firebase authentication",
      tile: "HTML5  CSS3  React Js FireBase",
      giturl:
        "https://github.com/Kabilesh020799/Basic-Instagram-Clone-React-JS-and-Firebase-",
      url:
        "https://github.com/Kabilesh020799/Basic-Instagram-Clone-React-JS-and-Firebase-",
    },
    {
      title: "Weather Information App",
      content:
        "This is a dynamic weather information Web Application that is build using OpenWeather Api.It is build over HTML and CSS.The dynamic updates and changes are handles by Vue Js.",
      tile: "HTML5  CSS3  Vue Js",
    },
  ]);
  return (
    <Fade bottom>
      <div>
        <h1>Some Of My works!</h1>
        <div className={classes.Projects} id="projects">
          {project.map((proj) => (
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
              <div className={classes.tile}>{proj.tile}</div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}

export default Projects;
