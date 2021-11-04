import React from 'react';
import PlayerInformation from './PlayerInformation';
import './PlayerSelection.css';

const PlayerSelection = ({
  playerOne,
  playerTwo,
  onSelectPlayerCard,
  onGameStart
}) => {
  return (
    <>
    <div>
      <h2>Welcome to Ultimate Tic-Tac-Toe</h2>
      Please select your character.
    </div>
    <br />
    <div className="player-container"> 
      <PlayerInformation
        title="Player One"
        isPlayerOne={true}
        selectedCard={playerOne}
        onSelectXCard={() => onSelectPlayerCard('one', 'X')}
        onSelectOCard={() => onSelectPlayerCard('one', 'O')}
      />
      <div className="player-info bar"></div>
      <PlayerInformation
        title="Player Two"
        isPlayerOne={false}
        selectedCard={playerTwo}
        onSelectXCard={() => onSelectPlayerCard('two', 'X')}
        onSelectOCard={() => onSelectPlayerCard('two', 'O')}
      />
    </div>

    <div className="game-start"><button className="game-start-button" onClick={onGameStart}>Start Game</button></div>
    </>
  )
}

export default PlayerSelection;