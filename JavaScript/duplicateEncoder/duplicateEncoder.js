function duplicateEncode(word) {
  let encodedString = "";
  let charArr = word.toLowerCase().split("");

  if (charArr.length == 1) return "(";

  console.log({ charArr });
  charArr.forEach((char, i) => {
    let duplicateArr = charArr.slice();

    duplicateArr.splice(i, 1);

    if (duplicateArr.includes(char)) {
      encodedString += ")";
    } else encodedString += "(";
  });
  console.log({ charArr });

  return encodedString;
}

module.exports = duplicateEncode;
