import React, { memo } from "react";
import "./TechList.scss";

function TechList({ items = [], className = "" }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className={`tech-list u-flex u-flex-wrap u-full-width u-text-left ${className}`.trim()}>
      {items.map((item) => (
        <span className="tech-list__item" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default memo(TechList);
