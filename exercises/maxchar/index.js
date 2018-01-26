// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // Convert String to Object with count for each character
  const chars = convertStringToObjectWithCharCount(str)
  
  // Find the character with the biggest value in the object
  let mostCommonChar = ''
  let highestOccurence = 0
  for(let key in chars) {
    // If the object value is highesr than the highest occurence,
    // use object value as new highest occurence and have the key as the most common character
    if (chars[key] > highestOccurence){
      highestOccurence = chars[key]
      mostCommonChar = key
    }
  }
  
  return mostCommonChar
}

// Convert String to Object with count for each character
const convertStringToObjectWithCharCount = (str) => {
  const chars = {}
  for(let char of str) {
    // Using Ternary
    // chars[char] = !chars[char] ? 1 : chars[char] + 1
    // Using OR
    chars[char] = chars[char] + 1 || 1
  }
  return chars
}

// Original solution
// function maxChar(str) {
//   // Convert String to Object with count for each character
//   const chars = {}
//   str.split('').map( c => {
//     chars[c] = !!chars[c] ? chars[c] + 1 : 1
//   })
  
//   // Find the character with the biggest value in the object
//   let mostCommonChar = ''
//   let highestOccurence = 0
//   for(let key in chars) {
//     // If the object value is highesr than the highest occurence,
//     // use object value as new highest occurence and have the key as the most common character
//     if (chars[key] > highestOccurence){
//       highestOccurence = chars[key]
//       mostCommonChar = key
//     }
//   }
  
//   return mostCommonChar
// }

module.exports = maxChar;
