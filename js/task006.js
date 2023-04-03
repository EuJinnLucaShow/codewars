/*You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.*/

// function updateLight(current) {
//   let message = ''
//   if (current === 'green') {
//     message = 'yellow'
//   } else if (current === 'yellow') {
//     message = 'red'
//   } else if (current === 'red') {
//     message = 'green'
//   }
//   return message
// }

// function updateLight(current) {
//   let message = ''
//   switch (current) {
//     case 'green':
//       message = 'yellow'
//       break
//     case 'yellow':
//       message = 'red'
//       break
//     case 'red':
//       message = 'green'
//       break
//   }
//   return message
// }

function updateLight(current) {
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green'
}

console.log(updateLight('green')) // "yellow"
console.log(updateLight('yellow')) // "red"
console.log(updateLight('red')) // "green"
