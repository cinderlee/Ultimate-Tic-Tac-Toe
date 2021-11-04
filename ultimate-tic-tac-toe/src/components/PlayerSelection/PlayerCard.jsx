import React from 'react';

const PlayerCard = ({
  value,
  className,
  onClick
}) => (
  <div className={`card ${className}`} onClick={onClick}>
    {value}
  </div>
);

export default PlayerCard;