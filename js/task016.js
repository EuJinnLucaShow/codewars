/*DESCRIPTION:
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.*/

function digPow(n, p) {
  let digits = n.toString().split('').map(Number) // перетворюємо число n на масив цифр
  let powerSum = digits.reduce(
    (acc, digit, i) => acc + Math.pow(digit, p + i),
    0,
  ) // розраховуємо суму степенів кожної цифри
  if (powerSum % n === 0) {
    return powerSum / n // k існує, повертаємо його значення
  } else {
    return -1 // k не існує
  }
}

console.log(digPow(89, 1)) // 1 since 8¹ + 9² = 89 = 89 * 1
console.log(digPow(92, 1)) // -1 since there is no k such as 9¹ + 2² equals 92 * k
console.log(digPow(695, 2)) // 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
console.log(digPow(46288, 3)) // 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

/*Функція digPow() приймає два аргументи n і p, де n - це задане число, для якого потрібно знайти значення k, а p - початкова степінь. Функція спочатку перетворює число n на масив цифр, використовуючи методи toString() та split(''), а потім використовує метод reduce(), щоб розрахувати суму степенів кожної цифри. Початкова степінь p додається до індексу i кожної цифри у масиві, щоб розрахувати степінь.

Далі функція перевіряє, чи є powerSum дільником n. Якщо так, то k існує, і функція повертає частку powerSum / n як значення k. Якщо ні, то функція повертає -1, показуючи, що немає такого k, для якого рівняння буде виконуватися.*/

/*
function digPow(n, p) {
  const x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}
*/
