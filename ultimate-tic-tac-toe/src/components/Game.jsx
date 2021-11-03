import React, { useState } from 'react';
import PlayerSelector from './PlayerSelector';
import Board from './Board';
import GameOver from './GameOver';

const Game = () => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);
  const [isSelectingPlayer, setIsSelectingPlayer] = useState(true);
  const [winner, setWinner] = useState(null);

  const onSelectPlayer = (player, character) => {
    if (player === 'one') {
      setPlayerOne(character);
      setPlayerTwo(character === 'O' ? 'X' : 'O');
    }
    else {
      setPlayerTwo(character);
      setPlayerOne(character === 'O' ? 'X' : 'O');
    }
  }

  const onGameStart = () => {
    setIsSelectingPlayer(false);
  }

  return (
    <>
    {isSelectingPlayer && <PlayerSelector 
      playerOne={playerOne}
      playerTwo={playerTwo}
      onSelectPlayer={onSelectPlayer}
      onGameStart={onGameStart}
    />}
    {!isSelectingPlayer && <Board playerOne={playerOne} playerTwo={playerTwo} setWinner={setWinner} onGameOver={() => setIsGameOver(true)} />}

    {isGameOver && <GameOver winner={winner} />}
    </>
  )
}

export default Game;