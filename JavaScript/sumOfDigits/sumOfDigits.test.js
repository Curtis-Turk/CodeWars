const { sumOfDigits } = require("./sumOfDigits")

test("It returns the number given if single digit",()=>{
  expect(sumOfDigits(1)).toEqual(1)
})