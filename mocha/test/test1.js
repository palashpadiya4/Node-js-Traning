var assert= require('chai').assert;

describe('Field test for killer robot', () => {
let num = 6;
let str = 'asdfghsd';
it('check that num is numeric', () => {
    //inside here assert is used
    assert.isNumber(num);
});

it('check that str is string', () => {
    //inside here assert is used
    assert.isString(str);
});
});