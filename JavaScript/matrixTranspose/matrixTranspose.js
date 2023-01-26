function transpose(matrix) {
  let transposed = [];
  for (let i = 0; i < matrix[0].length; i++) {
    transposed.push([]);
    for (let j = 0; j < matrix.length; j++) {
      // console.log(transposed);
      transposed[i].push(matrix[j][i]);
    }
  }
  return transposed;
}

module.exports = transpose;
