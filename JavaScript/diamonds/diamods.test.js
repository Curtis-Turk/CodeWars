const diamonds = require("./diamonds");

test("should return null if size is 0", () => {
  expect(diamonds(0)).toEqual(null);
});
test("should return diamond of size one with 1", () => {
  expect(diamonds(1)).toEqual("*\n");
});
