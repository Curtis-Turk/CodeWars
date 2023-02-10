function validParentheses(parens) {
  let lCount = 0;
  let rCount = 0;
  const pArray = parens.split("");

  for (let i = 0; i < pArray.length; i++) {
    if (pArray[i] === "(") {
      lCount++;
    } else if (pArray[i] === ")") {
      rCount++;
    }
  }

  return lCount === rCount;
}

module.exports = validParentheses;
