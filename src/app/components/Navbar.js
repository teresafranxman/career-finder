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
				<Link href="/">
				<li>Home</li>
				</Link>
        <Link href="/jobs">
          {" "}
          <li>Find jobs</li>
        </Link>
        <Link href="/jobs">
          {" "}
          <li>Categories</li>
        </Link>
        <Link href="/login">
          {" "}
          <li>Login</li>
        </Link>
        <Link href="/signup">
          {" "}
          <li>Signup</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
