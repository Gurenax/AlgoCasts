// Recursion review - Print a number from N down to 0
const printNumber = (n, decrementStep=1) => {
  // Base case
  if (n===0) {
    return
  }
  // Print n
  console.log(n)
  // Call printNumber but ensuring that n will be changed
  // printNumber(n - 1)
  printNumber(n - decrementStep, decrementStep) // e.g. n-1
}

printNumber(10)
// printNumber(10,2)