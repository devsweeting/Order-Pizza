// Back-end Logic
var orderOne = new Pizza ("large", "vegan", "veggies" );
var orderTwo = new Pizza ("medium", "normal", "meat lovers");
var orderThree = new Pizza ("small", "normal", "meat lovers");

function Pizza(size, type, toppings) {
  this.size = size,
  this.type = type,
  this.toppings = toppings
  this.price = 8
}

Pizza.prototype.findPrice = function(id) {
  if ((this.size == "medium") && (this.type == "vegan")) {
    this.price += 6;
  } else if ((this.size == "large") && (this.type == "vegan")) {
    this.price += 10;
  } else if ((this.size == "medium") || (this.type == "vegan")) {
    this.price += 5;
  } else if ((this.size = "medium") || (this.type == "meat lovers")) {
    this.price +=4;
  } else if (this.type == "meat lovers") {
    this.price +=2;
  }
}

orderOne.findPrice();
orderTwo.findPrice();
orderThree.findPrice()
// User Interface
$(document).ready(function() {

});
