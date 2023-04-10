/*Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  return string.replace(/[A-Z]/g, function (match) {
    return ' ' + match
  })
}

console.log(solution('camelCasing')) //'camel Casing'
console.log(solution('camelCasingTest')) //'camel Casing Test'
