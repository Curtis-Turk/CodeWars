const spoonerise = (inputString) => {
  let wordArr = inputString.split(" ");
  if (wordArr.length < 2 || wordArr.length > 3) return "No spoons here";
  spoon = wordArr[0].replace(wordArr[0][0], wordArr[1][0]);
  rise = wordArr[1].replace(wordArr[1][0], wordArr[0][0]);

  return spoon + " " + rise;
};

module.exports = spoonerise;
