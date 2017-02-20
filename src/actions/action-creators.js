import * as types from './action-types';

export const updatePizzaData = (pizzaSizes) => {
  return {
    type: types.UPDATE_PIZZA_DATA,
    pizzaSizes
  };
}

export const togglePizzaBuilder = () => {
  return {
    type: types.TOGGLE_PIZZA_BUILDER
  };
}

export const selectPizzaSize = (sizeIndex) => {
  return {
    type: types.SELECT_PIZZA_SIZE,
    sizeIndex
  };
}

export const toggleToppingSelection = (toppingIndex) => {
  return {
    type: types.TOGGLE_TOPPING_SELECTION,
    toppingIndex
  };
}

export const addPizzaToOrder = (sizeIndex, toppings) => {
  return {
    type: types.ADD_PIZZA_TO_ORDER,
    sizeIndex,
    toppings
  };
}

export const removePizzaFromOrder = (pizzaId) => {
  return {
    type: types.REMOVE_PIZZA_FROM_ORDER,
    pizzaId
  };
}