var expect= require('chai').expect;

describe('test_suite_1', () => {
it('testsuite1', () => {
    expect(true).to.equal(true);
});
});
describe('test_suite_2', () => {
    describe('test_suite_3', () => {

        it('testsuite3', () => {
            expect(true).to.equal(true);
        });
    });
    
    it('testsuite2', () => {
        expect(true).to.equal(true);
    });
});
