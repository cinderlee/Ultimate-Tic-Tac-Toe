import React from 'react';

const Cell = ({
	className,
  value,
	onClick
}) => {
	const colorClassName = value === 'X' ? 'x-cell' : value === 'O' ? 'o-cell' : null;
	return (
		<div className={`${className} ${colorClassName}` } onClick={onClick}>
			{value}
		</div>
	);
}

export default Cell;