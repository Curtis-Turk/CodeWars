const isIsogram = require("./isograms");

test("should return true for empty", () => {
  expect(isIsogram("")).toEqual(true);
});
