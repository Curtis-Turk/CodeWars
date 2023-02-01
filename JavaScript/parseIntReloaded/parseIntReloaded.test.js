const parseIntReloaded = require("./parseIntReloaded");

test("should return 1", () => {
  expect(parseIntReloaded("One")).toEqual(1);
});
test("should return 2", () => {
  expect(parseIntReloaded("Two")).toEqual(2);
});

test("should return 6", () => {
  expect(parseIntReloaded("Six")).toEqual(6);
});

test("should return 10", () => {
  expect(parseIntReloaded("Ten")).toEqual(10);
});

test("should return for tens", () => {
  expect(parseIntReloaded("Ten")).toEqual(10);
  expect(parseIntReloaded("Twelve")).toEqual(12);
  expect(parseIntReloaded("Sixteen")).toEqual(16);
});
test("should return for 20", () => {
  expect(parseIntReloaded("Twenty")).toEqual(20);
});
test("should return for tens", () => {
  expect(parseIntReloaded("Thirty")).toEqual(30);
  expect(parseIntReloaded("Fourty")).toEqual(40);
  expect(parseIntReloaded("Fifty")).toEqual(50);
});

test("should return for Twenty-One", () => {
  expect(parseIntReloaded("Twenty-One")).toEqual(21);
});

test("should return for random numbers under 100", () => {
  expect(parseIntReloaded("Twenty-Three")).toEqual(23);
  expect(parseIntReloaded("Fourty-Six")).toEqual(46);
  expect(parseIntReloaded("Seventy-Five")).toEqual(75);
  expect(parseIntReloaded("Thirty-Two")).toEqual(32);
  expect(parseIntReloaded("Ninety-Nine")).toEqual(99);
});
