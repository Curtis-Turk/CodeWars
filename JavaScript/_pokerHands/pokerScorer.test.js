const {
  scoreHigh,
  scoreMultiples,
  scoreStraight,
  scoreFullHouse,
  scoreFlush,
} = require("./pokerScorer");

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
      scoreMultiples(
        [
          { suit: "heart", value: 1 },
          { suit: "spades", value: 1 },
        ],
        2
      )
    ).toEqual(1);
  });
  test("Score of a pair with higher card", () => {
    expect(
      scoreMultiples(
        [
          { suit: "heart", value: 1 },
          { suit: "spades", value: 1 },
          { suit: "heart", value: 2 },
        ],
        2
      )
    ).toEqual(1);
  });
  test("Score of a pair with the higher card first", () => {
    expect(
      scoreMultiples(
        [
          { suit: "heart", value: 2 },
          { suit: "heart", value: 1 },
          { suit: "spades", value: 1 },
        ],
        2
      )
    ).toEqual(1);
  });
  test("Score of a different pair with the higher card first", () => {
    expect(
      scoreMultiples(
        [
          { suit: "heart", value: 1 },
          { suit: "heart", value: 1 },
          { suit: "spades", value: 1 },
          { suit: "spades", value: 2 },
          { suit: "spades", value: 2 },
        ],
        2
      )
    ).toEqual(2);
  });
});

describe("Three of a kind", () => {
  test("Score a three of a kind", () => {
    expect(
      scoreMultiples(
        [
          { suit: "heart", value: 1 },
          { suit: "spades", value: 1 },
          { suit: "diamond", value: 1 },
        ],
        3
      )
    ).toEqual(1);
  });
  test("Score a three of a kind with another card", () => {
    expect(
      scoreMultiples(
        [
          { suit: "diamond", value: 2 },
          { suit: "heart", value: 1 },
          { suit: "spades", value: 1 },
          { suit: "diamond", value: 1 },
        ],
        3
      )
    ).toEqual(1);
  });
});

describe("four of a kind", () => {
  test("Score a four of a kind", () => {
    expect(
      scoreMultiples(
        [
          { suit: "heart", value: 1 },
          { suit: "spades", value: 1 },
          { suit: "diamond", value: 1 },
          { suit: "clubs", value: 1 },
        ],
        4
      )
    ).toEqual(1);
  });
  test("Score a four of a kind with another card", () => {
    expect(
      scoreMultiples(
        [
          { suit: "heart", value: 10 },
          { suit: "spades", value: 10 },
          { suit: "diamond", value: 10 },
          { suit: "clubs", value: 10 },
          { suit: "clubs", value: 1 },
        ],
        4
      )
    ).toEqual(10);
  });
});

describe("Straight", () => {
  test("Score a straight as highest card", () => {
    expect(
      scoreStraight([
        { suit: "heart", value: 1 },
        { suit: "spades", value: 2 },
        { suit: "diamond", value: 3 },
        { suit: "clubs", value: 4 },
        { suit: "clubs", value: 5 },
      ])
    ).toEqual(5);
  });

  test("Score a straight as highest card", () => {
    expect(
      scoreStraight([
        { suit: "heart", value: 5 },
        { suit: "spades", value: 6 },
        { suit: "diamond", value: 7 },
        { suit: "clubs", value: 8 },
        { suit: "clubs", value: 9 },
      ])
    ).toEqual(9);
  });
});

describe("Full house", () => {
  test("Score a full house", () => {
    expect(
      scoreFullHouse([
        { suit: "heart", value: 5 },
        { suit: "spades", value: 5 },
        { suit: "diamond", value: 5 },
        { suit: "clubs", value: 1 },
        { suit: "clubs", value: 1 },
      ])
    ).toEqual([5, 1]);
  });
  test("Score a full differnt house", () => {
    expect(
      scoreFullHouse([
        { suit: "heart", value: 5 },
        { suit: "spades", value: 5 },
        { suit: "diamond", value: 11 },
        { suit: "clubs", value: 11 },
        { suit: "clubs", value: 11 },
      ])
    ).toEqual([11, 5]);
  });
});
describe("Flush", () => {
  test("Score a straight flush", () => {
    expect(
      scoreFlush([
        { suit: "heart", value: 1 },
        { suit: "heart", value: 4 },
        { suit: "heart", value: 7 },
        { suit: "heart", value: 11 },
        { suit: "heart", value: 12 },
      ])
    ).toEqual([12, 11, 7, 4, 1]);
  });
});
