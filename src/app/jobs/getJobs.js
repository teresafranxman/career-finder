import { headers } from "next/headers";

export const getJobs = async () => {
  try {
    const headersInstance = headers();
    const authorization = headersInstance.get("authorization");
    const response = await fetch("https://findwork.dev/api/jobs/", {
      headers: { authorization: `Token ${process.env.KEY}` },
    });

    const jobs = response.json();

    return jobs;
  } catch (error) {
    console.log("Error: ", error);
  }
};
