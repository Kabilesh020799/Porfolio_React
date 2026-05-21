import React from "react";
import "./Skills.scss";
import { skillsData } from "../../data";
import SkillBox from "./components/skill-box/SkillBox";

function Skills() {
  return (
    <section className="SkillsSection" id="skills">
      <div className="SkillsIntro">
        <span className="SkillsEyebrow">Technical toolkit</span>
        <h2 className="SkillsTitle">Skills built across product, platform, and delivery</h2>
        <p>
          A focused view of the languages, frameworks, data stores, and cloud
          tools I use to ship reliable software.
        </p>
      </div>
      <div className="Skills">
        {skillsData?.map((skillGroup) => (
          <section className="skill-group" key={skillGroup.category}>
            <h3 className="skill-category">{skillGroup.category}</h3>
            <div className="skill-list">
              {skillGroup.skills.map((skill) => (
                <SkillBox key={skill} name={skill} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Skills;
