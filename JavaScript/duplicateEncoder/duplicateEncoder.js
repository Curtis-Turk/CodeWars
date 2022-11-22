function duplicateEncode(word) {
  let charArr = word.toLowerCase().split("");
  let encodedString = "";

  charArr.forEach((char, i) => {
    let duplicateArr = charArr.slice();

    duplicateArr.splice(i, 1);

    if (duplicateArr.includes(char)) {
      encodedString += ")";
    } else encodedString += "(";
  });

  return encodedString;
}

module.exports = duplicateEncode;
