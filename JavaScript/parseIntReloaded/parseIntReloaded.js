const parseIntReloaded = (intStr) => {
  const splitStr = intStr.split("-").join(" ").split(" ").reverse();

  let numArr = [];

  for (let i = 0; i < splitStr.length; i++) {
    const num = parseNumStr(splitStr[i]);

    if (isDecimal(num)) {
      const nextNum = parseNumStr(splitStr[i + 1]);
      const nextNextNum = parseNumStr(splitStr[i + 2]);

      if (splitStr[i + 2] && !isDecimal(nextNextNum)) {
        numArr.push(num * (nextNum + nextNextNum));
        i += 2;
      }
      // else if(){

      // }
      else {
        numArr.push(num * nextNum);
        i++;
      }
    } else {
      numArr.push(num);
    }
  }

  console.log("number: ", splitStr, "parsed: ", numArr);
  return numArr.reduce((a, b) => a + b);
};

const isDecimal = (currNum) => {
  return currNum === 100 || currNum === 1000;
};

const parseNumStr = (numStr) => {
  if (strNumLookup[numStr]) return strNumLookup[numStr];
  return 0;
};

const strNumLookup = {
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
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
  hundred: 100,
  thousand: 1000,
};

module.exports = parseIntReloaded;
