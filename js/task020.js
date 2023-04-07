/*Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]*/

// function sortArray(array) {
//   const oddIndices = []
//   const oddNumbers = []

//   // Find the odd numbers and their indices
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       oddIndices.push(i)
//       oddNumbers.push(array[i])
//     }
//   }

//   // Sort the odd numbers
//   oddNumbers.sort((a, b) => a - b)

//   // Replace the values in the original array
//   for (let i = 0; i < oddIndices.length; i++) {
//     array[oddIndices[i]] = oddNumbers[i]
//   }

//   return array
// }

function sortArray(array) {
  const odd = array.filter(x => x % 2).sort((a, b) => a - b)
  return array.map(x => (x % 2 ? odd.shift() : x))
}

console.log(sortArray([5, 3, 2, 8, 1, 4])) // [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])) // [1, 3, 5, 8, 0]
console.log(sortArray([])) // []
