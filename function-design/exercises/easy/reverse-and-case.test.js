// #todo

'use strict';


/**
* reverses a string and sets all the characters to upper or lower case
* @param {string} [text=''] - the text to reverse and casify
* @param {boolean} [lowerCase=true] - lower case or upper case
* true: set the string to lower case
* false: set the string to upper case
* @returns {string} the reversed text in all lower or upper case
*/
const stub = (text = '', lowerCase = true) => {
return '';
};

/*
strategy:
1. declare string variable for new text
2. create a for loop that will go through text and reverse the order
3. turn to lower or upper case
4. return nw string
*/

const firstTry = (text = '', lowerCase = true) => {
let newText = '';
for (const character of text) {
// bag b ab gab
newText = character + newText;
}
if (lowerCase) {
console.log(newText);
return newText.toLowerCase();
}
console.log(newText);
return newText.toUpperCase();
}; // doesnt work with second edge case

const secondTry = (text = '', lowerCase = true) => {
let newText = '';
for (let i = text.length - 1; i >= 0; i--) {
// bag
newText += text[i];
}
if (lowerCase) {
console.log(newText);
return newText.toLowerCase();
}
console.log(newText);
return newText.toUpperCase();
}; // doesnt work with first and second edge cases

const thirdTry = (text = '', lowerCase = true) => {
let newText = '';
if (typeof text !== 'string') {
throw new TypeError('text is not a string');
} else if (typeof lowerCase !== 'boolean') {
throw new TypeError('lowerCase is not a boolean');
}
for (const character of text) {
// bag b ab gab
newText = character + newText;
}
if (lowerCase) {
console.log(newText);
return newText.toLowerCase();
}
console.log(newText);
return newText.toUpperCase();
}; // works!

const fourthTry = (text = '', lowerCase = true) => {
let newText = '';
if (typeof text !== 'string' && typeof lowerCase === 'boolean') {
throw new TypeError('text is not a string');
} else if (typeof lowerCase !== 'boolean' && typeof text === 'string') {
throw new TypeError('lowerCase is not a boolean');
} else if (typeof text !== 'string' && typeof lowerCase !== 'boolean') {
throw new TypeError('text is not a string and loweCase is not a boolean');
}
for (const character of text) {
newText = character + newText;
}
if (lowerCase) {
return newText.toLowerCase();
}
return newText.toUpperCase();
}; // works!

for (const solution of [
// firstTry,
// secondTry,
// thirdTry,
fourthTry,
// secretSolution,
// stub
]) {
describe(
solution.name + ': reverses a string then sets to lower or upper case',
() => {
describe("the function's default parameters", () => {
it('second parameter defaults to true', () => {
expect(solution('asdf')).toEqual('fdsa');
});
it('first parameter defaults to an empty string', () => {
expect(solution()).toEqual('');
});
});
// write the tests indicated by the comments
describe('when set to lower case', () => {
// when the text is an empty string
it('text is empty string', () => {
expect(solution('', true)).toEqual('');
});
it('text is all upper case', () => {
expect(solution('BAG', true)).toEqual('gab');
});
it('text is all lower case', () => {
expect(solution('bag', true)).toEqual('gab');
});
it('text is mixed lowe and upper case', () => {
expect(solution('bAgE', true)).toEqual('egab');
});
it('when the text contains punctuation', () => {
expect(solution('b@g.E', true)).toEqual('e.g@b');
});
it('when the text contains numbers', () => {
expect(solution('b11@g3.E', true)).toEqual('e.3g@11b');
});
});
describe('when set to upper case', () => {
it('text is empty string', () => {
expect(solution('', false)).toEqual('');
});
it('text is all upper case', () => {
expect(solution('BAG', false)).toEqual('GAB');
});
it('text is all lower case', () => {
expect(solution('bag', false)).toEqual('GAB');
});
it('text is mixed lowe and upper case', () => {
expect(solution('bAgE', false)).toEqual('EGAB');
});
it('when the text contains punctuation', () => {
expect(solution('b@g.E', false)).toEqual('E.G@B');
});
it('when the text contains numbers', () => {
expect(solution('b11@g3.E', false)).toEqual('E.3G@11B');
});
});
describe('text is not a string', () => {
it('4546 ---> is not a string', () => {
expect(() => solution(4546, true)).toThrow(
new TypeError('text is not a string'),
);
});
describe('lowerCase is not a boolean', () => {
it('null ---> is not a boolean', () => {
const throwError = () => {
solution('red', null);
};
expect(throwError).toThrow(
new TypeError('lowerCase is not a boolean'),
);
});
});
});
},
);
}



// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
