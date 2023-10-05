import { headers } from "next/headers";

export const getJob = async (params) => {
	try {
		const { id } = params;
		const headersInstance = headers();
		const authorization = headersInstance.get("authorization");
		const response = await fetch(`https://findwork.dev/api/jobs/${id}`, {
			headers: { authorization: `Token ${process.env.KEY}` },
		});

		return response.json();
	} catch (error) {
		console.log("Error: ", error);
	}
};
