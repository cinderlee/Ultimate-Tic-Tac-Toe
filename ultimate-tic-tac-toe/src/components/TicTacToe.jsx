import React, { useState } from 'react';
import './TicTacToe.css';
import Cell from './Cell';
import { isWinner, isBoardFilled } from '../utils/boardChecker';

const TicTacToe = ({player, winner, setWinner, onSelectCell, setTie, isTie, isLocked, setNextLocation}) => {
  const [board, setBoard] = useState([[null, null, null], [null, null, null], [null, null, null]]);

  const onClickCell = (row, col) => {
    if (!isLocked && !board[row][col]) {
      const copy = [[...board[0]], [...board[1]], [...board[2]]];
      copy[row][col] = player;
      setBoard(copy);
      onSelectCell();
      if (isWinner(board, player, row, col)) {
        setWinner();
      }
      else if (isBoardFilled(board, row, col)) {
        setTie();
      }
      setNextLocation(row,col);
    }
  }

  return (
    <>
    {isTie && (
      <div className="tie">
      </div>
    )}
    {winner && !isTie && (
      <div className="winner">
        {winner}
      </div>
    )}
    <div style={{display: 'inline-block'}} className={isTie ? "tie" : null}>
      {board.map((row, rowNum) => (
        <div className="row">
          {row.map((cell, colNum) => (
            <Cell key={rowNum * 3 + colNum} className={`cell row-${rowNum} col-${colNum}`} value={cell} onClick={() => onClickCell(rowNum, colNum)} />
          ))}
        </div>
      ))}
    </div>
    </>
  )
}
export default TicTacToe;