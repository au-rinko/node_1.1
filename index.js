const reversePolishNotation = require("@au-rinko/node_1");

console.log(`\nThe results are:`);
console.log(`for '15 9 + 10 - 14 - 7 * 5 14 * 14 - *' is ${reversePolishNotation('15 9 + 10 - 14 - 7 * 5 14 * 14 - *')}`);
console.log(`for '8 2 15 * + 8 - 13 * 15 - 6 6 13 + + -' is ${reversePolishNotation('8 2 15 * + 8 - 13 * 15 - 6 6 13 + + -')}`);
console.log(`for '4 9 + 1 - 2 6 13 8 0 6 9 * - - + + - *' is ${reversePolishNotation('4 9 + 1 - 2 6 13 8 0 6 9 * - - + + - *')}`);
console.log(`for '6 1 - 14 * 11 + 3 - 2 12 5 - * +' is ${reversePolishNotation('6 1 - 14 * 11 + 3 - 2 12 5 - * +')}`);
console.log(`for '2 11 6 * - 6 * 7 - 7 + 14 + 8 10 *' + is ${reversePolishNotation('2 11 6 * - 6 * 7 - 7 + 14 + 8 10 * +')}`);
console.log(`for '13 3 14 * 10 + * 12 4 + + 8 *' is ${reversePolishNotation('13 3 14 * 10 + * 12 4 + + 8 *')}`);
console.log(`for '10 3 11 - + 7 + 2 - 10 - 10 -' is ${reversePolishNotation('10 3 11 - + 7 + 2 - 10 - 10 -')}`);
console.log(`for '4 9 - 1 14 - - 12 + 2 1 - - 8 -' is ${reversePolishNotation('4 9 - 1 14 - - 12 + 2 1 - - 8 -')}`);
console.log(`for '2 11 0 * * 13 15 - + 0 - 4 * 1 *' is ${reversePolishNotation('2 11 0 * * 13 15 - + 0 - 4 * 1 *')}`);
console.log(`for '4 8 6 10 * * * 0 11 * -' is ${reversePolishNotation('4 8 6 10 * * * 0 11 * -')}`);