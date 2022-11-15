const scoreHand = require("./pokerHands");

test("Returns a score for High card", () => {
  expect(scoreHand([{ suit: "heart", value: 1 }])).toEqual(1);
});
test("Returns a score of 2", () => {
  expect(scoreHand([{ suit: "heart", value: 2 }])).toEqual(2);
});
