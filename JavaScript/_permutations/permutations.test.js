const permutations = require("./permuations");

it("returns a single char in an array", () => {
  expect(permutations("a")).toEqual(["a"]);
});
it("returns a 2 char array as a single solution", () => {
  expect(permutations("aa")).toEqual(["aa"]);
});
it("returns a 3 char array as a single solution", () => {
  expect(permutations("aaa")).toEqual(["aaa"]);
});

console.log(permutations("a"));
