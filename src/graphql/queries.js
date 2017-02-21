export const queryPizzaSizeData = `{
	pizzaSizes {
		name,
		maxToppings,
		basePrice,
		toppings {
			topping {
				name,
				price
			},
			defaultSelected
		}
	}
}`;