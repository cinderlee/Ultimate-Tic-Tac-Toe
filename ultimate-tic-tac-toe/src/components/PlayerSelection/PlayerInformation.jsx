import React from 'react';
import classnames from 'classnames';
import PlayerCard from './PlayerCard';
import styles from './PlayerInformation.module.css';

const PlayerInformation = ({
  title,
  className,
  isPlayerOne,
  selectedCard,
  onSelectXCard,
  onSelectOCard
}) => (
  <div className={classnames(className, {
    [styles.playerTwo]: !isPlayerOne
  })}>
    <div>{title}</div>
    <br />
    <PlayerCard 
      value="X"
      className={classnames({ [styles.xSelected]: selectedCard === 'X' })}
      onClick={onSelectXCard}
    />
    <PlayerCard 
      value="O"
      className={classnames(styles.secondCard, { [styles.oSelected]: selectedCard === 'O' })}
      onClick={onSelectOCard}
    />
  </div>
)

export default PlayerInformation;