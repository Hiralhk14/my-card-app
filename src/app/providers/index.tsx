"use client";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/index";
import { initCards } from "@/store/slices/cardSlice";

function StoreInitializer() {
  useEffect(() => {
    store.dispatch(initCards());
  }, []);
  return null;
}

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <StoreInitializer />
      {children}
    </Provider>
  );
};

export default ReduxProvider;