/*Ваше завдання знайти перший елемент масиву, який не є послідовним.

Під не послідовним ми маємо на увазі не точно на 1 більший за попередній елемент масиву.

наприклад Якщо у нас є масив [1,2,3,4,6,7,8], то 1, потім 2, потім 3, потім 4 є послідовними, а 6 – ні, тож це перше непослідовне число.

Якщо весь масив є послідовним, повертається значення null.

Масив завжди матиме принаймні 2 елементи, і всі елементи будуть числами. Усі номери також будуть унікальними та в порядку зростання. Числа можуть бути додатними чи від’ємними, і перше непослідовне також може бути будь-яким!*/

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== 1) {
      return arr[i]
    }
  }
  return null
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])) //6
console.log(firstNonConsecutive([1, 2, 3, 4])) //null
