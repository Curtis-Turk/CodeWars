const longestConsec = require("./consecStr")

test("return string with empty array",()=>{
  expect(longestConsec([],3)).toEqual("")
})