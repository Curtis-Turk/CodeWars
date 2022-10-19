const oddInt = (inputArray) => {

  const numberCounts = inputArray.reduce((allNumbers, number) => {
    const currentCount = allNumbers[number] || 0
    return {
      ...allNumbers,
      [number]: currentCount + 1
    };
  }, {})

  for(let key in numberCounts){
    if(numberCounts[key] % 2 == 1){
      return parseInt(key)
    }
  }
  
}

module.exports = oddInt