const duplicateEncode = require("./duplicateEncoder");

it("returns (", () => {
  expect(duplicateEncode("a")).toEqual("(");
});
it("returns (( with two differnt letters", () => {
  expect(duplicateEncode("ab")).toEqual("((");
});
