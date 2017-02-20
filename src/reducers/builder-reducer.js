import { TOGGLE_PIZZA_BUILDER, SELECT_PIZZA_SIZE, TOGGLE_TOPPING_SELECTION, ADD_PIZZA_TO_ORDER } from '../actions/action-types';

const initialState = {
  visible: false,
  sizeIndex: undefined,
  toppings: [],
  addToppingsDisabled: false
};

const initialToppings = [0, 1];//TODO: pull depending on base size via graphQL

const builderReducer = function(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_PIZZA_BUILDER:
      return Object.assign({}, state, { visible: !state.visible });
    case SELECT_PIZZA_SIZE:
      return Object.assign({}, state, { sizeIndex: action.sizeIndex, toppings: initialToppings });
    case TOGGLE_TOPPING_SELECTION:
      return Object.assign({}, state, { toppings: state.toppings.indexOf(action.toppingIndex) > -1 ? //check to see if the action.toppingIndex already exists in our toppings
                                                  [...state.toppings.slice(0, state.toppings.indexOf(action.toppingIndex)), ...state.toppings.slice(state.toppings.indexOf(action.toppingIndex) + 1)] : //if the toppingIndex is in the pizza builder's toppings remove it
                                                  [...state.toppings.slice(), action.toppingIndex]//otherwise push it to the array
                                      });
    case ADD_PIZZA_TO_ORDER:
      return Object.assign({}, initialState);
  }

  return state;
}

export default builderReducer;