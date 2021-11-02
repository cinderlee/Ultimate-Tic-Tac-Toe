import React, { useState } from 'react';
import './TicTacToe.css';
import Cell from './Cell';

const TicTacToe = ({player, winner, setWinner, onSelectCell}) => {
  const [board, setBoard] = useState([[null, null, null], [null, null, null], [null, null, null]]);

  const onClickCell = (row, col) => {
    if (!board[row][col]) {
      const copy = [[...board[0]], [...board[1]], [...board[2]]];
      console.log(copy)
      copy[row][col] = player;
      setBoard(copy);
      onSelectCell();
      if (isWinner(row, col)) {
        setWinner();
      }
    }
  }

  const countInDirection = (col, row, horizontalDisplacement, verticalDisplacement) => {
    let count = 0;
    while (row >= 0 && row < 3 && col >=0 && col < 3) {
      if (board[row][col] !== player) {
        break;
      }
      count += 1;
      col += horizontalDisplacement;
      row += verticalDisplacement;
    }
    return count;
  }

  const countVertical = (row, col) => {
    return countInDirection(col, row + 1, 0, 1) + countInDirection(col, row - 1, 0, -1);
  }

  const countHorizontal = (row, col) => {
    return countInDirection(col + 1, row, 1, 0) + countInDirection(col - 1, row, -1, 0);
  }

  const countDiagonal = (row, col) => {
    return countInDirection(col + 1, row + 1, 1, 1) + countInDirection(col - 1, row - 1, -1, -1);
  }

  const countOtherDiagonal = (row, col) => {
    return countInDirection(col + 1, row - 1, 1, -1) + countInDirection(col - 1, row + 1, -1, 1);
  }

  const isWinner = (row, col) => {
    return countVertical(row, col) === 2 || countHorizontal(row, col) === 2 || countDiagonal(row, col) === 2 || countOtherDiagonal(row, col) === 2;
  }

  return (
    <>
    {winner && <div className="winner">
      {winner}
    </div>
    }
    <div style={{display: 'inline-block'}}>
      {board.map((row, rowNum) => (
        <div className="row">
          {row.map((cell, colNum) => (
            <Cell className={`cell row-${rowNum} col-${colNum}`} value={cell} onClick={() => onClickCell(rowNum, colNum)} />
          ))}
        </div>
      ))}
    </div>
    </>
  )
}
export default TicTacToe;