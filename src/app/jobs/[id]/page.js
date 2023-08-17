import { getJob } from "./getJob";
import Link from "next/link";

const Job = async ({ params }) => {
	const job = await getJob(params);
    
	return (
		<main key={job.id}>
			<h1>{job.role}</h1>
			<h2>{job.company_name}</h2>
			<div dangerouslySetInnerHTML={{ __html: job.text }} />
			<div>
				<Link href={job.url}>apply now</Link>
				<button>Save Job</button>
            </div>
        </main>
	);
};

export default Job;
