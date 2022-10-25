const longestConsec = require("./consecStr")

test("return empty string with empty array",()=>{
  expect(longestConsec([],1)).toEqual("")
})
test("return empty string with a 0 int",()=>{
  expect(longestConsec(["string"],0)).toEqual("")
})
test("returns the string when given a 1 and a string",()=>{
  expect(longestConsec(["string"],1)).toEqual("string")
})
test("returns the longest word when given a 1 int and 2 strs", ()=>{
  expect(longestConsec(["str1","string2"],1)).toEqual("string2")
})
test("returns the longest word when given a 1 int and 3 strs", ()=>{
  expect(longestConsec(["str1", "string2", "str3"],1)).toEqual("string2")
})
