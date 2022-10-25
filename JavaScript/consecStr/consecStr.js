const longestConsec = (strArr, k) => {
  
  if(strArr.length == 0){
    return ""
  }else
    return strArr.reduce((a,b)=> {return a.length > b.length ? a : b})
}

module.exports = longestConsec