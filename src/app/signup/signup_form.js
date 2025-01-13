"use client";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import MyTextInput from "../components/MyTextInput";
import Button from "../components/Button";
import userSchema from "./schema";
import UseSignupAuth from "../firebase/authentication/useSignupAuth";

const SignUpForm = () => {
  const router = useRouter();

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
          UseSignupAuth(values.email, values.password, values);

          actions.resetForm({
            values: {
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            },
          });

          return router.push("/dashboard");
        } catch (err) {
          console.log("Error: ", err);
        }
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
