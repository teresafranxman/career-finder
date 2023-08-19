'use client'
import { useState } from "react";

const userValues = {
    firstName: '',
    lastName: '',
    password: '',
    email: ''
};

const Form = () => {
    const [values, setValues] = useState(userValues);
    // console.log(values);

    return (
        <>
            <h3>Sign Up Form</h3>
        </>
    )
}

export default Form;