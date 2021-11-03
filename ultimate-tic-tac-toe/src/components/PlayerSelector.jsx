import React from 'react';
import './PlayerSelector.css';

const PlayerSelector = ({
  playerOne,
  playerTwo,
  onSelectPlayer,
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
      <div className="player-info">
        <div>Player One</div>
        <br />
        <div className={`card ${playerOne === 'X' ? 'selected' : null}`} onClick={() => onSelectPlayer("one", 'X')}>X</div>
        <div className={`card second-card ${playerOne === 'O' ? 'selected' : null}`} onClick={() => onSelectPlayer("one", 'O')}>O</div>
      </div>

      <div className="player-info bar"></div>

      <div className="player-info second-player">
        <div>Player Two</div>
        <br />
        <div className={`card ${playerTwo === 'X' ? 'selected' : null}`} onClick={() => onSelectPlayer("two", 'X')}>X</div>
        <div className={`card second-card ${playerTwo === 'O' ? 'selected' : null}`} onClick={() => onSelectPlayer("two", 'O')}>O</div>
      </div>
    </div>

    <div className="game-start"><button className="game-start-button" onClick={onGameStart}>Start Game</button></div>
    </>
  )
}

export default PlayerSelector;