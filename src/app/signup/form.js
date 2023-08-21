"use client";
import { Formik, Form } from "formik";
import MyTextInput from "../components/myTextInput";
import Button from "../components/button";

const SignUpForm = () => {
	return (
		<Formik
			initialValues={{
				firstName: "",
				lastName: "",
				email: "",
				password: "",
			}}
			// validationSchema={schema}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			<Form>
				<MyTextInput label="First Name" name="firstName" type="text" />
				<MyTextInput label="Last Name" name="lastName" type="text" />
				<MyTextInput label="Email" name="email" type="text" />
                <MyTextInput label="Password" name="password" type="password" />
                <Button type="submit" title="Sign Up" />
			</Form>
		</Formik>
	);
};

export default SignUpForm;
