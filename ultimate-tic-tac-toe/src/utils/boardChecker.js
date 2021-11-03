const countInDirection = (board, player, col, row, horizontalDisplacement, verticalDisplacement) => {
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

const countVertical = (board, player, row, col) => {
  return countInDirection(board, player, col, row + 1, 0, 1) + countInDirection(board, player, col, row - 1, 0, -1);
}

const countHorizontal = (board, player, row, col) => {
  return countInDirection(board, player, col + 1, row, 1, 0) + countInDirection(board, player, col - 1, row, -1, 0);
}

const countDiagonal = (board, player, row, col) => {
  return countInDirection(board, player, col + 1, row + 1, 1, 1) + countInDirection(board, player, col - 1, row - 1, -1, -1);
}

const countOtherDiagonal = (board, player, row, col) => {
  return countInDirection(board, player, col + 1, row - 1, 1, -1) + countInDirection(board, player, col - 1, row + 1, -1, 1);
}

const isWinner = (board, player, row, col) => {
  return countVertical(board, player, row, col) === 2 || 
    countHorizontal(board, player, row, col) === 2 || 
    countDiagonal(board, player, row, col) === 2 || 
    countOtherDiagonal(board, player, row, col) === 2;
}

const isBoardFilled = (board, row, col) => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === row && j === col) {
        continue;
      }
      if (board[i][j] === null) {
        return false;
      }
    }
  }
  return true;
}

export {
  isWinner,
  isBoardFilled,
}