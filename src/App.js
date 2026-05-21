import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App_black">
      <a className="skip-link" href="#home">
        Skip to main content
      </a>
      <Navigation className="cls" />
      <main>
        <Home className="cls" />
        <About className="cls" />
        <Skills className="cls" />
        <Experience className="cls" />
        <Projects className="cls" />
        <Contact className="cls" />
      </main>
    </div>
  );
}

export default App;
