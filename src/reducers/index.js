import { combineReducers } from 'redux';

// Reducers
import pizzaReducer from './pizza-reducer';
import builderReducer from './builder-reducer';
import ordersReducer from './orders-reducer';

// Combine Reducers
var reducers = combineReducers({
		pizzaState: pizzaReducer,
		builderState: builderReducer,
		ordersState: ordersReducer
});

export default reducers;
