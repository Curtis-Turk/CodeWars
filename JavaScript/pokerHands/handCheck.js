const checkForMultiples = (cardArray) => {
  const uniqueValues = new Set();

  cardArray.forEach((card) => {
    uniqueValues.add(card.value);
  });

  switch (uniqueValues.size) {
    case 4:
      return "pair";
    case 3:
      return check3unique(cardArray, uniqueValues);
    case 2:
      return checkfullHouse(cardArray, uniqueValues);
    default:
      return "no multiple found";
  }
};

const check3unique = (cardArray, uniqueValues) => {
  for (const cardValue of uniqueValues) {
    if (cardArray.filter((card) => card.value === cardValue).length === 3)
      return "triple";
  }
  return "2pair";
};
const checkfullHouse = (cardArray, uniqueValues) => {
  for (const cardValue of uniqueValues) {
    if (cardArray.filter((card) => card.value === cardValue).length === 3)
      return "fullHouse";
  }
  return "four";
};

module.exports = checkForMultiples;
