const isIsogram = require("./isograms");

test("should return true for empty", () => {
  expect(isIsogram("")).toEqual(true);
});
test("should return true for a", () => {
  expect(isIsogram("a")).toEqual(true);
});
