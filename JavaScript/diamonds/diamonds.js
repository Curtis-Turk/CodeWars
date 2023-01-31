function diamonds(size) {
  if (size % 2 === 0 || size <= 0) return null;

  let diamond = "";
  for (let i = 1; i <= size; i++) {
    console.log(size, i);
    diamond += "*\n";
  }
  return diamond;
}

module.exports = diamonds;
