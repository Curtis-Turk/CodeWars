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

test("should return true for a matching pair of shoes", () => {
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
test("returns true for example pairs of matching shoes", () => {
  expect(
    pairOfShoes([
      [0, 21],
      [1, 23],
      [1, 21],
      [0, 23],
    ])
  ).toEqual(true);
});

test("returns false for example pairs of unmatching shoes", () => {
  expect(
    pairOfShoes([
      [0, 21],
      [1, 23],
      [1, 21],
      [1, 23],
    ])
  ).toEqual(false);
});

test("returns true for test", () => {
  expect(
    pairOfShoes([
      [0, 30],
      [1, 57],
      [0, 14],
      [0, 89],
      [1, 60],
      [0, 60],
      [0, 60],
      [1, 30],
      [0, 61],
      [0, 86],
      [1, 89],
      [0, 19],
      [1, 86],
      [0, 87],
      [0, 21],
      [1, 60],
      [0, 57],
      [1, 61],
      [0, 97],
      [1, 14],
      [1, 19],
      [0, 35],
      [1, 21],
      [1, 87],
      [1, 97],
      [0, 4],
      [1, 4],
      [1, 35],
    ])
  ).toEqual(true);
});
