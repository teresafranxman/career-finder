import { getAllDocs } from "./firebase/get_firestore_users";

const Page = () => {
	getAllDocs();
	return <h1> Hello, Next.js!</h1>;
};

export default Page;
