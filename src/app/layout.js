import Navbar from "./components/Navbar/page";
import Providers from "./StoreProvider";
import { getJobs } from "./jobs/getJobs";

export default async function RootLayout({ children }) {
	const data = await getJobs()

	return (
		<html lang="en">
			<body>
				<Providers data={data}>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
