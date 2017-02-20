import * as types from '../actions/action-types';

const initialState = {
  visible: false,
  sizeIndex: undefined,
  toppings: []
};

const initialToppings = [0, 1];//TODO: pull depending on base size in via graphQL

const builderReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.TOGGLE_PIZZA_BUILDER:
      return Object.assign({}, state, { visible: !state.visible });
    case types.SELECT_PIZZA_SIZE:
      return Object.assign({}, { sizeIndex: action.sizeIndex, toppings: initialToppings });
    case types.TOGGLE_TOPPING_SELECTION:
      return Object.assign({}, state, { toppings: state.toppings.indexOf(toppingIndex) ? //check to see if the toppingIndex already exists in our toppings
                                                  [...state.toppings.slice(0, state.toppings.indexOf(toppingIndex)), ...state.toppings.slice(state.toppings.indexOf(toppingIndex) + 1)] : //if the toppingIndex is in the pizza builder's toppings remove it
                                                  [...state.toppings.slice(), toppingIndex]//otherwise push it to the array
                                      });
  }

  return state;
}

export default builderReducer;