import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	savedJobs: [],
	job: {},
};

const savedJobsSlice = createSlice({
	name: "jobs",
	initialState,
	reducers: {
		saveJob: (state, action) => {
			const jobIndex = state.savedJobs.findIndex(
				(job) => job.id === action.payload.id
			);
			if (jobIndex >= 0) {
				console.log("saved");
			} else {
				const jobToSave = { ...action.payload };
				state.savedJobs.push(jobToSave);
			}
		},
		setJob: (state, action) => {
			state.job = action.payload;
		},
		clearSavedJobs: (state) => {
			state.savedJobs = [];
		},
	},
});

export const { saveJob, setJob, clearSavedJobs } = savedJobsSlice.actions;
export default savedJobsSlice.reducer;
