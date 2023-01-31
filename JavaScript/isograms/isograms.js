const isIsogram = (inputString) =>
  new Set(inputString.toUpperCase().split("")).size === inputString.length;

module.exports = isIsogram;
