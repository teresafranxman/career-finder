import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	jobs: [],
	savedJobs: []
};

const jobsSlice = createSlice({
	name: "jobs",
	initialState,
	reducers: {
		setJobs: (state, action) => {
			state.jobs = action.payload;
		},
		saveJob: (state, action) => {
			const findIndex = state.jobs.find((job) => job.id === action.payload.id)
			state.savedJobs.push(findIndex)
		}
	}
});

export const { setJobs, saveJob } = jobsSlice.actions;
export default jobsSlice.reducer;
