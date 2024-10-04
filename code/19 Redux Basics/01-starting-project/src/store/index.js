import {configureStore, createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: {counter: 0, showCounter: true},
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggle(state) {
			state.showCounter = !state.showCounter;
		}
	}
});

/*
function counterReducer(state = {counter: 0, showCounter: true}, action) {

	if(action.type === 'increment') {
		return {
			counter: state.counter + 1,
			showCounter: state.showCounter
		}
	}

	if(action.type === 'decrement') {
		return {
			counter: state.counter - 1,
			showCounter: state.showCounter
		}
	}
	if(action.type === 'increase') {
		return {
			counter: state.counter + action.amount,
			showCounter: state.showCounter
		}
	}
	if(action.type === 'toggle') {
		return {
			counter: state.counter,
			showCounter: !state.showCounter
		}
	}

	return state;

}
*/

const store = configureStore({
	reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;