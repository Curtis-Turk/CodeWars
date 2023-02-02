const parseIntReloaded = require("./parseIntReloaded");

test("return 1", () => {
  expect(parseIntReloaded("one")).toEqual(1);
});
test("return 2", () => {
  expect(parseIntReloaded("two")).toEqual(2);
});

test("return 6", () => {
  expect(parseIntReloaded("six")).toEqual(6);
});

test("return 10", () => {
  expect(parseIntReloaded("ten")).toEqual(10);
});

test("return for tens", () => {
  expect(parseIntReloaded("ten")).toEqual(10);
  expect(parseIntReloaded("twelve")).toEqual(12);
  expect(parseIntReloaded("sixteen")).toEqual(16);
});
test("return for 20", () => {
  expect(parseIntReloaded("twenty")).toEqual(20);
});
test("return for tens", () => {
  expect(parseIntReloaded("thirty")).toEqual(30);
  expect(parseIntReloaded("forty")).toEqual(40);
  expect(parseIntReloaded("fifty")).toEqual(50);
});

test("return for Twenty-One", () => {
  expect(parseIntReloaded("twenty-one")).toEqual(21);
});

test("return for random numbers under 100", () => {
  expect(parseIntReloaded("twenty-three")).toEqual(23);
  expect(parseIntReloaded("forty-six")).toEqual(46);
  expect(parseIntReloaded("seventy-five")).toEqual(75);
  expect(parseIntReloaded("thirty-two")).toEqual(32);
  expect(parseIntReloaded("ninety-nine")).toEqual(99);
});

test("return for One Hundred", () => {
  expect(parseIntReloaded("one hundred")).toEqual(100);
});
test("return for the Hundreds", () => {
  expect(parseIntReloaded("four hundred")).toEqual(400);
  expect(parseIntReloaded("five hundred")).toEqual(500);
  expect(parseIntReloaded("nine hundred")).toEqual(900);
});
test("return for One Thousand", () => {
  expect(parseIntReloaded("one thousand")).toEqual(1000);
});

test("return for the Thousands", () => {
  expect(parseIntReloaded("seven thousand")).toEqual(7000);
  expect(parseIntReloaded("eight thousand")).toEqual(8000);
  expect(parseIntReloaded("six thousand")).toEqual(6000);
});

test("returns correctly with ands", () => {
  expect(parseIntReloaded("one hundred and twenty-four")).toEqual(124);
});
test("returns correctly for 246", () => {
  expect(parseIntReloaded("two hundred forty-six")).toEqual(246);
});

test("returns correctly for 83,919", () => {
  expect(
    parseIntReloaded("eighty-three thousand nine hundred and nineteen")
  ).toEqual(83919);
});
test("returns for 666,666", () => {
  expect(parseIntReloaded("six hundred sixty six thousand sixty six")).toEqual(
    666066
  );
});

// test("returns correctly for 100,000", () => {
//   expect(parseIntReloaded("one hundred thousand")).toEqual(100000);
// });
