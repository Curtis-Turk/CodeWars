const ones = {
  Zero: 0,
  One: 1,
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Nine: 9,
};

const teens = {
  Ten: 10,
  Eleven: 11,
  Twelve: 12,
  Thirteen: 13,
  Fourteen: 14,
  Fifteen: 15,
  Sixteen: 16,
  Seventeen: 17,
  Eighteen: 18,
  Nineteen: 19,
};

const tens = {
  Twenty: 20,
  Thirty: 30,
  Fourty: 40,
  Fifty: 50,
  Sixty: 60,
  Seventy: 70,
  Eighty: 80,
  Ninety: 90,
};

const parseIntReloaded = (intStr) => {
  const splitStr = intStr.split("-");

  let numberArr = [];

  for (let i = 0; i < splitStr.length; i++) {
    const numberString = splitStr[i];
    if (ones[numberString]) {
      numberArr.push(ones[numberString]);
    } else if (teens[numberString]) {
      numberArr.push(teens[numberString]);
    } else {
      numberArr.push(tens[numberString]);
    }
  }
  console.log(numberArr);
  return numberArr.reduce((a, b) => a + b);
};

module.exports = parseIntReloaded;
