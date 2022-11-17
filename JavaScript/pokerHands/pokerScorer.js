const scoreHigh = (cardArray) => {
  return Math.max(...cardArray.map((card) => card.value));
};

const scoreMultiples = (cardArray, cardMultiple) => {
  let pairScore;
  cardArray.forEach((card) => {
    if (getNumberOfCardsInArray(cardArray, card.value) == cardMultiple)
      pairScore = card.value;
  });
  return pairScore;
};

const getNumberOfCardsInArray = (cardArray, value) => {
  return cardArray.filter((card) => card.value === value).length;
};

const scoreStraight = (cardArray) => {
  let values = cardArray.map((card) => {
    return card.value;
  });
  return values.sort()[values.length - 1];
};

const scoreFullHouse = (cardArray) => {
  return [scoreMultiples(cardArray, 3), scoreMultiples(cardArray, 2)];
};

const scoreFlush = (cardArray) => {
  return cardArray
    .map((card) => {
      return card.value;
    })
    .sort((a, b) => b - a);
};

module.exports = {
  scoreHigh,
  scoreMultiples,
  scoreStraight,
  scoreFullHouse,
  scoreFlush,
};
