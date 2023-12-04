import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./features/jobs/jobsSlice";

const makeStore = () => {
	return configureStore({
		reducer: {
			jobs: jobsReducer,
		},
		devTools: true,
	});
};

export default makeStore;