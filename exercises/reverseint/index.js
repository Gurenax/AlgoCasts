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
  // Convert n to string and reverse the string
  const reversed = reverse(n.toString())

  // Convert the reversed string to number and multiply to it's sign
  // Parsing to int will remove the sign in the end e.g. 5- becomes 5
  // Math.sign produces -1 if the number is negative, 1 if the number is position and 0 for zero
  return parseInt(reversed) * Math.sign(n)
}

// Reverse a string - Using array reverse()
const reverse = str =>
  str
    .split('')
    .reverse()
    .join('')

module.exports = reverseInt
