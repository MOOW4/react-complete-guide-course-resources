import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'authentication',
	initialState: { isAuthenticated: false },
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		}
	}
});
