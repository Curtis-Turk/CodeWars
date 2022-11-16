const scoreHigh = (arrayOfCardObjects) => {
  return Math.max(...arrayOfCardObjects.map((card) => card.value));
};

const scoreMultiples = (arrayOfCardObjects, cardMultiple) => {
  let pairScore;
  arrayOfCardObjects.forEach((card) => {
    if (numberOfCardsInArray(arrayOfCardObjects, card.value) == cardMultiple)
      pairScore = card.value;
  });
  return pairScore;
};

const numberOfCardsInArray = (cardArray, value) => {
  return cardArray.filter((card) => card.value === value).length;
};

module.exports = { scoreHigh, scoreMultiples };
