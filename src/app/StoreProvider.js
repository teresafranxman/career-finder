"use client";
import { Provider } from "react-redux";
import { useRef } from "react";
// import { setJobs } from "./lib/features/jobs/jobsSlice";
import makeStore from "./lib/store";

const Providers = ({ data, children }) => {
	const storeRef = useRef();
	// const jobs = data.results;

	if (!storeRef.current) {
		// create the store instance the first time this renders
		storeRef.current = makeStore();
		// storeRef.current.dispatch(setJobs(jobs));
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
};

export default Providers;
