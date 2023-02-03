const pairOfShoes = require("./pairOfShoes");

test("should return false for odd number of shoes", () => {
  expect(pairOfShoes([[0, 1]])).toEqual(false);
  expect(
    pairOfShoes([
      [0, 1],
      [0, 0],
      [0, 0],
    ])
  ).toEqual(false);
  expect(
    pairOfShoes([
      [0, 1],
      [0, 1],
      [0, 1],
      [0, 1],
      [0, 1],
    ])
  ).toEqual(false);
});

test.only("should return true for a matching pair of shoes", () => {
  expect(
    pairOfShoes([
      [0, 1],
      [1, 1],
    ])
  ).toEqual(true);
});

test("returns false for pair of unmatching shoes", () => {
  expect(
    pairOfShoes([
      [0, 1],
      [0, 1],
    ])
  ).toEqual(false);
});
