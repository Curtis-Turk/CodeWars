const spoonerise = (inputString) => {
  let words = inputString.split(" ");
  if (words.length < 2 || words.length > 3) return "No spoons here";

  let e = " ";
  if (words.length == 3) {
    e = ` ${words.splice(1, 1)} `;
  }

  firstWord = splitOnVowel(words[0]);
  secondWord = splitOnVowel(words[1]);

  spoon = secondWord[0] + firstWord[1];
  rise = firstWord[0] + secondWord[1];

  return `${spoon}${e}${rise}`;
};

const splitOnVowel = (word) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let chars = [...word];

  let i = 0;
  while (true) {
    if (vowels.includes(chars[i])) {
      return [
        chars.slice(0, i).join(""),
        chars.slice(i, chars.length).join(""),
      ];
    }
    i++;
  }
};

module.exports = spoonerise;
