const matrixTranspose = require("./matrixTranspose");
test("should return a digit", () => {
  expect(matrixTranspose([[1]])).toEqual([[1]]);
});
test("should return a second digit", () => {
  expect(matrixTranspose([[1, 1]])).toEqual([[1], [1]]);
});
