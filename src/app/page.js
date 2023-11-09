import { getAllDocs } from "./authentication/user/getAllUsers";

const Page = () => {
	getAllDocs()
	return (
		<h1> Hello, Next.js!</h1>
)};

export default Page;
