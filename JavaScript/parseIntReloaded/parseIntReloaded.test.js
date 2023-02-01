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
