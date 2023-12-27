import UserDashboardNavBar from "./dashboard_navbar";

const DashboardLayout = ({ children }) => {
	return (
		<section>
			<UserDashboardNavBar />
			{children}
		</section>
	);
};

export default DashboardLayout;