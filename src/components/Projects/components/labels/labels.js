import React from 'react';
import './labels.css';

const Labels = (props) => {
  const {
    type,
    className,
  } = props;

  return(
    <div className={`labels ${type === 'done' ? 'done': ''}${className ? ` ${className}` : ''}`}>
      { type === 'done' ? '' : 'on-going' }
    </div>
  )
};

export default Labels;