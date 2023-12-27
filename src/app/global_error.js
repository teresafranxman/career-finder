"use client";

const GlobalError = ({ error, reset }) => {
	return (
		<html>
			<body>
				<h2>An error occurred: {error.message}</h2>
				<button onClick={() => reset()}>Try again</button>
			</body>
		</html>
	);
};

export default GlobalError;
