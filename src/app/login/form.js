"use client";
import { Form, Formik } from "formik";
import MyTextInput from "../components/myTextInput";
import Button from "../components/button";

const LoginForm = () => {
	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			onSubmit={(values, actions) => {
				console.log(values, actions);
			}}
		>
			<Form>
				<MyTextInput label="Email" name="email" type="text" />
				<MyTextInput label="Password" name="password" type="text" />
				<Button title="Log in" type="submit" />
			</Form>
		</Formik>
	);
};

export default LoginForm;
