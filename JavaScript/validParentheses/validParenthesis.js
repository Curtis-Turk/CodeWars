function validParentheses(parens) {
  const pArray = parens.split("");

  let bracket = 0;

  for (let i = 0; i < pArray.length; i++) {
    if (pArray[i] === "(") {
      bracket++;
    } else if (pArray[i] === ")") {
      if (bracket === 0) return false;
      bracket--;
    }
  }

  return bracket === 0;
}

module.exports = validParentheses;
