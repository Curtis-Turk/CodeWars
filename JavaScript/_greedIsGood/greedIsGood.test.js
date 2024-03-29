const score = require("./greedIsGood");

test("should score a dice", () => {
  expect(score([1, 1, 1, 1, 1])).toEqual(1200);
});
test("should score a dice for 0", () => {
  expect(score([6, 6, 2, 2, 3])).toEqual(0);
});
test("should score a dice for 100", () => {
  expect(score([6, 6, 2, 2, 1])).toEqual(100);
});
test("should score a dice for 200", () => {
  expect(score([6, 6, 2, 1, 1])).toEqual(200);
});
test("should score a dice for 1000", () => {
  expect(score([6, 6, 1, 1, 1])).toEqual(1000);
});
