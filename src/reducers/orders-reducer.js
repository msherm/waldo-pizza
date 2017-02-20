import * as types from '../actions/action-types';

const initialState = {
  orders: []
};

const ordersReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.ADD_PIZZA_TO_ORDER:
      return Object.assign({}, state, { orders: [...state.orders, { size: action.sizeIndex, toppings: action.toppings }] });
    case types.REMOVE_PIZZA_FROM_ORDER:
      return Object.assign({}, state, { orders: [...state.orders.slice(0, action.pizzaId), ...state.orders.slice(action.pizzaId + 1)] });
  }

  return state;
}

export default ordersReducer;