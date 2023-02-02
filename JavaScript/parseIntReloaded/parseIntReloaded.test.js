const parseIntReloaded = require("./parseIntReloaded");

test("should return 1", () => {
  expect(parseIntReloaded("one")).toEqual(1);
});
test("should return 2", () => {
  expect(parseIntReloaded("two")).toEqual(2);
});

test("should return 6", () => {
  expect(parseIntReloaded("six")).toEqual(6);
});

test("should return 10", () => {
  expect(parseIntReloaded("ten")).toEqual(10);
});

test("should return for tens", () => {
  expect(parseIntReloaded("ten")).toEqual(10);
  expect(parseIntReloaded("twelve")).toEqual(12);
  expect(parseIntReloaded("sixteen")).toEqual(16);
});
test("should return for 20", () => {
  expect(parseIntReloaded("twenty")).toEqual(20);
});
test("should return for tens", () => {
  expect(parseIntReloaded("thirty")).toEqual(30);
  expect(parseIntReloaded("fourty")).toEqual(40);
  expect(parseIntReloaded("fifty")).toEqual(50);
});

test("should return for Twenty-One", () => {
  expect(parseIntReloaded("twenty-one")).toEqual(21);
});

test("should return for random numbers under 100", () => {
  expect(parseIntReloaded("twenty-three")).toEqual(23);
  expect(parseIntReloaded("fourty-six")).toEqual(46);
  expect(parseIntReloaded("seventy-five")).toEqual(75);
  expect(parseIntReloaded("thirty-two")).toEqual(32);
  expect(parseIntReloaded("ninety-nine")).toEqual(99);
});

test("should return for One Hundred", () => {
  expect(parseIntReloaded("one hundred")).toEqual(100);
});
