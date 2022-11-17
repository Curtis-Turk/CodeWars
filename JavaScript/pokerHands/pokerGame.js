class PokerGame {
  constructor(handArray) {
    this.handArray = handArray;
  }

  getHandArray() {
    return this.handArray;
  }
}

const game = new PokerGame([
  [
    { suit: "diamond", value: 2 },
    { suit: "heart", value: 2 },
    { suit: "spade", value: 2 },
    { suit: "club", value: 6 },
    { suit: "diamond", value: 12 },
  ],
  [
    { suit: "club", value: 2 },
    { suit: "heart", value: 3 },
    { suit: "spade", value: 5 },
    { suit: "club", value: 4 },
    { suit: "diamond", value: 1 },
  ],
]);

game.getHandArray();
