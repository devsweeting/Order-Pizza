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
  for (var i = 0; i < this.pizzas.length; i++) {
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
  var orderTotal = $("ul#pizzas-ordered");
  var htmlForOrderInfo = "";
  OrdertoDisplay.pizzas.forEach(function(pizza) {
    htmlForOrderInfo += "<li id=" + pizza.id + ">" +"$" + pizza.price + " " + pizza.size + " Pizza(+)</li>"
    //  pizza with " + pizza.type + " crust and " + pizza.toppings + " toppings.
    // <div id='buttons'></div>";
  });
  orderTotal.html(htmlForOrderInfo)
};

function showPizza(pizzasId) {
  var pizza = order.findPizza(pizzasId);
  $("#show-pizza").show();
  $(".pizza-size").html(pizza.size);
  $(".pizza-type").html(pizza.type);
  $(".pizza-toppings").html(pizza.toppings);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + pizza.id + ">Delete</button>");
}

function attachPizzaListeners() {
  $("ul#pizzas-ordered").on("click", "li", function(){
    showPizza(this.id);
  });
  $("#delete-pizza").on("click", ".deleteButton", function() {
    order.deletePizza(this.id);
    $("#show-pizza").hide();
    displayOrder(order);
  });
};

$(document).ready(function() {
  attachPizzaListeners();
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    var inputSize = $("#pizza-size").val();
    var inputType = $("#pizza-type").val();
    var inputToppings = $("#pizza-toppings").val();
    var newPizza = new pizza(inputSize, inputType, inputToppings);
    newPizza.findPrice();
    order.addPizza(newPizza);
    displayOrder(order)
    console.log(order);
    console.log(newPizza);
  });
  $("#submit-order").click(function(event) {
    alert("your order is on its way!")
  });
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
