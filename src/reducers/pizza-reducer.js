import { UPDATE_PIZZA_DATA } from '../actions/action-types';

const initialState = {
  sizes: []
};

const pizzaReducer = function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_PIZZA_DATA:
      return Object.assign({}, state, { sizes: action.pizzaSizes.map((pizzaSize, i) => {
                                        return {
                                          name: pizzaSize.name,
                                          price: pizzaSize.basePrice,
                                          maxToppings: pizzaSize.maxToppings,
                                          toppings: pizzaSize.toppings
                                        }
                                      })});
  }

  return state;
}

export default pizzaReducer;