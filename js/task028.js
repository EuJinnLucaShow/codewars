/*Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

// function solution(string) {
//   return string.replace(/[A-Z]/g, function (match) {
//     return ' ' + match
//   })
// }

// console.log(solution('camelCasing')) //'camel Casing'
// console.log(solution('camelCasingTest')) //'camel Casing Test'

/*функція replace() замінює кожну літеру в верхньому регістрі на функцію заміни. Ця функція отримує знайдену літеру як свій аргумент match, додає до неї пробіл перед ним і повертає результат заміни.*/

function solution(string) {
  return string.replace(/([A-Z])/g, ' $1')
}

console.log(solution('camelCasing')) //'camel Casing'
console.log(solution('camelCasingTest')) //'camel Casing Test'

/*Вираз [A-Z] вказує на будь-яку літеру в верхньому регістрі, а функція заміни " $1" додає пробіл перед кожною знайденою літерою.

Регулярний вираз включає літеру в дужки, щоб зберегти її як знайдене входження. У цьому виразі ( ) є групою, а $1 повертає знайдену літеру в цій групі.

Це означає, що replace() буде замінювати кожну літеру, яка знаходиться в верхньому регістрі, на пробіл і цю літеру. Пробіл буде додано перед літерою, оскільки ви вказали його у рядку заміни перед $1.*/
