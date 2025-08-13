import { headers } from "next/headers";

export const getJobs = async () => {
  const headersInstance = headers().get("authorization");

  const response = await fetch("https://findwork.dev/api/jobs/", {
    headers: { authorization: `Token ${process.env.KEY}` },
  });

  const jobs = await response.json();
  

  return jobs;
};
