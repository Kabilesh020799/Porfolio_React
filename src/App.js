import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
function App() {
  const [checkedB, setCheckedB] = useState(true);
  return (
    <div className={`${checkedB ? "App_black" : "App_tomato"}`}>
      <Navigation
        className="cls"
        checkedB={checkedB}
        setCheckedB={setCheckedB}
      />
      <Home className="cls" />
      <About className="cls" />
      <Experience className="cls" />
      <Projects className="cls" />
      <Contact className="cls" checkedB={checkedB} />
    </div>
  );
}

export default App;
