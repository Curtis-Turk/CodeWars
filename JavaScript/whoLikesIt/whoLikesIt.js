const whoLikesIt = (likeArray) => {
  if(likeArray.length == 1){
    return `${likeArray[0]} likes this`
  }else if(likeArray.length == 2){
    return `${likeArray[0]} and ${likeArray[1]} like this`
  }else if(likeArray.length == 3){
    return `${likeArray[0]}, ${likeArray[1]} and ${likeArray[2]} like this`
  }else if(likeArray.length == 4){
    return `${likeArray[0]}, ${likeArray[1]} and 2 others like this`
  }
  return "no one likes this"
}

exports.whoLikesIt = whoLikesIt;