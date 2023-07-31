import { headers } from "next/headers";

export const getJobs = async () => {
	const headersInstance = headers();
	const authorization = headersInstance.get("authorization");
	const response = await fetch("https://findwork.dev/api/jobs/", {
		headers: { authorization: `Token ${process.env.KEY}` },
	});

	return response.json();
};
