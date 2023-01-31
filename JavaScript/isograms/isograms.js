const isIsogram = (inputString) => {
  if (!inputString) return true;
  inputString.toUpperCase().split().sort();
  return true;
};

module.exports = isIsogram;
