import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./index";

export const useReduxDispatch = () => useDispatch<AppDispatch>();

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;