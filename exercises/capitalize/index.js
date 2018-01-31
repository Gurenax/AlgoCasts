// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // Array of capitalized words
  const capitalized = []
  // Split into words by spaces
  const words = str.split(' ')
  // For every word in words
  for(word of words) {
    // Replace first character of each with its capital letter
    capitalized.push( word[0].toUpperCase() + word.slice(1) )
  }
  return capitalized.join(' ')
}

module.exports = capitalize;

// Alternate solution
// function capitalize(str) {
//   // Initialise result with first characetr of str capitalized
//   const result = [str.charAt(0).toUpperCase()]
//   // For every character in str
//   for(let i=1; i<str.length; i++) {
//     // If the last character is a space
//     if(str[i-1] === ' ') {
//       result.push(str[i].toUpperCase())
//     }
//     else {
//       result.push(str[i])
//     }
//   }
//   // Join the characters back together
//   return result.join('')
// }

// Original solution
// function capitalize(str) {
//   // Array of capitalized words
//   const capitalized = []
//   // Split into words by spaces
//   const words = str.split(' ')
//   // For every word in words
//   for(word of words) {
//     // Replace first character of each with its capital letter
//     capitalized.push( word[0].toUpperCase() + word.slice(1) )
//   }
//   return capitalized.join(' ')
// }