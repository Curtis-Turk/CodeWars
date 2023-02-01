const parseIntReloaded = (intStr) => {
  const ones = {
    One: 1,
    Two: 2,
    Six: 6,
  };
  return ones[intStr];
};

module.exports = parseIntReloaded;
