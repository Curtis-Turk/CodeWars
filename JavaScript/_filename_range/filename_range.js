const fileNameRangeSelect = (filename) => {
  const fileArr = filename.split("");
  let range = [0, 0];
  for (let i = 0; i < fileArr.length; i++) {
    const char = fileArr[i];
    range[1]++;
    if (char === ".") {
      range[1]--;
      break;
    }
  }
  return range;
};

module.exports = fileNameRangeSelect;
