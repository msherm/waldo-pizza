import { combineReducers } from 'redux';

// Reducers
import ordersReducer from './orders-reducer';

// Combine Reducers
var reducers = combineReducers({
	ordersState: ordersReducer
});

export default reducers;