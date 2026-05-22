import React, { useEffect, useState } from "react";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="App_black u-text-center">
      <a className="skip-link" href="#home">
        Skip to main content
      </a>
      <Navigation className="cls" theme={theme} onThemeToggle={toggleTheme} />
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
