const { sumOfDigits } = require("./sumOfDigits")

test("Returns the number given if single digit",()=>{
  expect(sumOfDigits(1)).toEqual(1)
})
test("Returns the sum of a 2 digit number",()=>{
  expect(sumOfDigits(11)).toEqual(2)
})
test("Returns the sum of a 3 digit number",()=>{
  expect(sumOfDigits(111)).toEqual(3)
})
test("Returns the sum of a 2 digit number higher than 9",()=>{
  expect(sumOfDigits(66)).toEqual(3)
})
test("Returns the sum of 10 digit number to make a third step",()=>{
  expect(sumOfDigits(999999999999)).toEqual(9)
})