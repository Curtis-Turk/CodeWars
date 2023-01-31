const diamonds = require("./diamonds");

test("should return null if size is 0", () => {
  expect(diamonds(0)).toEqual(null);
});
