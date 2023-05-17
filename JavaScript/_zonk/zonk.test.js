const getScore = require("./zonk");

describe("get score", () => {
  it("scoreds a roll of 3 die", () => {
    expect(getScore([1, 2, 3])).toEqual(100);
  });
});
