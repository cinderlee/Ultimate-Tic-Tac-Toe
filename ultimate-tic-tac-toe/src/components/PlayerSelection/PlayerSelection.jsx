import React from 'react';
import classnames from 'classnames';
import PlayerInformation from './PlayerInformation';
// import './PlayerSelection.css';
import styles from './PlayerSelection.module.css';

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
      <div className={styles.playerContainer}> 
        <PlayerInformation
          title="Player One"
          className={styles.playerInfo}
          isPlayerOne={true}
          selectedCard={playerOne}
          onSelectXCard={() => onSelectPlayerCard('one', 'X')}
          onSelectOCard={() => onSelectPlayerCard('one', 'O')}
        />
        <div className={classnames(styles.playerInfo, styles.bar)}></div>
        <PlayerInformation
          title="Player Two"
          className={styles.playerInfo}
          isPlayerOne={false}
          selectedCard={playerTwo}
          onSelectXCard={() => onSelectPlayerCard('two', 'X')}
          onSelectOCard={() => onSelectPlayerCard('two', 'O')}
        />
      </div>

      <div className={styles.gameStart}>
        <button className={styles.gameStartButton} onClick={onGameStart}>Start Game</button>
      </div>
    </>
  )
}

export default PlayerSelection;