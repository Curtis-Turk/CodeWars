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
  return 5;
};

module.exports = { scoreHigh, scoreMultiples, scoreStraight };
