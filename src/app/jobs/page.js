import JobsList from "./jobs_list";
import { getJobs } from "./getJobs";

const Jobs = async () => {
    const jobsList = await getJobs();

  return (
    <main>
      <h1>Jobs</h1>
      <JobsList jobs={jobsList} />
    </main>
  );
};

export default Jobs;
