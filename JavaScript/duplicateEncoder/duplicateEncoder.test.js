const duplicateEncode = require("./duplicateEncoder");

it("returns (", () => {
  expect(duplicateEncode("a")).toEqual("(");
});
it("returns (( with two differnt letters", () => {
  expect(duplicateEncode("ab")).toEqual("((");
});
it("returns ((( with three different letters", () => {
  expect(duplicateEncode("abc")).toEqual("(((");
});
it("returns ((((( with three different letters", () => {
  expect(duplicateEncode("abcde")).toEqual("(((((");
});
it("returns )) with two of the same letter", () => {
  expect(duplicateEncode("aa")).toEqual("))");
});
it("returns ))) with three of the same letter", () => {
  expect(duplicateEncode("aaa")).toEqual(")))");
});
it("returns ()) with one different and two of the same letter", () => {
  expect(duplicateEncode("abb")).toEqual("())");
});
it("recede test", () => {
  expect(duplicateEncode("recede")).toEqual("()()()");
});
it("deals with uppercase", () => {
  expect(duplicateEncode("Success")).toEqual(")())())");
});
