import * as types from './action-types';

export const addBaseSize = (size, cost) => {
  return {
    type: types.TOGGLE_PIZZA_BUILDER,
    size,
    cost
  };
}

export const togglePizzaBuilder = () => {
  return {
    type: types.TOGGLE_PIZZA_BUILDER
  };
}