const sumOfDigits = (inputNumber) => {
  numberArray = inputNumber.toString().split("").map((strNum) => parseInt(strNum))
  let currentNumber = sumArray(numberArray)
  if((""+currentNumber).length > 1){
    return sumOfDigits(currentNumber)
  }
  return currentNumber
}

const sumArray = (numberArray) => {
  return numberArray.reduce((value,current) =>
  value + current)  
}

exports.sumOfDigits = sumOfDigits