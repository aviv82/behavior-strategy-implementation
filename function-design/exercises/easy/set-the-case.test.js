// #todo

'use strict';

/**
* sets all the characters in a string to upper or lower case
* @param {string} [text=''] - the text to casify
* @param {boolean} [lowerCase=true] - lower case or upper case
* true: set the string to lower case
* false: set the string to upper case
* @returns {string} the text in all lower or upper case
*/
const stub = (text = '', lowerCase = true) => {
return '';
};

/*
strategy
1. read and understand the description
2. fill in the stub
3. declare a string variable for the new converted text
4. write if condition to decide if we need upper or lower case
5. use method to convert the text
6. return the new text
*/

const firstTry = (text = '', lowerCase = true) => {
let newText = '';
if (lowerCase) {
newText = text.toLowerCase();
return newText;
} else {
newText = text.toUpperCase();
return newText;
}
}; // works!

const secondTry = (text = '', lowerCase = true) => {
return lowerCase ? text.toLowerCase() : text.toUpperCase();
}; // works!

const thirdTry = (text = '', lowerCase = true) => {
return lowerCase && text.toLowerCase() || text.toUpperCase();
}; // works!

for (const solution of [
// secretSolution,
// stub
// firstTry
// secondTry
thirdTry
]) {
describe(solution.name + ': sets a text to lower or upper case', () => {
describe("the function's default parameters", () => {
it('second parameter defaults to true', () => {
expect(solution('asdf')).toEqual('asdf');
});
it('first parameter defaults to an empty string', () => {
expect(solution()).toEqual('');
});
});
// write the tests indicated by the comments
describe('when set to lower case', () => {
// when the text is an empty string
it('text is an empty string', () => {
expect(solution('', true)).toEqual('');
});
it('when the text is all upper case', () => {
expect(solution('HELLO', true)).toEqual('hello');
});
it('when the text is all lower case', () => {
expect(solution('hello', true)).toEqual('hello');
});
it('when the text is mixed upper and lower case', () => {
expect(solution('HellO', true)).toEqual('hello');
});
it('when the text contains weird characters', () => {
expect(solution('H&llO>>>', true)).toEqual('h&llo>>>');
});
it('when the text contains numbers', () => {
expect(solution('H3ll0', true)).toEqual('h3ll0');
});
});
describe('when set to upper case', () => {
it('text is an empty string', () => {
expect(solution('', false)).toEqual('');
});
it('when the text is all upper case', () => {
expect(solution('HELLO', false)).toEqual('HELLO');
});
it('when the text is all lower case', () => {
expect(solution('hello', false)).toEqual('HELLO');
});
it('when the text is mixed upper and lower case', () => {
expect(solution('HellO', false)).toEqual('HELLO');
});
it('when the text contains weird characters', () => {
expect(solution('H&llO>>>', false)).toEqual('H&LLO>>>');
});
it('when the text contains numbers', () => {
expect(solution('H3ll0', false)).toEqual('H3LL0');
});
});
});
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }

