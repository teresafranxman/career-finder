"use client";
import { Form, Formik } from "formik";
import MyTextInput from "../components/myTextInput";
import Button from "../components/button";
import loginSchema from "./schema";

const LoginForm = () => {
	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			validationSchema={loginSchema}
			onSubmit={(values, actions) => {
				actions.resetForm({
					values: {
						email: "",
						password: "",
					},
				});
				console.log(values, actions);
			}}
		>
			<Form>
				<MyTextInput
					label="Email"
					name="email"
					type="text"
					autoComplete="email"
				/>
				<MyTextInput
					label="Password"
					name="password"
					type="text"
					autoComplete="off"
				/>
				<Button title="Log in" type="submit" />
			</Form>
		</Formik>
	);
};

export default LoginForm;
