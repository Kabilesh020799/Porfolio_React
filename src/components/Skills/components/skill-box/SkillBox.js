import React from "react";
import './SkillBox.css';

const SkillBox = (props) => {
  const {
    name,
  } = props;

  return (
    <div className="skill-box">
      {name}
    </div>
  );
}

export default SkillBox;
