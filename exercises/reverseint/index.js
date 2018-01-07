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
  // If n value is just 1 digit
  if (n > -10 && n < 10) return n
  // If n is negative, set negative to true
  let negative = false
  if (n < 0) {
    negative = true
    // Temporarility convert n to positive
    n *= -1
  }
  // Convert n to string
  str = String(n)
  // Reverse the string
  reversed = reverse(str)
  // Convert the reversed string to number
  return negative === false
    ? Number.parseInt(reversed) // Return as positive value
    : Number.parseInt(reversed) * -1 // Return as negative value
}

// Reverse a string - Using array reverse()
const reverse = str =>
  str
    .split('')
    .reverse()
    .join('')

module.exports = reverseInt
