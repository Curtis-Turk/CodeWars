const spoonerise = (inputString) => {
  let words = inputString.split(" ");
  if (words.length < 2 || words.length > 3) return "No spoons here";

  let e = " ";
  if (words.length == 3) {
    e = ` ${words.splice(1, 1)} `;
  }

  chunk1 = getChunk(words[0]);
  chunk2 = getChunk(words[1]);

  spoon = chunk2[0] + chunk1[1];
  rise = chunk1[0] + chunk2[1];

  return `${spoon}${e}${rise}`;
};

const getChunk = (word) => {
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
