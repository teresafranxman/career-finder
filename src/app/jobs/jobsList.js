import Link from "next/link";

const JobsList = ({ jobs }) => {
	return (
		<>
			{jobs.results.map((job) => (
				<Link href={`/jobs/${job.id}`} key={job.id}>
					<div>
						<h2>{job.role}</h2>
						<h4>{job.company_name}</h4>
					</div>
				</Link>
			))}
		</>
	);
};

export default JobsList;