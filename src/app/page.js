import { getAllDocs } from "./authentication/user/get_users";

const Page = () => {
	getAllDocs();
	return <h1> Hello, Next.js!</h1>;
};

export default Page;
