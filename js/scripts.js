// Back-end Logic
// var orderOne = new Pizza ("large", "vegan", "veggies" );
// var orderTwo = new Pizza ("medium", "normal", "meat lovers");
// var orderThree = new Pizza ("small", "normal", "meat lovers");

// Business Logic for Order
function Order () {
  this.pizzas = [],
  this.currentId = 0
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

Order.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

Order.prototype.findPizza = function(id) {
  for (var i = 0; i < pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
          return this.pizzas[i];
      }
    }
  };
  return false
}

Order.prototype.deletePizza = function(id) {
  for (var i = 0; i < pizzas.length; i++) {
    if (pizzas[i]) {
      if (this.pizzas[i].id == id) {
        delete this.pizzas[i];
        return true;
      }
    }
  };
  return false
}
// Business Logic for Pizza
function pizza(size, type, toppings) {
  this.size = size
  this.type = type,
  this.toppings = toppings
  this.price = 8
}

pizza.prototype.findPrice = function(id) {
  if ((this.size == "Large") && (this.type == "vegan")) {
    this.price += 10;
  } else if ((this.size == "Medium") && (this.type == "vegan")) {
    this.price += 8;
  } else if ((this.size == "Medium") && (this.toppings == "meat lovers")) {
    this.price += 4;
  } else if ((this.size = "Medium") || (this.toppings == "meat lovers")) {
    this.price +=4;
  } else if (this.toppings == "meat lovers") {
    this.price +=2;
  } else if (this.size == "Small") {
    this.price === 8
  }
}


// User Interface Logic
var order = new Order();

function displayOrder (OrdertoDisplay) {
  var orderTotal = $("ul#pizzas");
  var htmlForOrderInfo = "";
  OrdertoDisplay.pizzas.forEach(function(pizza) {
    htmlForOrderInfo += "<li id=" + pizza.id + ">" + pizza.size + " pizza with " + pizza.type + " crust and " + pizza.toppings + " toppings.</li>";
  });
  orderTotal.html(htmlForOrderInfo)
};



$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    var inputSize = $("#pizza-size").val();
    var inputType = $("#pizza-type").val();
    var inputToppings = $("#pizza-toppings").val();
    // $("input#pizza-size").val("");
    // $("input#pizza-type").val("");
    // $("input#pizza-toppings").val("");
    var newPizza = new pizza(inputSize, inputType, inputToppings);
    newPizza.findPrice();
    console.log(newPizza);
    order.addPizza(newPizza);
    console.log(order);
    displayOrder(order)

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
