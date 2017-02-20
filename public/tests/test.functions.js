const pizzaData = {
  sizes: [
  	{ name: "small", price: 5, maxToppings: 4, defaultToppings: null },
  	{ name: "medium", price: 7.05, maxToppings: 6, defaultToppings: [0, 1] },
  	{ name: "large", price: 9.99, maxToppings: 8, defaultToppings: [0, 1, 5] },
  	{ name: "giant", price: 13.5, maxToppings: null, defaultToppings: [0, 1, 5] }
  ],
  toppings: [
    { name: "mozzarella", price: 0 },
    { name: "buffalo mozzarella", price: 1.5 },
    { name: "ricotta", price: .75 },
    { name: "pepperoni", price: 1 },
    { name: "olives", price: 1.25 },
    { name: "basil", price: 1 },
    { name: "garlic", price: 1 },
    { name: "anchovies", price: 3.5 },
    { name: "mushrooms", price: 1.35 },
    { name: "prosciutto", price: 4.50 },
    { name: "bell peppers", price: 1.50 }
  ]
};

const noPizzas = [];
const orderOnePizza = [{ size: 0, toppings: [1, 5]}];
const orderPizzasNoToppings = [{ size: 0, toppings: []}, { size: 1, toppings: []}, { size: 2, toppings: []}, { size: 3, toppings: []}];
const orderPizzasWithToppings = [{ size: 0, toppings: [1, 5]}, { size: 1, toppings: [1, 5]}, { size: 2, toppings: [1, 5]}, { size: 3, toppings: [1, 5]}];

describe("Individual pizza price calculator", () => {
	describe("Base price of pizza", () => {
		it("calculates the price of a pizza without toppings", () => {
			let smallPizzaPrice = calculatePizzaCost(pizzaData, 0, null);
			let mediumPizzaPrice = calculatePizzaCost(pizzaData, 1, null);
			let largePizzaPrice = calculatePizzaCost(pizzaData, 2, null);
			let giantPizzaPrice = calculatePizzaCost(pizzaData, 3, null);
			
			expect(smallPizzaPrice).to.equal(5);
			expect(mediumPizzaPrice).to.equal(7.05);
			expect(largePizzaPrice).to.equal(9.99);
			expect(giantPizzaPrice).to.equal(13.5);		
		});
	});

	describe("Price of pizza with toppings", () => {
		it("calculates the price of a pizza that includes toppings", () => {
			let smallPizzaPrice = calculatePizzaCost(pizzaData, 0, [1, 5]);
			let mediumPizzaPrice = calculatePizzaCost(pizzaData, 1, [1, 5]);
			let largePizzaPrice = calculatePizzaCost(pizzaData, 2, [1, 5]);
			let giantPizzaPrice = calculatePizzaCost(pizzaData, 3, [1, 5]);
			
			expect(smallPizzaPrice).to.equal(7.5);
			expect(mediumPizzaPrice).to.equal(9.55);
			expect(largePizzaPrice).to.equal(12.49);
			expect(giantPizzaPrice).to.equal(16);		
		});
	});

	describe("No base provided", () => {
		it("Returns 0 if no base size has been provided", () => {
			let smallPizzaPrice = calculatePizzaCost(pizzaData, null, [1, 5]);
			let mediumPizzaPrice = calculatePizzaCost(pizzaData, null, [1, 5]);
			let largePizzaPrice = calculatePizzaCost(pizzaData, null, [1, 5]);
			let giantPizzaPrice = calculatePizzaCost(pizzaData, null, [1, 5]);
			
			expect(smallPizzaPrice).to.equal(0);
			expect(mediumPizzaPrice).to.equal(0);
			expect(largePizzaPrice).to.equal(0);
			expect(giantPizzaPrice).to.equal(0);		
		});
	});
});

describe("Total price calculator", () => {
	describe("No pizzas", () => {
		it("Returns 0 if no pizzas are in the order", () => {
			let order = calculateTotalCost(pizzaData, noPizzas);
			
			expect(order).to.equal(0);
		});
	});

	describe("One pizza", () => {
		it("calculates the total price of an order with one pizza", () => {
			let order = calculateTotalCost(pizzaData, orderOnePizza);
			
			expect(order).to.equal(7.5);
		});
	});

	describe("Pizzas with no toppings", () => {
		it("calculates the total price of pizzas without toppings", () => {
			let order = calculateTotalCost(pizzaData, orderPizzasNoToppings);
			
			expect(order).to.equal(35.54);
		});
	});

	describe("Pizzas with toppings", () => {
		it("calculates the total price of pizzas with toppings", () => {
			let order = calculateTotalCost(pizzaData, orderPizzasWithToppings);
			
			expect(order).to.equal(45.54);
		});
	});
});