// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str
    .split('') // Convert the string to array
    .reverse() // Reverse the array
    .join('') // Convert array back to string
}

module.exports = reverse
