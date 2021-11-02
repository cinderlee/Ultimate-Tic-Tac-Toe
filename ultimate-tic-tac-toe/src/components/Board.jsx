import React, { useState } from 'react';
import TicTacToe from './TicTacToe';

const Board = () => {
  const [board, setBoard] = useState([[null, null, null], [null, null, null], [null, null, null]]);
  const [player, setPlayer] = useState('X');

  const onSelectCell = () => {
    if (player === 'X') {
      setPlayer('O');
    }
    else {
      setPlayer('X');
    }
  }

  const setBoardWinner = (row, col) => {
    const copy = [[...board[0]], [...board[1]], [...board[2]]];
    console.log(copy)
    copy[row][col] = player;
    setBoard(copy);
  }

  return (
    // board.map((row, rowNum) => (
    //   <div>
    //     {row.map((cell, colNum) => <TicTacToe className={`board row-0 col-0`}/>)}
    //   </div>
    // ))

    <div className="ultimate-board">
    {board.map((row, rowNum) => (
      <div className="row">
      <>
        {row.map((cell, colNum) => (
          <div className={`board-cell row-${rowNum} col-${colNum}`}>
            <TicTacToe player={player} onSelectCell={onSelectCell} setWinner={() => setBoardWinner(rowNum, colNum)} winner={board[rowNum][colNum]} />
          </div>
        ))}
        </>
      </div>
    ))}
    </div>
  )
}

export default Board;