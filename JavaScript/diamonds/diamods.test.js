const diamonds = require("./diamonds");

test("should return null if size is 0", () => {
  expect(diamonds(0)).toEqual(null);
});
test("should return diamond of size one with 1", () => {
  expect(diamonds(1)).toEqual("*\n");
});
test("should return diamond of size three", () => {
  expect(diamonds(3)).toEqual(" *\n***\n *\n");
});
test("should return diamond of size five", () => {
  expect(diamonds(5)).toEqual("  *\n ***\n*****\n ***\n  *\n");
});
test("should return diamond of size seven", () => {
  expect(diamonds(7)).toEqual(
    "   *\n   ***\n  *****\n*******\n  *****\n  ***\n   *\n"
  );
});
test("should return null if size is even", () => {
  expect(diamonds(2)).toEqual(null);
});
