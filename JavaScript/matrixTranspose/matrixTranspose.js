function transpose(matrix) {
  let transposedArray = [];

  matrix.forEach((array) => {
    console.log(array);
    array.forEach((digit) => {
      console.log(digit);
      transposedArray.push([digit]);
    });
  });
  return transposedArray;
}

module.exports = transpose;
