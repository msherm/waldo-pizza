export const calculatePizzaCost = (pizzaData, sizeIndex, toppings) => {
	let basePrice = 0;
	let toppingsTotalPrice = 0;

	if (sizeIndex >= 0) {
		basePrice = pizzaData.sizes[sizeIndex].price;

		if (toppings) {
  		toppingsTotalPrice = toppings.reduce(function(acc, toppingIndex) {
	  		return acc + pizzaData.toppings[toppingIndex].price;
			}.bind(this), 0);
  	}
	}

	return basePrice + toppingsTotalPrice;
}

export const calculateTotalCost = (pizzaData, orders) => {
	if (orders.length) {
		return orders.reduce(function(acc, order) {
	  		return acc + calculatePizzaCost(pizzaData, order.size, order.toppings);
			}.bind(this), 0);
	}

	return 0;
}