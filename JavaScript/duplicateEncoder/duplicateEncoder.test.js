const duplicateEncode = require("./duplicateEncoder");

it("returns (", () => {
  expect(duplicateEncode("a")).toEqual("(");
});
