import React from "react";
import "./Skills.css";
import { skillsData } from "./constants";
import SkillBox from "./components/skill-box/SkillBox";

function Skills() {
  return (
    <div className="Skills" id="skills">
      {
        skillsData?.map((skillData) => <SkillBox key={skillData.name} name={skillData.name} description={skillData.description} icon={skillData.icon} /> )
      }
    </div>
  );
}

export default Skills;
