function score(dice) {
  const countObj = buildCountObj(dice);

  if (countObj["1"] === 5) {
    return 1200;
  } else if (countObj["1"] === 1) {
    return 100;
  }
  return 0;
}

function buildCountObj(dice) {
  let countObj = {};
  for (let i = 0; i < dice.length; i++) {
    if (!countObj[dice[i]]) {
      countObj[dice[i]] = 1;
    } else {
      countObj[dice[i]]++;
    }
  }
  return countObj;
}

module.exports = score;
