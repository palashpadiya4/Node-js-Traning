var expect=require('chai').expect;


const Checkout = require('../test/checkout.js')
var expect = require('chai').expect;

//Can add an item price  
it('Can add item price', function () {
    var checkout = new Checkout(); 
    checkout.addItemPrice('a', 1);
});
//Can add an item
it('Can add item', function () {
    var checkout = new Checkout();
     checkout.addItemPrice('a', 1);
      checkout.addItem('a');
});
