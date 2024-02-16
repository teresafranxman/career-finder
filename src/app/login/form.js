"use client";
import { Form, Formik } from "formik";
import MyTextInput from "../components/MyTextInput";
import Button from "../components/Button/page";
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
        <MyTextInput label="Email" name="email" type="text" />
        <MyTextInput label="Password" name="password" type="text" />
        <Button title="Log in" type="submit" />
      </Form>
    </Formik>
  );
};

export default LoginForm;
