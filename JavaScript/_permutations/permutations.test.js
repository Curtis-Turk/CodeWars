const permutations = require("./permuations");
describe("Single solution", () => {
  it("returns a single char in an array", () => {
    expect(permutations("a")).toEqual(["a"]);
  });
  it("returns a 2 char array", () => {
    expect(permutations("aa")).toEqual(["aa"]);
  });
  it("returns a 3 char array", () => {
    expect(permutations("aaa")).toEqual(["aaa"]);
  });
});
describe("Two letter solutions", () => {
  it("returns both options", () => {
    expect(permutations("ab")).toEqual(["ab", "ba"]);
  });
});
