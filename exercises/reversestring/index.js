// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Same as solution 2 but using reduce function
  return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse

// Solution 1
// function reverse(str) {
//   return str
//     .split('') // Convert the string to array
//     .reverse() // Reverse the array
//     .join('') // Convert array back to string
// }

// Solution 2
// function reverse(str) {
//   let reversed = ''

//   // For every character in the string
//   for(let char of str) {
//     // Concatenate each character with the reversed string
//     reversed = char + reversed
//   }

//   return reversed
// }

// Solution 3
// function reverse(str) {
//   // Same as solution 2 but using reduce function
//   return str.split('').reduce((reversed, char)=> {
//     return char + reversed
//   }, '')
// }