const permutations = require("./permuations");

it("returns a single char in an array", () => {
  expect(permutations("a")).toEqual(["a"]);
});

console.log(permutations("a"));
