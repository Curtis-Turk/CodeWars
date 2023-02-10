const validParentheses = require("./validParenthesis");

test("Returns true with a ()", () => {
  expect(validParentheses("()")).toEqual(true);
});

test("Returns false with a (", () => {
  expect(validParentheses("(")).toEqual(false);
});

// Code wars basic tests
test(`values: "("`, () => expect(validParentheses("(")).toEqual(false));
test(`values: ")"`, () => expect(validParentheses(")")).toEqual(false));
test(`values: ""`, () => expect(validParentheses("")).toEqual(true));
test(`values: "()"`, () => expect(validParentheses("()")).toEqual(true));
test(`values: "())"`, () => expect(validParentheses("())")).toEqual(false));
test(`values: "())("`, () => {
  expect(validParentheses("())(")).toEqual(false);
});
test(`values: "(())"`, () => {
  expect(validParentheses("(())")).toEqual(true);
});
