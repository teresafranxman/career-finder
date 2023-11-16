import { getJobs } from "./getJobs";
import JobsList from "./JobsList";

const Jobs = async () => {
	const jobs = await getJobs();

	return (
		<main>
			<h1>Jobs</h1>
			<JobsList jobs={jobs} />
		</main>
	);
};

export default Jobs;
