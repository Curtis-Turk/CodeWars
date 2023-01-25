function zipWith(fn, a0, a1) {
  if (!a0 || !a1 || !fn) return [];

  let shortestArrayLength = a0.length < a1.length ? a0.length : a1.length;

  let outputArray = [];
  for (let i = 0; i < shortestArrayLength; i++) {
    outputArray.push(fn(a0[i], a1[i]));
  }
  return outputArray;
}

module.exports = zipWith;
