function validateSudoku(board) {
  for (let i = 0; i < 9; i++) {
    let rowSet = new Set();
    let colSet = new Set();

    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) return false;
      rowSet.add(board[i][j]);
      colSet.add(board[j][i]);
    }

    if (rowSet.size !== 9 || colSet.size !== 9) return false;
  }
  return true;
}

module.exports = validateSudoku;
