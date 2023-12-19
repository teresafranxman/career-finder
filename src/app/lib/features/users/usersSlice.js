import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoggedIn: null,
	isLoading: false,
	user: {},
};

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
