import React from "react";
import "./SkillBox.scss";

const SkillBox = (props) => {
  const {
    name,
  } = props;

  return (
    <div className="skill-box u-text-center">
      {name}
    </div>
  );
}

export default SkillBox;
