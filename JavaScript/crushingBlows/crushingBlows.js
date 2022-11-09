const spoonerise = (inputString) => {
  let wordArr = inputString.split(" ");
  if (wordArr.length < 2 || wordArr.length > 3) return "No spoons here";
  let middle = " ";
  if (wordArr.length == 3) {
    middle = ` ${wordArr.splice(1, 1)} `;
  }
  spoon = wordArr[0].replace(wordArr[0][0], wordArr[1][0]);
  rise = wordArr[1].replace(wordArr[1][0], wordArr[0][0]);

  console.log(spoon);

  return `${spoon}${middle}${rise}`;
};

module.exports = spoonerise;
