import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { authSlice } from "./slices/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { dateSlice } from "@/store/slices/selectedDateSlice";
import { alcoEntriesSlice } from "@/store/slices/alcoEntriesSlice";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [dateSlice.name]: dateSlice.reducer,
  [alcoEntriesSlice.name]: alcoEntriesSlice.reducer,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
export type RootState = ReturnType<typeof rootReducer>;
