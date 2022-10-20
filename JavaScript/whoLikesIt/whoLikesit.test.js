const { whoLikesIt } = require('./whoLikesIt')

describe("whoLikesIt",()=>{
  test("Returns a default message",()=>{
    expect(whoLikesIt([])).toEqual("no one likes this")
  })
  test("Returns a message if one name appears",()=>{
    expect(whoLikesIt(["Peter"])).toEqual("Peter likes this")
  })
  test("Returns a message for multiple likes",()=>{
    expect(whoLikesIt(["Jacob", "Jane"])).toEqual("Jacob and Jane like this")
  })
  test("Returns a message for three likes",()=>{
    expect(whoLikesIt(["Jacob", "Jane", "Anna"])).toEqual("Jacob, Jane and Anna like this")
  })
  test("Returns a message for four likes",()=>{
    expect(whoLikesIt(["Jacob", "Jane", "Anna", "Jake"])).toEqual("Jacob, Jane and 2 others like this")
  })
})