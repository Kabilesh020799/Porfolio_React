import React from "react";
import "./TechList.scss";

function TechList({ items = [], className = "" }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className={`tech-list ${className}`.trim()}>
      {items.map((item) => (
        <span className="tech-list__item" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default TechList;
