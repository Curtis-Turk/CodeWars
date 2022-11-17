const checkForMultiples = (cardArray) => {
  const uniqueValues = new Set();

  cardArray.forEach((card) => {
    uniqueValues.add(card.value);
  });

  if (uniqueValues.size === 4) {
    return 2;
  } else if (uniqueValues.size === 3) {
    return 3;
  } else if (uniqueValues.size === 2) return 4;
};

module.exports = checkForMultiples;
