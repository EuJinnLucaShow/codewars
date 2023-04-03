/*Створіть функцію, яка замінює «T» на «U».
Наприклад:
"GCAT" => "GCAU"
Вхідний рядок може бути довільної довжини - зокрема, може бути порожнім. Усі введені дані гарантовано дійсні, тобто кожен вхідний рядок завжди складатиметься лише з «G», «C», «A» та/або «T».*/

// function DNAtoRNA(dna) {
//   // create a function which returns an RNA sequence from the given DNA sequence
//     const arrs = dna.split('')
//     for (let i = 0; i < arrs.length; i++) {
//         if (arrs[i] === 'T') {
//             arrs[i] = 'U';
//         }
//     }
//     return arrs.join('');
// }

// function DNAtoRNA(dna){
//   return dna.replace(/T/g, 'U');
// }

const DNAtoRNA = dna => dna.replaceAll('T', 'U')

// function DNAtoRNA(dna) {
//   return dna.split("T").join("U");
// }

console.log(DNAtoRNA('GCAT')) //  "GCAU"
console.log(DNAtoRNA('TTTT')) //  "UUUU"
console.log(DNAtoRNA('GCAT')) //  "GCAU"
console.log(DNAtoRNA('GACCGCCGCC')) //  "GACCGCCGCC"
