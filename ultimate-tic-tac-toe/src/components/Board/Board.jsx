import React, { useState } from 'react';
import classnames from 'classnames';
import Cell from './Cell';
import TicTacToe from './TicTacToe';
import { isWinner, isBoardFilled } from '../../utils/boardChecker';
import BoardStatus from '../../constants/BoardStatus';
import styles from './Board.module.css';

const Board = ({
  playerOne, 
  playerTwo,
  onGameOver,
  setWinner
}) => {
  const [board, setBoard] = useState([[null, null, null], [null, null, null], [null, null, null]]);
  const [currPlayer, setCurrPlayer] = useState(playerOne);
  const [currBoard, setCurrBoard] = useState(null);

  const updateBoardCellStatus = (row, col, status, switchPlayerCallback) => {
    const newBoard = board.map(row => [...row]);
    newBoard[row][col] = status;
    setBoard(newBoard);
    if (status !== BoardStatus.TIE) {
      if (isWinner(newBoard, row, col)){
        setWinner(currPlayer);
      }
      if (isWinner(newBoard, row, col) || isBoardFilled(newBoard, row, col)) {
        onGameOver();
        return;
      }
    }
    switchPlayerCallback(newBoard);
  }

  const switchPlayer = (row, col, boardLayout = board) => {
    currPlayer === playerOne ? setCurrPlayer(playerTwo) : setCurrPlayer(playerOne);

    if (boardLayout[row][col] === null) {
      setCurrBoard([row, col]);
    }
    else {
      setCurrBoard(null);
    }
  }

  const isLocked = (row, col) => {
    if (currBoard === null) {
      return false;
    }
    if (currBoard[0] === row && currBoard[1] === col) {
      return false;
    }
    return true;
  }

  const shouldHighlightCell = (row, col) => {
    return !isLocked(row, col) && board[row][col] === null;
  }

  return (
    <div className="ultimate-board">
    {board.map((row, rowNum) => (
      <div key={`row-${rowNum * 3}`} className={styles.row}>
        {row.map((cell, colNum) => (
          <Cell
            className={classnames(styles.boardCell, {
              [styles.currentPlayerX]: shouldHighlightCell(rowNum, colNum) && currPlayer === 'X',
              [styles.currentPlayerO]: shouldHighlightCell(rowNum, colNum) && currPlayer === 'O',
            })}
            key={`cell-${rowNum * 3 + colNum}`}
            rowNum={rowNum}
            colNum={colNum}
            children={(
              <TicTacToe 
                player={currPlayer} 
                status={cell}
                updateStatus={(status, switchPlayerCb) => updateBoardCellStatus(rowNum, colNum, status, switchPlayerCb)}
                switchPlayer={switchPlayer}
                isLocked={isLocked(rowNum, colNum)}
                key={`${rowNum * 3 + colNum}`}
              />
            )}
          />
        ))}
      </div>
    ))}
    </div>
  )
}

export default Board;