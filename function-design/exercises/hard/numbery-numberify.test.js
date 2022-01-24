// #todo


'use strict';

/**
 * takes an array of strings and returns a new array of numbers
 *  the new array contains all the numbery strings, cast to numbers
 * does not modify the argument (no side-effects)
 * @param {string[]} arrayOfStrings - the array of strings
 * @returns {number[]} an array containing only numbers, and not NaN
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */
const stub = (string = []) => {
  return number = [];
};

/*
strategy:
1. declare empty array
2. check if argument is array
3. check if argument contains non string values
4. convert array values to numbers
5. filter NaN values
6. construct new array
7. return array 
*/

const firstTry = (arr) => {
let newArr = [];
if(Array.isArray(arr)) {
for (const value of arr) {
  if (typeof value !== 'string'){
    throw new TypeError("arrayOfStrings contains non-strings");
  } else if (Number(value) !== NaN) {
newArr.push(Number(value));
console.log(value, newArr);
  }
}
  return newArr;
} 
throw new TypeError("arrayOfStrings is not an array");
};

for (const solution of [
  // secretSolution,
  firstTry
  // stub
]) {
  describe(solution.name + ': converts an array of strings into an array of numbers', () => {
    describe('parameter is an empty array', () => {
      it('return an empty array', () => {
expect(solution([])).toEqual([]);
      });
    });
  /*  
  describe('parameter is not an array', () => {
      it('return TypeError message', () => {
expect(solution([])).toEqual([]);
      });
    }); 
    */
     describe('parameter contains all positive integer numbery strings', () => {
      it('return a number arrray', () => {
expect(solution(['4', '6', '3', '190'])).toEqual([4, 6, 3, 190]);
      });
       describe('parameter contains negative numbery strings', () => {
      it('return a number arrray', () => {
expect(solution(['-4', '-6', '-3', '-190'])).toEqual([-4, -6, -3, -190]);
      });
     });
      describe('parameter contains positive float numbery strings', () => {
      it('return a number arrray', () => {
expect(solution(['0.4', '2890.6', '7.2'])).toEqual([0.4, 2890.6, 7.2]);
      });
     });
      describe('parameter contains negative float numbery strings', () => {
      it('return a number arrray', () => {
expect(solution(['-0.4', '-2890.6', '-7.2'])).toEqual([-0.4, -2890.6, -7.2]);
      });
     });
       describe('parameter contains non numbery strings', () => {
      it('return a number arrray without NaN values', () => {
expect(solution(['gary', '7', 'six', 'train', '65'])).toEqual([7, 65]);
      });
     });
/*  
describe('parameter contains other data types than strings', () => {
     it('return TypeError message', () => {
expect(solution(['pom', 703, false, undefined, ,null, -72, 3.3364])).toEqual(error1);
      }); 
      */
     });
    });
  };

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings contains non-strings"); } const c = a.map(a => +a), d = c.filter(a => !Number.isNaN(a)); return d }



