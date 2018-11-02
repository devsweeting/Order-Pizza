// Back-end Logic
// var orderOne = new Pizza ("large", "vegan", "veggies" );
// var orderTwo = new Pizza ("medium", "normal", "meat lovers");
// var orderThree = new Pizza ("small", "normal", "meat lovers");

function Pizza(size, type, toppings) {
  this.size = size,
  this.type = type,
  this.toppings = toppings
  this.price = 8
}

Pizza.prototype.findPrice = function(id) {
  if ((this.size == "large") && (this.type == "vegan")) {
    this.price += 10;
  } else if ((this.size == "medium") && (this.type == "vegan")) {
    this.price += 8;
  } else if ((this.size == "medium") && (this.toppings == "meat lovers")) {
    this.price += 4;
  } else if ((this.size = "medium") || (this.toppings == "meat lovers")) {
    this.price +=4;
  } else if (this.toppings == "meat lovers") {
    this.price +=2;
  }
}




// orderOne.findPrice();
// orderTwo.findPrice();
// orderThree.findPrice();

// var newPizza = null;

// User Interface
$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    var inputSize = $("#pizza-size").val();
    var inputType = $("#pizza-type").val();
    var inputToppings = $("#pizza-toppings").val();
    // $("input#pizza-size").val("");
    // $("input#pizza-type").val("");
    // $("input#pizza-toppings").val("");
    var newPizza = new Pizza(inputSize, inputType, inputToppings);
    console.log(inputSize);
    newPizza.findPrice();
    console.log(newPizza);

  })
});



// orderOne.findPriceByType();
// orderTwo.findPriceByType();
// orderThree.findPriceByType();

// Pizza.prototype.findPriceBySize = function(id) {
//   if (this.size == "medium") {
//     this.price += 6;
//   } else if (this.size == "large") {
//     this.price += 10;
//   }
// }
// Pizza.prototype.findPriceByType = function(id) {
//   if (this.toppings == "meat lovers") {
//     this.price += 3
//   } else if (this.toppings == "vegan") {
//     this.price += 6
//   }
// }

// Pizza.prototype.findPrice = function(id) {
//   if (this.size == "medium") {
//     this.price += 2;
//   } else if (this.size == "large") {
//     this.price += 4;
//   } else if (this.type == "vegan") {
//     this.price += 4;
//   } else if (this.type == "meat lovers") {
//     this.price +=4;
//   } else if (this.type == "meat lovers") {
//     this.price +=3;
//   } else if (this.type == "veggies") {
//     this.price +=2;
//   }
// }
