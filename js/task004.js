/*Напишіть функцію, яка обчислює середнє значення чисел у заданому списку.

Примітка. Порожні масиви мають повертати 0.*/

function findAverage(array) {
  if (array.length === 0) {
    return 0
  } else {
    return array.reduce((a, b) => a + b) / array.length
  }
}

console.log(findAverage([1, 1, 1])) // 1
console.log(findAverage([1, 2, 3])) // 2
console.log(findAverage([1, 2, 3, 4])) // 2.5
console.log(findAverage([])) // 0
