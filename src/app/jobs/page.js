import JobsList from "./jobs_list";
import { getJobs } from "./getJobs";

const Jobs =  async () => {
	const jobs = await getJobs();

	return (
		<main>
			<h1>Jobs</h1>
			<JobsList jobs={jobs} />
		</main>
	);
};

export default Jobs;
