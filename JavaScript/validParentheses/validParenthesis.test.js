const validParentheses = require("./validParenthesis");

test("Returns true with a ()", () => {
  expect(validParentheses("()")).toEqual(true);
});

test("Returns false with a (", () => {
  expect(validParentheses("(")).toEqual(false);
});
