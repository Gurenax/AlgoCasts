// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Original solution
// const steps = n => {
//   for (let row = 0; row < n; row++) {
//     let stair = ''

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }

//     console.log(stair)
//   }
// }

// Recursive solution
// const steps = (n, row = 0, stair = '') => {
//   // Base case
//   if (n === row) {
//     return
//   }

//   // End of the row
//   if (n === stair.length) {
//     console.log(stair) // Print row
//     steps(n, row + 1) // Go to next row, resets the stair
//     return
//   }

//   // Columns
//   if (stair.length <= row) {
//     // Every column before value of row
//     stair += '#'
//   } else {
//     // Every column after value of row
//     stair += ' '
//   }

//   // Next recursion
//   steps(n, row, stair)
// }

// Refactored recursive solution
const steps = (n, row = 0, stair = '') => {
  // Base case
  if (n === row) return

  // At the end of every row, Print stair and proceed to next row
  if (n === stair.length) {
    // n will never change, but stair will increment its size for every row
    // Print row
    console.log(stair)
    // Go to next row, resets the stair. Not necessarily returning anything
    return steps(n, row + 1)
  }

  // Columns
  // Add pound for every column before value of row, otherwise add space
  const add = stair.length <= row ? '#' : ' '

  // Next recursion
  // Go to next column. Row doesn't increment. Stairs will have a new value.
  steps(n, row, stair + add)
}

module.exports = steps
