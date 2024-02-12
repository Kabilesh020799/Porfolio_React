import React from "react";
import "./Skills.css";
import Fade from "react-reveal/Fade";
import { skillsData } from "./constants";
import SkillBox from "./components/skill-box/SkillBox";

function Skills() {
  return (
    <Fade bottom>
      <h1 style={{color: '#47D16E'}}>SKILLSET</h1>
      <div className="Skills" id="skills">
        <div className="skill-wrapper">
          {
            skillsData?.map((skillData) => <SkillBox key={skillData.name} name={skillData.name} description={skillData.description} icon={skillData.icon} /> )
          }
        </div>
      </div>
    </Fade>
  );
}

export default Skills;
