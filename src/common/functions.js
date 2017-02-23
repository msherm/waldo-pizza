export const calculatePizzaCost = (pizzaData, sizeIndex, toppings) => {
	let basePrice = 0;
	let toppingsTotalPrice = 0;

	if (sizeIndex >= 0) {
		basePrice = pizzaData.sizes[sizeIndex].price;

		if (toppings) {
  		toppingsTotalPrice = toppings.reduce((acc, toppingIndex) => {
	  		return acc + pizzaData.sizes[sizeIndex].toppings[toppingIndex].topping.price;
			}, 0);
  	}
	}

	return basePrice + toppingsTotalPrice;
}

export const calculateTotalCost = (pizzaData, orders) => {
	if (orders.length) {
		return orders.reduce((acc, order) => {
	  		return acc + calculatePizzaCost(pizzaData, order.sizeIndex, order.toppings);
			}, 0);
	}

	return 0;
}