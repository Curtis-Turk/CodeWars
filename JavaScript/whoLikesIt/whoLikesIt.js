const whoLikesIt = (likeArray) => {
  if(likeArray.length > 0){
    return `${likeArray[0]}likes this`
  }
  return "no one likes this"
}

exports.whoLikesIt = whoLikesIt;