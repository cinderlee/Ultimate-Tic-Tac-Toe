import React from 'react';

const Cell = ({
	className,
  value,
	onClick
}) => (
  <div className={className} onClick={onClick}>
    {value}
  </div>
)

export default Cell;