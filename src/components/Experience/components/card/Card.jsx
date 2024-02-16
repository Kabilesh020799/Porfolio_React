import React, { useState } from "react";
import './Card.css';

const Card = (props) => {
  const {
    position,
    company,
    startDate,
    endData,
    description,
    techStack,
    link,
  } = props;

  const [hovered, setHovered] = useState(false);

  const onClick = () => {
    if(hovered) {
      window.open(link);
    }
  }

  return (
    <div
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div className="card-date">{startDate} - {endData}</div>
      <div className="card-details">
        <div className={`card-position ${hovered ? 'color-green' : ''}`}>{position}</div>
        <div className="card-company">{company}</div>
        <div className="card-description">{description}</div>
        <div className="card-labels">
          {
            techStack?.map((techStackItem) => (
              <div className="card-label" key={techStackItem}>{techStackItem}</div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Card;

