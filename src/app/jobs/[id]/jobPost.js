"use client";
import Link from "next/link";

const JobPost = ({ job }) => {
  let logoText = job.company_name.charAt(0);

  return (
    <main key={job.id}>
      <h1>{job.role}</h1>
        <div>{logoText}</div>
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
