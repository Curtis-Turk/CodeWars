const whoLikesIt = (likeArray) => {
  if(likeArray.length == 1){
    return `${likeArray[0]} likes this`
  }else if(likeArray.length == 2){
    return `${likeArray[0]} and ${likeArray[1]} like this`
  }
  return "no one likes this"
}

exports.whoLikesIt = whoLikesIt;