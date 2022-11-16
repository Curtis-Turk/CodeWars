const scoreHigh = (arrayOfCardObjects) => {
  return Math.max(...arrayOfCardObjects.map((card) => card.value));
};

const scorePair = (arrayOfCardObjects) => {
  let pairScore;
  arrayOfCardObjects.forEach((card) => {
    if (numberOfCardsInArray(arrayOfCardObjects, card.value) == 2)
      pairScore = card.value;
  });
  return pairScore;
};

const numberOfCardsInArray = (cardArray, value) => {
  return cardArray.filter((card) => card.value === value).length;
};

module.exports = { scoreHigh, scorePair };
