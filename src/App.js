import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
function App() {
  return (
    <div className="App">
      <Navigation className="cls" />
      <Home className="cls" />
      <About className="cls" />
      <Skills className="cls" />
      <Education />
      <Experience className="cls" />
      <Projects className="cls" />
      <Contact className="cls" />
    </div>
  );
}

export default App;
