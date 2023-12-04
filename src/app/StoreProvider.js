"use client";
import { Provider } from "react-redux";
import makeStore from "./lib/store";
import { useRef } from "react";

const Providers = ({ children }) => {
	const storeRef = useRef();

	if (!storeRef.current) {
		// create the store instance the first time this renders
		storeRef.current = makeStore()
	}
	return <Provider store={storeRef.current}>{children}</Provider>;
};

export default Providers;
