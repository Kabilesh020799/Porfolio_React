import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import FloatingChat from "./components/FloatingChat/FloatingChat";

const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));

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

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }, []);

  return (
    <div className="App_black u-text-center">
      <a className="skip-link" href="#home">
        Skip to main content
      </a>
      <Navigation className="cls" theme={theme} onThemeToggle={toggleTheme} />
      <FloatingChat />
      <main>
        <Home className="cls" />
        <Suspense fallback={null}>
          <About className="cls" />
          <Skills className="cls" />
          <Experience className="cls" />
          <Projects className="cls" />
          <Contact className="cls" />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
