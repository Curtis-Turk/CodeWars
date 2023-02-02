const parseIntReloaded = (intStr) => {
  const intStrArr = intStr
    .split("-")
    .join(" ")
    .split(" and ")
    .join(" ")
    .split(" ");

  const intParser = (strArr) => {
    return strArr.reduce((acc, word, i, words) => {
      if (isThousands(word)) {
        return (acc = acc * 1000 + intParser(words.splice(i + 1)));
      } else if (isHundreds(word)) {
        return (acc *= 100);
      } else {
        return (acc += strNumLookup[word]);
      }
    }, 0);
  };

  return intParser(intStrArr);
};

const isThousands = (numStr) => {
  return strNumLookup[numStr] === 1000;
};
const isHundreds = (numStr) => {
  return strNumLookup[numStr] === 100;
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
