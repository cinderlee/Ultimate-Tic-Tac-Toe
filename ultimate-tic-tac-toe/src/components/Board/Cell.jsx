import React from 'react';
import classnames from 'classnames';
import styles from './Cell.module.css';

const Cell = ({
  className,
  value,
  children,
  rowNum,
  colNum,
	onClick
}) => (
  <div 
    className={classnames(className, {
      [styles.xCell]: value === 'X',
      [styles.oCell]: value === 'O',
      [styles.firstRow]: rowNum === 0,
      [styles.lastRow]: rowNum === 2,
      [styles.firstColumn]: colNum === 0,
      [styles.lastColumn]: colNum === 2
    })}
    onClick={onClick}
  >
    {value || children}
  </div>
);

export default Cell;