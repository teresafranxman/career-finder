import Link from "next/link";

const navlinks = [
	{ key: 0, href: "/", value: "home" },
	{ key: 1, href: "/jobs", value: "jobs" },
	{ key: 2, href: "/about", value: "about" },
	{ key: 3, href: "/login", value: "login" },
	{ key: 4, href: "/signup", value: "signup" },
];

const NavLink = () => {
	const links = navlinks;

	return (
		<>
			{links.map((link) => (
				<Link key={link.key} href={`${link.href}`}>
					{link.value}
				</Link>
			))}
		</>
	);
};

export default NavLink;
