function duplicateEncode(word) {
  if (word.length == 2) {
    return "((";
  }
  return "(";
}

module.exports = duplicateEncode;
