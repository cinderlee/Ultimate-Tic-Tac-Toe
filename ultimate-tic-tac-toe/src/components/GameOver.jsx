import React from 'react';
import './GameOver.css';

const GameOver = ({
  winner
}) => {
  const message = winner ? `Congratulations, ${winner} won!` : 'It\'s a tie!';

  return (
    <div className="game-over-container">
      <div className="game-over-message">
        Game Over
        <br />
        {message}
      </div>
    </div>
  )
}

export default GameOver;