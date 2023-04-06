/*DESCRIPTION:
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12*/

function queueTime(customers, n) {
  let tills = Array(n).fill(0) // create an array of n tills, initialized to 0
  for (let time of customers) {
    let minIndex = tills.indexOf(Math.min(...tills)) // find the till with the shortest queue
    tills[minIndex] += time // add the customer's checkout time to the shortest queue
  }
  return Math.max(...tills) // return the longest queue as the total time required
}

console.log(queueTime([], 1)) // 0
console.log(queueTime([1, 2, 3, 4], 1)) // 10
console.log(queueTime([2, 2, 3, 3, 4, 4], 2)) // 9
console.log(queueTime([1, 2, 3, 4, 5], 100)) // 5
console.log(queueTime([5, 3, 4], 1)) // 12
console.log(queueTime([10, 2, 3, 3], 2)) // 10
console.log(queueTime([2, 3, 10, 2], 2)) //12

/*Ось як ця функція працює:

- По-перше, створює масив під назвою `tills` довжини `n`, де кожен елемент ініціалізується рівним 0.
- Потім для кожного клієнта в масиві клієнтів знаходить індекс каси з найкоротшою чергою (тобто найменшим загальним часом на даний момент), використовуючи `indexOf` і `Math.min`.
- Потім додає час виписки клієнта до найкоротшої черги, оновлюючи відповідний елемент у масиві кас.
- Після обробки всіх клієнтів функція повертає найдовшу чергу (тобто найвищий загальний час) за допомогою Math.max.*/
