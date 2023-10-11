import Link from "next/link";

const Navbar = () => {
	return (
		<nav>
			<div>
				<Link href="/">
					<h6>Career Finder</h6>
				</Link>
			</div>
			<ul>
				<Link href="/jobs">
					{" "}
					<li>jobs</li>
				</Link>
				<Link href="/about">
					{" "}
					<li>about</li>
				</Link>
				<Link href="/login">
					{" "}
					<li>login</li>
				</Link>
				<Link href="/signup">
					{" "}
					<li>signup</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
