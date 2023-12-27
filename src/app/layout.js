import Navbar from "./components/Navbar/page";
import Providers from "./StoreProvider";
import GlobalError from "./global_error";
import  {ErrorBoundary} from "next/dist/client/components/error-boundary";

export default async function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ErrorBoundary fallback={GlobalError}>
					<Providers>
						<Navbar />
						{children}
					</Providers>
				</ErrorBoundary>
			</body>
		</html>
	);
}
