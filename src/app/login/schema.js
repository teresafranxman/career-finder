import { object, string } from "yup";

const loginSchema = object({
	email: string()
		.email("Email must end in '@example.com' ")
		.required("Email is required"),
	password: string().required("Password is required"),
});

export default loginSchema;
