// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // Compare if original string is equal with reversed string
  return str === reverse(str)
}

// Reverse a string - Using array reverse()
const reverse = str => str.split('').reverse().join('')

// Alternate solution 1 - Using array reduce()
// const reverse = str => str.split('').reduce((rev, char) => char + rev, '')

// Alternate solution 2 - Using array every()
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1]
//   })
// }

// Alternate solution 2 (clean) - Using array every()
// const palindrome = str =>
//   str.split('').every((char, i) => char === str[str.length - i - 1])

module.exports = palindrome
