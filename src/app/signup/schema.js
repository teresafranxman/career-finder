import * as yup from "yup";

const schema = yup.object().shape({
	firstName: yup
		.string()
		.max(20, "20 characters or less")
		.required("First name is required"),
	lastName: yup.string().max(20, "20 characters or less").required(),
	email: yup
		.string()
		.email("Email must end in '@example.com' ")
		.required("Email is required"),
	password: yup.string().required("Password is required"),
});

export default schema;