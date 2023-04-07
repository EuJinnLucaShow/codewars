/*Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice*/

function duplicateCount(text) {
  let counts = {}
  let duplicates = 0
  for (let char of text.toLowerCase()) {
    counts[char] = (counts[char] || 0) + 1
    if (counts[char] === 2) {
      duplicates++
    }
  }
  return duplicates
}

console.log(duplicateCount('')) // 0
console.log(duplicateCount('abcde')) // 0
console.log(duplicateCount('aabbcde')) // 2
console.log(duplicateCount('aabBcde')) // 2
console.log(duplicateCount('Indivisibility')) // 1

/*Ця реалізація використовує об’єкт, викликаний countsдля зберігання кількості входжень кожного символу у вхідному рядку, ігноруючи регістр. Він повторює символи вхідного рядка, оновлює відповідний підрахунок у countsта збільшує duplicatesлічильник, якщо підрахунок стає 2. Нарешті, він повертає duplicatesпідрахунок.

Зверніть увагу, що counts[char] = (counts[char] || 0) + 1рядок збільшує кількість поточного символу, countsякщо він існує, або ініціалізує його до 1 в іншому випадку. Це стислий спосіб перевірити наявність ключа в об’єкті та уникнути помилок через невизначені значення.*/

// function duplicateCount(text) {
//   return (
//     text
//       .toLowerCase()
//       .split('')
//       .sort()
//       .join('')
//       .match(/([^])\1+/g) || []
//   ).length
// }
