const isIsogram = require("./isograms");

test("should return true for empty", () => {
  expect(isIsogram("")).toEqual(true);
});
test("should return true for a", () => {
  expect(isIsogram("a")).toEqual(true);
});
test("should return true for ab", () => {
  expect(isIsogram("ab")).toEqual(true);
});
test("should return true for abC", () => {
  expect(isIsogram("ab")).toEqual(true);
});
test("should return false for aa", () => {
  expect(isIsogram("aa")).toEqual(false);
});
