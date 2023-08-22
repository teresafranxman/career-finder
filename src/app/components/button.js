import React from "react";

const Button = ({ title, type }) => {
	return (
		<div className="button-container">
			<button type={type}>{title}</button>
		</div>
	);
};

export default Button;
