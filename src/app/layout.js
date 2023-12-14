import Navbar from "./components/Navbar/page";
import Providers from "./StoreProvider";

export default async function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
