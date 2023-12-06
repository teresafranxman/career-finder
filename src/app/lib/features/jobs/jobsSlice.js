import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	jobs: [],
	job: {}
};

const jobsSlice = createSlice({
	name: "jobs",
	initialState,
	reducers: {
		setJobs: (state, action) => {
			state.jobs = action.payload;
		},
		setSingleJob: (state, action) => {
			state.job = action.payload
		}
	}
});

export const { setJobs, setSingleJob } = jobsSlice.actions;
export default jobsSlice.reducer;
