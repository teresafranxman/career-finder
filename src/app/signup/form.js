"use client";
import { Formik, Form } from "formik";
import MyTextInput from "../components/myTextInput";
import Button from "../components/button";
import userSchema from "./schema";

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
			onSubmit={(values, actions) => {
				console.log(values, actions);
			}}
		>
			<Form>
				<MyTextInput label="First Name" name="firstName" type="text" />
				<MyTextInput label="Last Name" name="lastName" type="text" />
				<MyTextInput label="Email" name="email" type="email" />
				<MyTextInput label="Password" name="password" type="password" />
				<Button title="Sign up" type="submit" />
			</Form>
		</Formik>
	);
};

export default SignUpForm;
