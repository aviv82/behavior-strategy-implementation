// #todo

'use strict';

/**
* removes all odd numbers from an array of numbers
* does not modify the argument (no side-effects)
* @param {number[]} arrayOfNumbers - the array of numbers to filter
* @returns {number[]} an array with only even numbers
*/
const stub = (arrayOfNumbers) => {
return newArray;
};

/*
strategy 
use map or filter methods
1. declare array variable for the new array
2. write callback function to check if a number is an odd number
3. use filter method to remove odd numbers
4. return new array 
*/

const firstTry = (arrayOfNumbers) => {
let newArray = [];
newArray = arrayOfNumbers.filter(findOdd);
return newArray;
}; //works!

function findOdd(par = 0) {
return par % 2 === 0 ? true : false;
}

const secondTry = (arrayOfNumbers) => {
let newArray = [];
function whoIsOdd(par = 0) {
return par % 2 === 0;
}
newArray = arrayOfNumbers.filter(whoIsOdd);
return newArray;
}; // works!

const thirdTry = (arrayOfNumbers) => {
if (arrayOfNumbers.some(findIfNum)) {
throw new TypeError('arrayOfNumbers does not contain only numbers')
} 
let newArray = [];
newArray = arrayOfNumbers.filter(findOdd);
return newArray;
}; // works!

function findIfNum(par) {
return typeof par !== 'number'
}

// [4, 5, 8, "8"]

/* const ages = [3, 10, 18, 20];

ages.some(checkAdult); 
function checkAdult(age) {
return age > 18;
} */

for (const solution of [
// secretSolution,
// stub
// firstTry,
secondTry
// thirdTry
]) {
describe(
solution.name + ': remove all odd numbers from an array of numbers',
() => {
describe('default parameter gives empty array', () => {
it('default empty array', () => {
expect(solution([])).toEqual([]);
});
});
describe('array contains only integer numbers', () => {
it('[12, 55, 802, 13, 7] --> return only even numbers', () => {
expect(solution([12, 55, 802, 13, 7])).toEqual([12, 802]);
});
});
it('[13] --> return only even numbers', () => {
expect(solution([13])).toEqual([]);
});
},
);
it('[13] --> return only even numbers', () => {
expect(solution([13])).toEqual([]);
});
it('[1, 2, 3, -4] --> return only even numbers', () => {
expect(solution([1, 2, 3, -4])).toEqual([2, -4]);
});
describe('array contains float numbers', () => {
it('[12, 8.6, 903.2, 4.83] --> return only even numbers', () => {
expect(solution([12, 8.6, 903.2, 4.83])).toEqual([12]);
});
it('[12, 8.6, , -105, 903.2, -7004.6, -4.83] --> return only even numbers', () => {
expect(solution([12, 8.6, , -105, 903.2, -7004.6, -4.83])).toEqual([12]);
});
});
describe('array is not an array', () => {
it('argument is not an array -- > throw error', () => {
const throwError = () => {
solution();
};
expect(throwError).toThrow(
new TypeError('arrayOfNumbers is not an array'),
);
});
describe('array does not contain only numbers', () => {
describe('array contain sting', () => {
it('[4, 5, 8, "8"] --> throw error', () =>{
expect(() => solution([4, 5, 8, "8"])).toThrow(new TypeError('arrayOfNumbers does not contain only numbers'))
});
});
});
});
}


// expect(() => addTwoNumbers('2', 1)).toThrow(new TypeError('a is not a number')

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c }
