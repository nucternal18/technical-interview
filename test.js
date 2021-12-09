const assert = require("assert");
const Checkout = require("./Checkout");

describe("checkout", function () {
  it("This test will pass", function () {
    assert.equal(true, true);
  });

  it("I can scan an item without an error being thrown", function () {
    assert.doesNotThrow(function () {
      const checkout = new Checkout();
      checkout.scan("Apple");
    });
  });

  it("I can scan an Apple, and then get the total price", function () {
    const checkout = new Checkout();

    checkout.scan("Apple");
    const totalPrice = checkout.getTotalPrice();

    assert.equal(totalPrice, 1);
  });

  it("'I can scan multiple Apple's and return the total price", function() {
	const checkout = new Checkout();

    checkout.scan("Apple");
    checkout.scan("Apple");
    const totalPrices = checkout.getTotalPrice();
	  assert.equal(totalPrices, 2);
  })

   it("I can scan an Americano, and then get the total price", function () {
     const checkout = new Checkout();

     checkout.scan("Americano");
     const totalPrice = checkout.getTotalPrice();

     assert.equal(totalPrice, 2);
   });

   it("'I can scan multiple Americano's and return the total price", function () {
     const checkout = new Checkout();

     checkout.scan("Americano");
     checkout.scan("Americano");
     const totalPrices = checkout.getTotalPrice();
     assert.equal(totalPrices, 4);
   });

   it("I can scan an Banana, and then get the total price", function () {
     const checkout = new Checkout();

     checkout.scan("Banana");
     const totalPrice = checkout.getTotalPrice();

     assert.equal(totalPrice, 1.20);
   });

   it("'I can scan multiple Banana's and return the total price", function () {
     const checkout = new Checkout();

     checkout.scan("Banana");
     checkout.scan("Banana");
     const totalPrices = checkout.getTotalPrice();
     assert.equal(totalPrices, 2.40);
   });

   it("'I can scan multiple Americanos and returns the total price on any special offers", function () {
     const checkout = new Checkout();
     checkout.scan("Americano");
     checkout.scan("Americano");
     checkout.scan("Americano");
     checkout.scan("Americano");
     const totalPrices = checkout.getTotalPrice();
     assert.equal(totalPrices, 4.50);
   });

   it("I can scan an item and get the price of the plastic bag", function(){
	   
   })
});
