function duplicateEncode(word) {
  let encodedString = "";
  for (let i = 0; i < word.length; i++) {
    encodedString += "(";
  }
  return encodedString;
}

module.exports = duplicateEncode;
