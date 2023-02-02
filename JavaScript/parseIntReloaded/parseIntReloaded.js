const ones = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const teens = {
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
};

const tens = {
  twenty: 20,
  thirty: 30,
  fourty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};

const decimals = {
  hundred: 100,
  thousand: 1000,
};

const parseIntReloaded = (intStr) => {
  const splitStr = intStr.split("-").join(" ").split(" ").reverse();

  console.log(splitStr);
  let numArr = [];

  for (let i = 0; i < splitStr.length; i++) {
    const numStr = splitStr[i];

    let currNum = parseNumrStr(numStr);
    if (currNum === 100 || currNum === 1000) {
      numArr.push(currNum * parseNumrStr(splitStr[i + 1]));
      i++;
    } else {
      numArr.push(currNum);
    }
  }
  return numArr.reduce((a, b) => a + b);
};

const parseNumrStr = (numStr) => {
  if (ones[numStr]) {
    return ones[numStr];
  } else if (teens[numStr]) {
    return teens[numStr];
  } else if (tens[numStr]) {
    return tens[numStr];
  } else if (decimals[numStr]) {
    return decimals[numStr];
  } else {
    return 0;
  }
};

module.exports = parseIntReloaded;
