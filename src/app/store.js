"use client";
import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./features/jobs";

export const store = configureStore({
	reducer: {
		jobs: jobsReducer,
	},
	devTools: true,
});
