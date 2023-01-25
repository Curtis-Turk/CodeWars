const zipWith = require("./zipWith");

test("should return an array", () => {
  expect(zipWith()).toEqual([]);
});

const plus = (a, b) => a + b;

test("returns an array that calls plus for each array", () => {
  expect(zipWith(plus, [1], [1])).toEqual([2]);
});
test("returns an array that calls plus for each item in arrays", () => {
  expect(zipWith(plus, [1, 1], [1, 1])).toEqual([2, 2]);
});

test("returns an array that calls plus for each item in arrays", () => {
  expect(zipWith(plus, [1, 1, 1], [1, 1, 1])).toEqual([2, 2, 2]);
});

test("returns an array that calls plus for each item in arrays with extra digits removed", () => {
  expect(zipWith(plus, [1, 1, 1], [1, 1])).toEqual([2, 2]);
});

const minus = (a, b) => a - b;
test("returns an array for a differnt function", () => {
  expect(zipWith(minus, [1, 1, 1], [1, 1])).toEqual([0, 0]);
});

test("returns correctly one of the description test results", () => {
  // console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]));
  expect(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3])).toEqual([
    1, 10, 100, 1000,
  ]);
});
const precision = (p) => (n) => ((p) => Math.round(n * p) / p)(Math.pow(10, p));
const uncurry =
  (fn) =>
  (...a) =>
    ((fnApplied) =>
      fnApplied instanceof Function && a.length > fn.length
        ? uncurry(fnApplied)(...a.slice(fn.length))
        : fnApplied)(fn(...a.slice(0, fn.length)));

test("returns correctly test result", () => {
  expect(
    zipWith(
      uncurry(precision),
      [11, 7, 4, 3],
      [Math.PI, Math.E, Math.SQRT2, Math.SQRT1_2]
    )
  ).toEqual([3.14159265359, 2.7182818, 1.4142, 0.707]);
});
