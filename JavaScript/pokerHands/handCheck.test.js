const checkForMultiples = require("./handCheck");

describe("multiples", () => {
  test("should return pair with a pair", () => {
    expect(
      checkForMultiples([
        { suit: "heart", value: 2 },
        { suit: "heart", value: 8 },
        { suit: "spade", value: 1 },
        { suit: "club", value: 5 },
        { suit: "diamond", value: 5 },
      ])
    ).toEqual("pair");
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
    ).toEqual("triple");
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
    ).toEqual("four");
  });

  test("should return 2 pair with 2 pairs", () => {
    expect(
      checkForMultiples([
        { suit: "heart", value: 2 },
        { suit: "heart", value: 2 },
        { suit: "spade", value: 7 },
        { suit: "club", value: 5 },
        { suit: "diamond", value: 5 },
      ])
    ).toEqual("2pair");
  });

  test("should return fullHouse with a pair and triple", () => {
    expect(
      checkForMultiples([
        { suit: "heart", value: 2 },
        { suit: "heart", value: 2 },
        { suit: "spade", value: 5 },
        { suit: "club", value: 5 },
        { suit: "diamond", value: 5 },
      ])
    ).toEqual("fullHouse");
  });

  test("should return no multiples if none exist", () => {
    expect(
      checkForMultiples([
        { suit: "heart", value: 1 },
        { suit: "heart", value: 2 },
        { suit: "spade", value: 3 },
        { suit: "club", value: 4 },
        { suit: "diamond", value: 5 },
      ])
    ).toEqual("no multiple found");
  });
});
