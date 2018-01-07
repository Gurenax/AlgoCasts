// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let negative = false
  // If n is negative, set negative to true
  if (Math.sign(n) === -1) {
    negative = true
    n *= -1 // Temporarily convert n to positive
  }
  // Convert n to string and reverse the string
  reversed = reverse(n.toString())
  // Convert the reversed string to number
  return negative === false
    ? parseInt(reversed) // Return as positive value
    : parseInt(reversed) * -1 // Return as negative value
}

// Reverse a string - Using array reverse()
const reverse = str =>
  str
    .split('')
    .reverse()
    .join('')

module.exports = reverseInt
