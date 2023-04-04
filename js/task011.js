/* Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
] 
*/

function towerBuilder(numFloors) {
  const tower = [];
  const maxStars = numFloors * 2 - 1;

  for (let i = 1; i <= numFloors; i++) {
    const numStars = i * 2 - 1;
    const numSpaces = (maxStars - numStars) / 2;
    const floor =
      ' '.repeat(numSpaces) + '*'.repeat(numStars) + ' '.repeat(numSpaces);
    tower.push(floor);
  }

  return tower;
}

console.log(towerBuilder(9));
