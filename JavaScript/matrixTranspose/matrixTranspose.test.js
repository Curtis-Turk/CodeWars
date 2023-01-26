const matrixTranspose = require("./matrixTranspose");
test("should return a digit", () => {
  expect(matrixTranspose([[1]])).toEqual([[1]]);
});
test("should return a second digit", () => {
  expect(matrixTranspose([[1, 1]])).toEqual([[1], [1]]);
});
test("should return a third digit", () => {
  expect(matrixTranspose([[1, 1, 1]])).toEqual([[1], [1], [1]]);
});

test("should return a fourth digit", () => {
  expect(matrixTranspose([[1, 2, 3, 4]])).toEqual([[1], [2], [3], [4]]);
});

test("should return correctly with another array", () => {
  expect(matrixTranspose([[1], [2]])).toEqual([[1, 2]]);
});

test("should return correctly with three arrays", () => {
  expect(matrixTranspose([[1], [2], [3]])).toEqual([[1, 2, 3]]);
});

test("should return correctly with mutliple values in multiple arrays", () => {
  expect(
    matrixTranspose([
      [1, 2],
      [3, 4],
    ])
  ).toEqual([
    [1, 3],
    [2, 4],
  ]);
});
test("should return correctly with mutliple values in multiple arrays", () => {
  expect(
    matrixTranspose([
      [1, 2, 3],
      [4, 5, 6],
    ])
  ).toEqual([
    [1, 4],
    [2, 5],
    [3, 6],
  ]);
});

// test.only("should return correctly with mutliple values in multiple arrays", () => {
//   expect(
//     matrixTranspose([
//       [1, 2],
//       [3, 4],
//       [5, 6],
//     ])
//   ).toEqual([
//     [1, 2, 3],
//     [3, 4, 6],
//   ]);
// });
