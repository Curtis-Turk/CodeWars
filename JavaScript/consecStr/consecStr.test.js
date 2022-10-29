const longestConsec = require("./consecStr");

test("return empty string with empty array", () => {
  expect(longestConsec([], 1)).toEqual("");
});
test("return empty string with a 0 int", () => {
  expect(longestConsec(["string"], 0)).toEqual("");
});
test("return empty string with a -1 int", () => {
  expect(longestConsec(["string"], -1)).toEqual("");
});
test("returns the string when given a 1 and a string", () => {
  expect(longestConsec(["string"], 1)).toEqual("string");
});
test("returns the longest word when given a 1 int and 2 strs", () => {
  expect(longestConsec(["str1", "string2"], 1)).toEqual("string2");
});
test("returns the longest word when given a 1 int and 3 strs", () => {
  expect(longestConsec(["str1", "string2", "str3"], 1)).toEqual("string2");
});
test("returns the longest word when given a 1 int and 3 strs", () => {
  expect(longestConsec(["str1", "string2", "str3"], 1)).toEqual("string2");
});
test("returns a combined longest word when given a 2 int and 2 str", () => {
  expect(longestConsec(["str1", "string2"], 2)).toEqual("str1string2");
});
test("returns a combined longest word when given a 2 int and 3 str", () => {
  expect(longestConsec(["str1", "string2", "str3"], 2)).toEqual("str1string2");
});
test("returns a longest word when given a 3 int and 3 str", () => {
  expect(longestConsec(["str1", "string2", "str3"], 3)).toEqual(
    "str1string2str3"
  );
});
test("returns the correct response for -int k", () => {
  expect(
    longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)
  ).toEqual("");
});
test("returns ixoyx3452zzzzzzzzzzzz", () => {
  expect(
    longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)
  ).toEqual("ixoyx3452zzzzzzzzzzzz");
});
test("returns nothings when k is higher than total length of array", () => {
  expect(
    longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)
  ).toEqual("");
});
