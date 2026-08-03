import React from "react";
import "./Skills.scss";
import { skillsData } from "../../data";
import SkillBox from "./components/skill-box/SkillBox";

function Skills() {
  return (
    <section className="SkillsSection" id="skills" aria-labelledby="skills-title">
      <div className="SkillsIntro u-text-center">
        <span className="SkillsEyebrow">Technical toolkit</span>
        <h2 className="SkillsTitle u-section-title" id="skills-title">Skills built across product, platform, and delivery</h2>
        <p className="u-muted-copy">
          A focused view of the languages, frameworks, data stores, and cloud
          tools I use to ship reliable software.
        </p>
      </div>
      <div className="Skills u-grid">
        {skillsData?.map((skillGroup) => (
          <section className="skill-group u-flex u-flex-column" key={skillGroup.category}>
            <h3 className="skill-category u-text-left u-text-center-on-content">{skillGroup.category}</h3>
            <div className="skill-list u-flex u-flex-wrap u-justify-center-on-content">
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
