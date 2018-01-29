// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // Function which creates a character map from a string
  const charMapper = str => {
    return str.split('').reduce((charMap, char) => {
      // Increment key value by 1. However, if undefined initialise as 1
      charMap[char] = charMap[char] + 1 || 1
      return charMap
    }, {})
  }

  // Function which converts a string to only alphanumeric and lowercase characters
  const alphanumericLowercase = str => {
    return str.replace(/[^\w]/g,'').toLowerCase()
  }
  
  // Create character map for string A and B
  const charMapA = charMapper(alphanumericLowercase(stringA))
  const charMapB = charMapper(alphanumericLowercase(stringB))

  // If length of two character maps are equal
  if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false
  }
  // For each key in char map A
  for(let key in charMapA) {
    // Check if key value is similar between char map A and B
    if(charMapA[key] !== charMapB[key]) {
      // If not, return false immediately
      return false
    }
  }
  // Return true if no condition is violated
  return true
}

module.exports = anagrams;
