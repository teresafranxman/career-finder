import { useField } from "formik";

const MyTextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="warning-container">{meta.error}</div>
			) : null}
		</>
	);
};

export default MyTextInput;
