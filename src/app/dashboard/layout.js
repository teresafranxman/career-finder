import UserDashboardNavBar from "./dashboard_navbar";

export const DashboardLayout = ({ children }) => {
	return (
		<section>
			<UserDashboardNavBar />
			{children}
		</section>
	);
};
