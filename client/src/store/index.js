import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./companySlice";
import jobReducer from "./jobSlice";

export const store = configureStore({
  reducer: {
    company: companyReducer,
    job: jobReducer,
  },
});
