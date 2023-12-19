import { configureStore } from "@reduxjs/toolkit";
import savedJobsReducer from "./features/jobs/savedJobsSlice";

const makeStore = () => {
	return configureStore({
		reducer: {
			savedJobs: savedJobsReducer,
		},
		devTools: true,
	});
};

export default makeStore;
