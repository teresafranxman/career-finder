"use client";
import { Formik, Form } from "formik";
import MyTextInput from "../components/MyTextInput/page";
import Button from "../components/Button/page";
import userSchema from "./schema";
import UseSignupAuth from "../authentication/useSignupAuth";
import AddUserDoc from "./addUserDoc";

const SignUpForm = () => {
	return (
		<Formik
			initialValues={{
				firstName: "",
				lastName: "",
				email: "",
				password: "",
			}}
			validationSchema={userSchema}
			onSubmit={async (values, actions) => {
				try {
					AddUserDoc(values);

					UseSignupAuth(values.email, values.password);
					
					actions.resetForm({
						values: {
							firstName: "",
							lastName: "",
							email: "",
							password: "",
						},
					});
				} catch (err) {
					console.log("Error: ", err);
				}
			}}
		>
			<Form>
				<MyTextInput
					label="First Name"
					name="firstName"
					type="text"
					autoComplete="given-name"
				/>
				<MyTextInput
					label="Last Name"
					name="lastName"
					type="text"
					autoComplete="family-name"
				/>
				<MyTextInput
					label="Email"
					name="email"
					type="email"
					autoComplete="email"
				/>
				<MyTextInput
					label="Password"
					name="password"
					type="password"
					autoComplete="new-password"
				/>
				<Button title="Sign up" type="submit" />
			</Form>
		</Formik>
	);
};

export default SignUpForm;
