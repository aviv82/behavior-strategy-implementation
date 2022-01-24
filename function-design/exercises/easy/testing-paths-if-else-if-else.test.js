// #todo

'use strict';

/**
 * returns a description of how similar two values are
 *  if they are strictly equal -> 'strictly equal'
 *  if they have the same type -> 'same type'
 *  else -> 'totally different'
 * @param {any} val1
 * @param {any} val2
 * @returns {string} the values' solution
 */
const stub = () => {};
/*
strategy:
1. declare string variable to store result
2. create condition fo val1 an val2 to check strict comparison
3. create condition fo val1 an val2 to check type comparison
4. write default result
5. return result
*/
  // let result = '';
const firstTry = (val1, val2) => {
  if(val1 === val2) {
    console.log(result);
    return result = 'strictly equal'
  } else if(typeof val1 === typeof val2) {
        console.log(result);
        return result = 'same type'
  }
      console.log(result);
  return result = 'totally different';
}; // works!

const secondTry = (val1, val2) => {
  if(val1 === val2) {
    console.log('strictly equal');
    return 'strictly equal'
  } else if(typeof val1 === typeof val2) {
        console.log('same type');
        return 'same type'
  }
      console.log('totally different');
  return 'totally different';
}; // works!

const thirdTry = (val1, val2) => {
if(val1 === val2) return 'strictly equal'
   else if(typeof val1 === typeof val2) return 'same type'
  else return 'totally different';
}; // works!

const fourthTry = (val1, val2) => {
  return val1 === val2 ? 'strictly equal' : typeof val1 === typeof val2 ? 'same type' : 'totally different';
} // works!

for (const solution of [
  // secretSolution,
  // stub,
  // firstTry
  // secondTry
  // thirdTry
  fourthTry
]) {
  describe(solution.name + ': determines how similar two values are', () => {
    describe('when values are strictly equal', () => {
      it('two identical strings -> "strictly equal"', () => {
        expect(solution('hello', 'hello')).toEqual('strictly equal');
      });
      it('two identical numbers -> "strictly equal"', () => {
        expect(solution(1, 1.0)).toEqual('strictly equal');
      });
      it('two identical booleans -> "strictly equal"', () => {});
              expect(solution(true, true)).toEqual('strictly equal');
    });
    describe('when values have the same type', () => {
      it('two different strings -> "same type"', () => {
        expect(solution('hello', 'hello1')).toEqual('same type');
      });
      it('two different numbers -> "same type"', () => {
        expect(solution(4, 10)).toEqual('same type');
      });
      it('two different booleans -> "same type"', () => {});
              expect(solution(true, false)).toEqual('same type');
    });
    describe('when values are nothing alike', () => {
      it('values that are obviously different', () => {
        expect(solution(null, 4)).toEqual('totally different');
      });
      it('values that can be confusing', () => {
        expect(solution('4', 4)).toEqual('totally different');
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a, b) { let c = ""; return c = a === b ? "strictly equal" : typeof a == typeof b ? "same type" : "totally different", c }
