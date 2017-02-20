import * as types from '../actions/action-types';

const initialState = {
  sizes: [
    { name: "small", price: 5, maxToppings: 4, defaultToppings: [0] },
    { name: "medium", price: 7.55, maxToppings: 6, defaultToppings: [0, 1] },
    { name: "large", price: 10.99, maxToppings: 8, defaultToppings: [0, 1, 5] },
    { name: "giant", price: 16.5, maxToppings: null, defaultToppings: [0, 1, 5]  },
  ],
  toppings: [
    { name: "mozzarella", price: 0 },
    { name: "buffalo mozzerella", price: 1.5 },
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
    case types.TOGGLE_PIZZA_BUILDER:
      return Object.assign({}, state, { builderVisible: !state.builderVisible });
  }

  return state;
}

export default pizzaReducer;