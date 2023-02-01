const parseIntReloaded = require("./parseIntReloaded");

test("should return 1", () => {
  expect(parseIntReloaded("One")).toEqual(1);
});
test("should return 2", () => {
  expect(parseIntReloaded("Two")).toEqual(2);
});
