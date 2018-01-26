// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // Convert String to Object with count for each character
  const characters = {}
  str.split('').map( c => {
    characters[c] = !!characters[c] ? characters[c] + 1 : 1
  })
  
  // Find the character with the biggest value in the object
  let mostCommonChar = ''
  let highestOccurence = 0
  for(let key in characters) {
    // If the object value is highesr than the highest occurence,
    // use object value as new highest occurence and have the key as the most common character
    if (characters[key] > highestOccurence){
      highestOccurence = characters[key]
      mostCommonChar = key
    }
  }
  
  return mostCommonChar
}

module.exports = maxChar;
