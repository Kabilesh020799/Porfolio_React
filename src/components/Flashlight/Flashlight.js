import React, { useState } from 'react';
import './FlashLight.css'; // Create this file to style the flashlight

const Flashlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="flashlight" onMouseMove={handleMouseMove}>
      <div className="light" style={{ left: position.x, top: position.y }} />
    </div>
  );
};

export default Flashlight;
