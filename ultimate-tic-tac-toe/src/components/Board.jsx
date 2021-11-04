import React, { useState } from 'react';
import TicTacToe from './TicTacToe';
import { isWinner, isBoardFilled } from '../utils/boardChecker';

const Board = ({
  playerOne, 
  playerTwo,
  onGameOver,
  setWinner
}) => {
  const [board, setBoard] = useState([[null, null, null], [null, null, null], [null, null, null]]);
  const [currPlayer, setCurrPlayer] = useState(playerOne);
  const [currBoard, setCurrBoard] = useState(null);

  const onSelectCell = () => {
    currPlayer === playerOne ? setCurrPlayer(playerTwo) : setCurrPlayer(playerOne);
  }

  const setBoardWinner = (row, col) => {
    const newBoard = board.map(row => [...row]);
    newBoard[row][col] = currPlayer;
    setBoard(newBoard);
    if (isWinner(newBoard, currPlayer, row, col)){
      setWinner(currPlayer);
    }
    if (isWinner(newBoard, currPlayer, row, col) || isBoardFilled(newBoard, row, col)) {
      onGameOver();
      return;
    }
  }

  const setTie = (row, col) => {
    const copy = [[...board[0]], [...board[1]], [...board[2]]];
    copy[row][col] = "TIE";
    setBoard(copy);
  }

  const setNextLocation = (row, col) => {
    if (board[row][col] === null) {
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
      <div key={`${rowNum}`} className="row">
      <>
        {row.map((cell, colNum) => (
          <>
          <div key={`${rowNum * 3 + colNum}`} className={`board-cell row-${rowNum} col-${colNum} ${shouldHighlightCell(rowNum, colNum) ? `highlighted-${currPlayer}` : null}`}>
            <TicTacToe 
              player={currPlayer} 
              onSelectCell={onSelectCell} 
              setWinner={() => setBoardWinner(rowNum, colNum)} 
              winner={cell} 
              setTie={() => setTie(rowNum, colNum)} 
              isTie={cell === "TIE"}
              isLocked={isLocked(rowNum, colNum)}
              setNextLocation={setNextLocation}
              key={`${rowNum * 3 + colNum}`}
            />
          </div>
          </>
        ))}
        </>
      </div>
    ))}
    </div>
  )
}

export default Board;