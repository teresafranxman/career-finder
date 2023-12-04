"use client";
import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./features/jobs/jobsSlice";

export const store = configureStore({
	reducer: {
		jobs: jobsReducer,
	},
	devTools: true,
});
