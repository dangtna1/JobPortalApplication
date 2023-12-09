import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companyList: {},
};

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    updateCompanyList: (state, action) => {
      state.companyList = action.payload;
    },
  },
});

export const { updateCompanyList } = companySlice.actions

export default companySlice.reducer
