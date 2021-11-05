import React from 'react';
import styles from './GameOver.module.css';

const GameOver = ({
  winner
}) => {
  const message = winner ? `Congratulations, ${winner} won!` : 'It\'s a tie!';

  return (
    <div className={styles.gameOverContainer}>
      <div className={styles.gameOverMessage}>
        Game Over
        <br />
        {message}
      </div>
    </div>
  );
}

export default GameOver;