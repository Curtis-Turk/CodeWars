const whoLikesIt = (likeArray) => {
  switch (likeArray.length) {
    case 0: return "no one likes this"
    case 1: return `${likeArray[0]} likes this`
    case 2: return `${likeArray[0]} and ${likeArray[1]} like this`
    case 3: return `${likeArray[0]}, ${likeArray[1]} and ${likeArray[2]} like this`
    case 4: return `${likeArray[0]}, ${likeArray[1]} and 2 others like this`
    default: return `${likeArray[0]}, ${likeArray[1]} and ${likeArray.length - 2} others like this`
  }
}

exports.whoLikesIt = whoLikesIt;