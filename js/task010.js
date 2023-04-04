/*Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"*/

// function findNeedle(haystack) {
//   const clientNameToFind = 'needle';
//   let message = '';

//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === clientNameToFind) {
//       message = `found the needle at position ${i}`;
//       break;
//     }
//   }

//   if (message === '') {
//     message = 'Your function did not find the needle';
//   }

//   return message;
// }

function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle')
}

console.log(
  findNeedle([
    '3',
    '123124234',
    undefined,
    'needle',
    'world',
    'hay',
    2,
    '3',
    true,
    false,
  ]),
)
