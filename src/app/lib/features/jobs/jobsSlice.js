import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	jobs: [],
	job: {},
	savedJobs: [],
};

const jobsSlice = createSlice({
	name: "jobs",
	initialState,
	reducers: {
		setJobs: (state, action) => {
			state.jobs = action.payload;
		},
	}
});

export const { setJobs } = jobsSlice.actions;
export default jobsSlice.reducer;
