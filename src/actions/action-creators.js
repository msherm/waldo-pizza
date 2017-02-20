import * as types from './action-types';

export const addBaseSize = (size, cost) => {
  return {
    type: types.ADD_BASE_SIZE,
    size,
    cost
  };
}

export const togglePizzaBuilder = () => {
  return {
    type: types.TOGGLE_PIZZA_BUILDER
  };
}