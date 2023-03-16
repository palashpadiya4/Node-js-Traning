var assert = require ('chai').assert;

describe('testsuite12', () => {

    let num = 6;
    let str = 'palash';

    it('check that num is numeric', () => {
        assert.isNumber(num);
        
    });
    it('check that str is string ', () => {
        assert.isString(str);
    });
    
});