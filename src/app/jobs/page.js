"use client";
import JobsList from "./jobs_list";
import { useSelector } from "react-redux";

const Jobs =  () => {
	const jobs = useSelector((state) => state.jobs);

	return (
		<main>
			<h1>Jobs</h1>
			<JobsList jobs={jobs} />
		</main>
	);
};

export default Jobs;
