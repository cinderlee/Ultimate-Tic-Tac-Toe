import React from 'react';
import classnames from 'classnames';
import styles from './PlayerCard.module.css';

const PlayerCard = ({
  value,
  className,
  onClick
}) => (
  <div className={classnames(styles.card, className)} onClick={onClick}>
    {value}
  </div>
);

export default PlayerCard;