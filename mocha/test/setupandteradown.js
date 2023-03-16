var expect= require('chai').expect;

describe('test_suite_1', () => {

    before('setup code' ,function() {
        console.log('Setup code');
    });
    after('teardown code' ,function() {
        console.log('teradown code');
    });
it('testsuite1', () => {
    expect(true).to.equal(true);
});
});

