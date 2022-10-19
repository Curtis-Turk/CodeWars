const oddInt = require('./oddInt')

describe("oddInt",()=>{
  test("Returns a number", ()=>{
    expect(oddInt([0])).toEqual(0)
  })
  test("Returns another number", ()=>{
    expect(oddInt([7])).toEqual(7)
  })
  test("Returns the number appearing odd numbers of times", ()=>{
    expect(oddInt([0,0,1])).toEqual(1)
  })
  test("Returns another odd numbered number", ()=>{
    expect(oddInt([0,1,0,1,0])).toEqual(0)
  })
  test("Returns the correct number from a long array", ()=>{
    expect(oddInt([1,2,2,3,3,3,4,3,3,3,2,2,1])).toEqual(4)
  })
})