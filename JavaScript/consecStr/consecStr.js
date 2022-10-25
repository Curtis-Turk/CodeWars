const longestConsec = (strArr, k) => {
  
  if(strArr.length == 0 || k <= 0){
    return ""
  }else if(k == 1){
    return strArr.reduce((a,b)=> 
    {return a.length > b.length ? a : b})
  } else
    combineArr = []
    prevString = ""
    strArr.forEach((str) => {
    combineArr.push(prevString + str)
    prevString = str
    }
    )
    console.log(combineArr)
    return combineArr.reduce((a,b)=> 
    {return a.length > b.length ? a : b})
}

module.exports = longestConsec