"use client";
import { Provider } from "react-redux";
import { useRef } from "react";
import makeStore from "./lib/store";

const Providers = ({ children }) => {
  const storeRef = useRef();

  if (!storeRef.current) {
    // Create the store instance the first time the application renders.
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default Providers;
