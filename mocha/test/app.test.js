const {add} = require ('../test/app.js');
const {sub} = require ('../test/app.js');
var expect = require('chai').expect;


describe('the add funtion', () => {
   
   it('should add 2 numbers together', () => {
    const result = add(2,4);
    expect(result).to.be.eq(6);
   });
   it('should return 0 when argument is not a number', () => {
    const result = add(2,'test');
    expect(result).to.be.eq(0);
   })

});
describe ('the sub funtion' , ()=> {
    it('should sub 2 numbers together', () => {
        const result = sub(4,2);
        expect(result).to.be.eq(2);
       });

       it('should return 0 when argument is not a number', () => {
        const result = sub(8,'palash');
        expect(result).to.be.eq(0);
       })
});
