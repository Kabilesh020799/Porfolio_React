import React from "react";
import './SkillBox.css';

const SkillBox = (props) => {
  const {
    name,
    description,
    icon
  } = props;

  return (
    <div className="skill-box">
      <i class={icon} />
      <div className="skill-box-name">{name}</div>
      <div className="skill-box-description">{description}</div>
    </div>
  );
}

export default SkillBox;
