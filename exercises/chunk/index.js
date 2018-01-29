// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // Create an empty array called chunked
  const chunked = []
  // Function to retrieve last element of array
  const lastElementOfArray = arr => arr[arr.length-1]

  // Iterate over the original array
  for(num of array) {
    // Get last element of chunked
    const lastElem = lastElementOfArray(chunked)
    // If the last element is undefined or its length is equal to chunk size
    if(!lastElem || lastElem.length===size) {
      // Push a new array containing the number in chunked
      chunked.push([num])
    }
    else {
      // Push the number to the last element
      lastElem.push(num)
    }
  }

  return chunked
}


module.exports = chunk;
