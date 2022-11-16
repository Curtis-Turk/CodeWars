const { scoreHigh, scorePair } = require("./pokerHands");

describe("High card", () => {
  test("Returns a score", () => {
    expect(scoreHigh([{ suit: "heart", value: 1 }])).toEqual(1);
  });
  test("Returns a score of 2", () => {
    expect(scoreHigh([{ suit: "heart", value: 2 }])).toEqual(2);
  });
  test("Returns a score of 13", () => {
    expect(scoreHigh([{ suit: "heart", value: 13 }])).toEqual(13);
  });
  test("Returns the highest card", () => {
    expect(
      scoreHigh([
        { suit: "heart", value: 1 },
        { suit: "heart", value: 2 },
      ])
    ).toEqual(2);
  });
  test("Returns the highest card 3 cards", () => {
    expect(
      scoreHigh([
        { suit: "heart", value: 1 },
        { suit: "heart", value: 2 },
        { suit: "heart", value: 13 },
      ])
    ).toEqual(13);
  });
  test("Returns the highest card from 5 cards", () => {
    expect(
      scoreHigh([
        { suit: "heart", value: 1 },
        { suit: "heart", value: 2 },
        { suit: "heart", value: 5 },
        { suit: "heart", value: 10 },
        { suit: "heart", value: 13 },
      ])
    ).toEqual(13);
  });
});

describe("Pair", () => {
  test("Score of a pair", () => {
    expect(
      scorePair([
        { suit: "heart", value: 1 },
        { suit: "spades", value: 1 },
      ])
    ).toEqual(1);
  });
  test("Score of a pair with higher card", () => {
    expect(
      scorePair([
        { suit: "heart", value: 1 },
        { suit: "spades", value: 1 },
        { suit: "heart", value: 2 },
      ])
    ).toEqual(1);
  });
  test("Score of a pair with the higher card first", () => {
    expect(
      scorePair([
        { suit: "heart", value: 2 },
        { suit: "heart", value: 1 },
        { suit: "spades", value: 1 },
      ])
    ).toEqual(1);
  });
  test("Score of a different pair with the higher card first", () => {
    expect(
      scorePair([
        { suit: "heart", value: 1 },
        { suit: "heart", value: 1 },
        { suit: "spades", value: 1 },
        { suit: "spades", value: 2 },
        { suit: "spades", value: 2 },
      ])
    ).toEqual(2);
  });
});
