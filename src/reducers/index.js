import { combineReducers } from 'redux';

// Reducers
import pizzaReducer from './pizza-reducer';
import ordersReducer from './orders-reducer';

// Combine Reducers
var reducers = combineReducers({
		pizzaState: pizzaReducer,
		ordersState: ordersReducer
});

export default reducers;