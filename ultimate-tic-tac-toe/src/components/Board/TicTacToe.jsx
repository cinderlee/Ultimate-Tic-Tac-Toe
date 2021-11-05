import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './TicTacToe.module.css';
import Cell from './Cell';
import BoardStatus from '../../constants/BoardStatus';
import { isWinner, isBoardFilled } from '../../utils/boardChecker';

const TicTacToe = ({
  player,
  status,
  updateStatus, 
  switchPlayer,
  isLocked, 
}) => {
  const [board, setBoard] = useState([[null, null, null], [null, null, null], [null, null, null]]);

  const onClickCell = (row, col) => {
    if (!isLocked && !board[row][col]) {
      const newBoard = board.map(row => [...row]);;
      newBoard[row][col] = player;
      setBoard(newBoard);
      if (isWinner(newBoard, row, col)) {
        player === 'X' ? 
          updateStatus(BoardStatus.X_WON, (board) => switchPlayer(row, col, board)) : 
          updateStatus(BoardStatus.O_WON, (board) => switchPlayer(row, col, board));
      }
      else if (isBoardFilled(newBoard, row, col)) {
        updateStatus(BoardStatus.TIE, (board) => switchPlayer(row, col, board));
      } 
      else {
        switchPlayer(row, col);
      }
    }
  }

  return (
    <>
    {status && status !== BoardStatus.TIE && (
      <div className={styles.winner}>
        {status}
      </div>
    )}
    <div style={{display: 'inline-block'}} className={classnames({
      [styles.tie]: status === BoardStatus.TIE 
    })}>
      {board.map((row, rowNum) => (
        <div className={styles.row} key={`row-${rowNum * 3}`}>
          {row.map((cell, colNum) => (
            <Cell 
              className={styles.cell}
              key={`cell-${rowNum * 3 + colNum}`}
              value={cell}
              rowNum={rowNum}
              colNum={colNum}
              onClick={() => onClickCell(rowNum, colNum)} />
          ))}
        </div>
      ))}
    </div>
    </>
  )
}
export default TicTacToe;