const checkForMultiples = require("./handCheck");

test("should return pair with a pair", () => {
  expect(
    checkForMultiples([
      { suit: "heart", value: 2 },
      { suit: "heart", value: 8 },
      { suit: "spade", value: 1 },
      { suit: "club", value: 5 },
      { suit: "diamond", value: 5 },
    ])
  ).toEqual(2);
});
test("should return triple with a tiple", () => {
  expect(
    checkForMultiples([
      { suit: "heart", value: 2 },
      { suit: "heart", value: 8 },
      { suit: "spade", value: 5 },
      { suit: "club", value: 5 },
      { suit: "diamond", value: 5 },
    ])
  ).toEqual(3);
});
test("should return 4 with a four of a kind", () => {
  expect(
    checkForMultiples([
      { suit: "heart", value: 2 },
      { suit: "heart", value: 5 },
      { suit: "spade", value: 5 },
      { suit: "club", value: 5 },
      { suit: "diamond", value: 5 },
    ])
  ).toEqual(4);
});
