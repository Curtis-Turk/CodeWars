const scoreHand = (arrayOfCardObjects) => {
  return Math.max(...arrayOfCardObjects.map((card) => card.value));
};

module.exports = scoreHand;
