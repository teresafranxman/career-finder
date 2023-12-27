import Link from "next/link";

const UserDashboardNavBar = () => {
	return (
		<nav>
			<div>
				<Link href="/">
					<h6>Career Finder</h6>
				</Link>
			</div>
			<Link href="/">Home</Link>
			<Link href="/">Jobs</Link>
			<Link href="/">Logout</Link>
		</nav>
	);
};

export default UserDashboardNavBar;
