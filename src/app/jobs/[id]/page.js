import { getJob } from "./getJob";

const Job = async ({ params }) => {
	const job = await getJob(params);
    
	return (
		<main key={job.id}>
			<h1>{job.role}</h1>
			<h5>{job.company_name}</h5>
			<div dangerouslySetInnerHTML={{ __html: job.text }} />
			<div>
				<button>Save Job</button>
            </div>
        </main>
	);
};

export default Job;
