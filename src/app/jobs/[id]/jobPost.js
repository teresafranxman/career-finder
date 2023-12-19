"use client";
import Link from "next/link";
import { saveJob, setJob } from "@/app/lib/features/jobs/savedJobsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const JobPost = ({ job }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setJob(job));
	});

	return (
		<main key={job.id}>
			<h1>{job.role}</h1>
			<h2>{job.company_name}</h2>
			<div dangerouslySetInnerHTML={{ __html: job.text }} />
			<div>
				<Link href={job.url}>apply now</Link>
				<button onClick={() => dispatch(saveJob(job))}>Save Job</button>
			</div>
		</main>
	);
};

export default JobPost;
