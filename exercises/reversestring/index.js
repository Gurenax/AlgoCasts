// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Convert the string to array
  // Reverse the array
  // Convert array back to string
  return str.split('').reverse().join('')
}

module.exports = reverse;
