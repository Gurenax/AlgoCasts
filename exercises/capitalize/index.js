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