import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerInformation = ({
  title,
  isPlayerOne,
  selectedCard,
  onSelectXCard,
  onSelectOCard
}) => (
  <div className={`player-info ${isPlayerOne ? 'player-one' : 'player-two'}`}>
    <div>{title}</div>
    <br />
    <PlayerCard 
      value="X"
      className={selectedCard === 'X' ? 'x-selected' : null}
      onClick={onSelectXCard}
    />
    <PlayerCard 
      value="O"
      className={`second-card ${selectedCard === 'O' ? 'o-selected' : null}`}
      onClick={onSelectOCard}
    />
  </div>
)

export default PlayerInformation;