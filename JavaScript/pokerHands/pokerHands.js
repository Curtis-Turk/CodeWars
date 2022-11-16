const scoreHigh = (arrayOfCardObjects) => {
  return Math.max(...arrayOfCardObjects.map((card) => card.value));
};

const scorePair = (arrayOfCardObjects) => {
  return arrayOfCardObjects[1].value;
};

const countValues = () => {};

module.exports = { scoreHigh, scorePair };
