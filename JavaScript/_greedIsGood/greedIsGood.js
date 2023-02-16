function score(dice) {
  for (let i = 0; i < dice.length; i++) {
    if (dice[i] === 1) return 1200;
  }
  return 0;
}

module.exports = score;
