function diamonds(size) {
  if (size % 2 === 0 || size <= 0) return null;

  let diamond = [];
  for (let i = 0; i < size; i++) {
    if (i < size / 2) {
      diamond.push(" ".repeat(size / 2 - i) + "*".repeat(2 * i + 1) + "\n");
    } else {
      diamond.push(
        " ".repeat(i - size / 2 + 0.5) +
          "*".repeat(2 * (size - i - 1) + 1) +
          "\n"
      );
    }
  }

  console.log(diamond.join(""));
  return diamond.join("");
}

diamonds(5);
module.exports = diamonds;
