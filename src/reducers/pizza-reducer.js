import * as types from '../actions/action-types';

const initialState = {
  sizes: [],
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

const pizzaReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.UPDATE_PIZZA_DATA:
      return Object.assign({}, state, { sizes: action.pizzaSizes.map((pizzaSize, i) => {
                                        return {
                                          name: pizzaSize.name,
                                          price: pizzaSize.basePrice,
                                          maxToppings: pizzaSize.maxToppings,
                                          defaultToppings: [0, 1]
                                        }
                                      })});
  }

  return state;
}

export default pizzaReducer;