// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for(let num=1; num<=n; num++) {
    // Is the number a multiple of 3 and 5?
    if(num % 3 === 0 && num % 5 === 0) { // tip: can also be num % 15 since 3 * 5 is 15
      console.log('fizzbuzz')
    }
    // Is the number a multiple of 3?
    else if(num % 3 === 0) {
      console.log('fizz')
    }
    // Is the number a multiple of 5?
    else if(num % 5 === 0) {
      console.log('buzz')
    }
    // Not a multiple of 3 or 5
    else {
      console.log(num)
    }
  }
}

// Original solution
// function fizzBuzz(n) {
//   for(let num=1; num<=n; num++) {
//     if(num % 3 === 0 && num % 5 === 0) {
//       console.log('fizzbuzz')
//     }
//     else if(num % 3 === 0) {
//       console.log('fizz')
//     }
//     else if(num % 5 === 0) {
//       console.log('buzz')
//     }
//     else {
//       console.log(num)
//     }
//   }
// }

module.exports = fizzBuzz;
