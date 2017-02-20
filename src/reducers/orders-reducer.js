import * as types from '../actions/action-types';

const initialState = {
  builderVisible: false,
  orders: [
    { size: 1, toppings: [1, 2, 3] },
    { size: 2, toppings: [1, 3, 4, 5] },
    { size: 3, toppings: [3, 5] }
  ]
};

const ordersReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.TOGGLE_PIZZA_BUILDER:
      return Object.assign({}, state, { builderVisible: !state.builderVisible });
  }

  return state;
}

export default ordersReducer;