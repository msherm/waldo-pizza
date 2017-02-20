const calculatePizzaCost = (pizzaData, sizeIndex, toppings) => {
	let basePrice = 0;
	let toppingsTotalPrice = 0;

	if (sizeIndex !== null && sizeIndex >= 0) {
		basePrice = pizzaData.sizes[sizeIndex].price;

		if (toppings) {
  		toppingsTotalPrice = toppings.reduce((acc, toppingIndex) => {
	  		return acc + pizzaData.toppings[toppingIndex].price;
			}, 0);
  	}
	}

	return basePrice + toppingsTotalPrice;
}

const calculateTotalCost = (pizzaData, orders) => {
	if (orders.length) {
		return orders.reduce((acc, order) => {
	  		return acc + calculatePizzaCost(pizzaData, order.size, order.toppings);
			}, 0);
	}

	return 0;
}