function pairOfShoes(shoes) {
  let countObj = {};

  for (let i = 0; i < shoes.length; i++) {
    const shoeSize = shoes[i][1];
    if (!countObj.hasOwnProperty(shoeSize)) countObj[`${shoeSize}`] = 0;
    shoes[i][0] === 0 ? countObj[`${shoeSize}`]-- : countObj[`${shoeSize}`]++;
  }

  for (const key in countObj) {
    if (countObj[key] !== 0) return false;
  }
  return true;
}

module.exports = pairOfShoes;
