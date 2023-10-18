"use client";
import { Formik, Form } from "formik";
import MyTextInput from "../components/myTextInput";
import Button from "../components/button";
import userSchema from "./schema";
import { addDoc, collection } from "firebase/firestore";
import db from "../firebase/initFirebase";

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
			onSubmit={ async (values, actions) => {
				try {
					const newUser = await addDoc(collection(db, "users"), {
						firstName: values.firstName,
						lastName: values.lastName,
						email: values.email,
						password: values.password,
					});

					console.log("user created successfully", newUser);

					actions.resetForm({
						values: {
							firstName: "",
							lastName: "",
							email: "",
							password: "",
						},
					});

					return newUser;

				} catch (err) {
					console.log(err);
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
