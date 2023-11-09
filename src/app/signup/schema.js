import { object, string } from "yup";

let userSchema = object({
	firstName: string()
		.max(15, "15 characters or less")
		.min(3, "must be at least 3 characters long")
		.required("First name is required"),
	lastName: string()
		.max(20, "20 characters or less")
		.required("Last name is required"),
	email: string()
		.email("Email must end in '@example.com' ")
		.required("Email is required"),
	password: string()
		.required("Password is required")
		.min(6, "Password must contain more than 6 characters"),
});

export default userSchema;
