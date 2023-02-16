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

const scoreSingleObj = {
  1: 100,
  5: 50,
};

const scoreTripleObj = {
  1: 1000,
  6: 600,
  5: 500,
  4: 400,
  3: 300,
  2: 200,
};

function scoreTriple(countObj) {
  for (const roll in countObj) {
    console.log(roll);

    if (countObj[roll] > 3) total += scoreTripleObj[roll];
  }
}

function score(dice) {
  const countObj = buildCountObj(dice);
  let total = 0;
  console.log(countObj);
  for (const roll in countObj) {
    console.log(roll, countObj[roll]);

    if (countObj[roll] >= 3 && scoreTripleObj[roll]) {
      total += scoreTripleObj[roll];
    }
  }
  return total;
}

module.exports = score;
