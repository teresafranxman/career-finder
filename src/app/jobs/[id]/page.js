import { getJob } from "./getJob";
import JobPost from "./jobPost";

const Job = async ({ params }) => {
	const job = await getJob(params);

	return (
		<>
			<JobPost job={job} />
		</>
	);
};

export default Job;
