const isIsogram = (inputString) => {
  if (!inputString) return true;
  const set = new Set(inputString.toUpperCase().split(""));
  return set.size === inputString.length;
};

module.exports = isIsogram;
