"use client";
import { Formik, Form } from "formik";
import MyTextInput from "../components/MyTextInput/page";
import Button from "../components/Button/page";
import userSchema from "./schema";
import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/initFirebase";
import UseSignupAuth from "../authentication/signup_auth";

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
					const newUserDoc = doc(collection(db, "users"));

					await setDoc(newUserDoc, {
						id: newUserDoc.id,
						firstName: values.firstName,
						lastName: values.lastName,
						email: values.email,
						password: values.password,
					});

					UseSignupAuth(values.email, values.password);

					actions.resetForm({
						values: {
							firstName: "",
							lastName: "",
							email: "",
							password: "",
						},
					});

					// console.log("New user created successfully :", newUserDoc);
					return newUserDoc;
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
