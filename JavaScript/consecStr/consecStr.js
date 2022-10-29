const longestConsec = (strArr, k) => {
  if (strArr.length == 0 || k <= 0) return "";

  currentWord = "";
  longestWord = "";

  for (i = 0; i < strArr.length; i++) {
    currentWord = strArr.slice(i, i + k).join("");
    if (currentWord.length > longestWord.length) longestWord = currentWord;
  }
  return longestWord;
};

module.exports = longestConsec;
