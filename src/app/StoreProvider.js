"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { store } from "./lib/store";

export const Providers = ({ children }) => {
	const storeRef = useRef();

	console.log(storeRef)

	return <Provider store={store}>{children}</Provider>;
};
