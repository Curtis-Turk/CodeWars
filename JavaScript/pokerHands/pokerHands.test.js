const scoreHand = require("./pokerHands");

describe("High card", () => {
  test("Returns a score", () => {
    expect(scoreHand([{ suit: "heart", value: 1 }])).toEqual(1);
  });
  test("Returns a score of 2", () => {
    expect(scoreHand([{ suit: "heart", value: 2 }])).toEqual(2);
  });
  test("Returns a score of 13", () => {
    expect(scoreHand([{ suit: "heart", value: 13 }])).toEqual(13);
  });
  test("Returns the highest card", () => {
    expect(
      scoreHand([
        { suit: "heart", value: 1 },
        { suit: "heart", value: 2 },
      ])
    ).toEqual(2);
  });
});
