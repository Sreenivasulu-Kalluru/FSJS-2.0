/* 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    - 4 > 3
    - 4 >= 3
    - 4 < 3
    - 4 <= 3
    - 4 == 4
    - 4 === 4
    - 4 != 4
    - 4 !== 4
    - 4 != '4'
    - 4 == '4'
    - 4 === '4'
    - Find the length of python and jargon and make a falsy comparison statement.
*/

4 > 3;
console.log(true);

4 >= 3;
console.log(true);

4 < 3;
console.log(false);

4 <= 3;
console.log(false);

4 == 4;
console.log(true);

4 === 4;
console.log(true);

4 != 4;
console.log(false);

4 !== 4;
console.log(false);

4 != '4';
console.log(false);

4 == '4';
console.log(true);

4 === '4';
console.log(false);

// - Find the length of python and jargon and make a falsy comparison statement.
const word1 = 'python';
const word2 = 'jargon';

let comparison = word1.length !== word2.length;

console.log(comparison);
