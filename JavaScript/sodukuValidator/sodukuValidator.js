function validateSudoku(board) {
  function isValidRow(board, row) {
    return new Set(board[row]).size === 9;
  }

  function isValidCol(board, col) {
    let colSet = new Set();
    for (let i = 0; i < 9; i++) {
      colSet.add(board[i][col]);
    }
    return colSet.size === 9;
  }

  function isValidBlock(board, row, col) {
    let sqrSet = new Set();
    for (let i = row; i < row + 3; i++) {
      for (let j = col; j < col + 3; j++) {
        sqrSet.add(board[i][j]);
      }
    }
    return sqrSet.size === 9;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) return false;
      if (
        !isValidRow(board, i) ||
        !isValidCol(board, j) ||
        !isValidBlock(board, i - (i % 3), j - (j % 3))
      ) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  validateSudoku([
    [8, 4, 7, 2, 6, 5, 1, 9, 3],
    [1, 3, 6, 7, 9, 8, 2, 4, 5],
    [9, 5, 2, 1, 4, 3, 8, 6, 7],
    [4, 2, 9, 6, 7, 1, 5, 3, 8],
    [6, 7, 8, 5, 3, 2, 9, 1, 4],
    [3, 1, 5, 4, 8, 9, 7, 2, 6],
    [5, 6, 4, 9, 1, 7, 3, 8, 2],
    [7, 8, 1, 3, 2, 4, 6, 5, 9],
    [2, 9, 3, 8, 5, 6, 4, 7, 1],
  ])
);

module.exports = validateSudoku;
