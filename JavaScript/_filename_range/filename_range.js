const fileNameRangeSelect = (filename) => {
  const fileArr = filename.split("");
  let range = [0, 0];
  for (let i = 0; i < fileArr.length; i++) {
    if (checkForTest(fileArr.slice(i, i + 4))) i += 4;

    const char = fileArr[i];
    range[1]++;

    if (char === "/") range[0] = i + 1;
    if (char === "." || char === "_") {
      range[1]--;
      break;
    }
  }
  console.log(filename, range);
  return range;
};

const checkForTest = (fourCharSubStr) => {
  return fourCharSubStr.join("").toLowerCase() === "test";
};

module.exports = fileNameRangeSelect;
