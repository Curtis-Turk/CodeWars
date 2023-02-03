function pairOfShoes(shoes) {
  if (shoes.length % 2 !== 0) return false;

  let pairedShoes = [];

  for (let i = 0; i < shoes.length; i++) {
    const size = shoes[i][1];
    const leftRight = shoes[i][0];

    for (let j = 0; j < shoes.length; j++) {
      const checkSize = shoes[j][1];
      const checkLeftRight = shoes[j][0];

      if (size === checkSize && leftRight !== checkLeftRight) {
        pairedShoes.push(shoes[i]);
        shoes.splice(j, 1);
      }
    }
  }

  if (pairedShoes.length === shoes.length) return true;
  return false;
}

module.exports = pairOfShoes;
