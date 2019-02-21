import { combineReducers, createStore  } from 'redux';
import { counter } from './reducersTest';


let combinedReducer = combineReducers({
	counter
});

let store = createStore(combinedReducer);

export default store;